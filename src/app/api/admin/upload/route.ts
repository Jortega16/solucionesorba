import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    if (!file) {
      return NextResponse.json({ error: 'No se envió ningún archivo' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: 'Formato no soportado. Usa PNG, JPG, WebP, SVG o GIF.' },
        { status: 400 }
      );
    }

    // Máximo 10MB
    if (buffer.length > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'La imagen excede el límite de 10 MB.' },
        { status: 400 }
      );
    }

    const ext = path.extname(file.name) || '.jpg';
    const baseName = path
      .basename(file.name, ext)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9_-]/g, '-')
      .slice(0, 40) || 'blog-image';
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e4)}`;
    const filename = `${baseName}-${uniqueSuffix}${ext}`;

    const uploadDir = path.join(process.cwd(), 'public', 'images', 'blog');
    await mkdir(uploadDir, { recursive: true });
    const filePath = path.join(uploadDir, filename);

    await writeFile(filePath, buffer);

    const publicUrl = `/images/blog/${filename}`;
    return NextResponse.json({ url: publicUrl, name: file.name, filename });
  } catch (error) {
    console.error('Error al subir imagen:', error);
    return NextResponse.json({ error: 'Error al guardar la imagen en el servidor' }, { status: 500 });
  }
}
