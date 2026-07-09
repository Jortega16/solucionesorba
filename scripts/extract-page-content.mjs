#!/usr/bin/env node
/** Extrae <main> de web/*.html → src/content/{slug}.html */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const WEB = path.join(ROOT, 'web');
const OUT = path.join(ROOT, 'src', 'content');

const SLUG_MAP = {
  'index.html': 'inicio',
  'desarrollo-web.html': 'desarrollo-web',
  'plataformas.html': 'plataformas',
  'inteligencia-artificial.html': 'inteligencia-artificial',
  'ciencia-de-datos.html': 'ciencia-de-datos',
  'sistemas-ciberfisicos.html': 'sistemas-ciberfisicos',
  'control-automatizacion.html': 'control-automatizacion',
  'prototipado.html': 'prototipado',
  'plugins-wordpress.html': 'plugins-wordpress',
  'hosting.html': 'hosting',
  'soporte.html': 'soporte',
  'nosotros.html': 'nosotros',
  'contacto.html': 'contacto',
  'proyectos.html': 'proyectos',
};

function extractMain(html) {
  const start = html.indexOf('<main');
  const end = html.lastIndexOf('</main>');
  if (start === -1 || end === -1) return '';
  const openEnd = html.indexOf('>', start) + 1;
  return html.slice(openEnd, end).trim();
}

function normalizeFragment(fragment) {
  return fragment
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sstyle="font-variation-settings:[^"]*"/g, '')
    .replace(/\srequired=""/g, ' required')
    .replace(/href="index\.html"/g, 'href="/"')
    .replace(/href="([^"]+)\.html"/g, 'href="/$1"')
    .replace(/href="#servicios"/g, 'href="/#servicios"')
    .replace(
      /<section class="py-xl bg-white">/,
      '<section id="servicios" class="py-xl bg-white">'
    );
}

fs.mkdirSync(OUT, { recursive: true });

for (const [file, slug] of Object.entries(SLUG_MAP)) {
  const src = path.join(WEB, file);
  if (!fs.existsSync(src)) continue;
  const html = fs.readFileSync(src, 'utf8');
  const main = normalizeFragment(extractMain(html));
  fs.writeFileSync(path.join(OUT, `${slug}.html`), main, 'utf8');
  console.log(`✓ ${slug}.html`);
}
