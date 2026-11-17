'use client';

import { useEffect, useRef, useState } from 'react';

interface Snowflake {
  x: number;
  y: number;
  radius: number;
  speed: number;
  wind: number;
  swaySpeed: number;
  swayWidth: number;
  opacity: number;
}

export function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Detectar preferencia de accesibilidad (si está activa, animación ultra suave)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = mediaQuery.matches;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setupCanvas = () => {
      if (!canvas || !ctx) return;
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const onResize = () => {
      setupCanvas();
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Cantidad equilibrada para que la nevada sea claramente visible y fluida
    const flakeCount = Math.min(Math.max(Math.floor(width / 18), isReducedMotion ? 25 : 55), 90);

    const flakes: Snowflake[] = Array.from({ length: flakeCount }, () => {
      // 15% de copos más grandes y esponjosos (primer plano), 85% estándar
      const isLarge = Math.random() < 0.15;
      const radius = isLarge
        ? Math.random() * 2.2 + 4.0 // 4.0 a 6.2px
        : Math.random() * 2.0 + 1.8; // 1.8 a 3.8px

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius,
        speed: (Math.random() * 1.2 + 0.9) * (isReducedMotion ? 0.5 : 1),
        wind: (Math.random() - 0.5) * 0.3,
        swaySpeed: Math.random() * 0.02 + 0.01,
        swayWidth: Math.random() * 1.6 + 0.6,
        opacity: Math.random() * 0.3 + 0.68, // 0.68 a 0.98: alta visibilidad
      };
    });

    let angle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.015;

      for (let i = 0; i < flakes.length; i++) {
        const flake = flakes[i];
        flake.y += flake.speed;

        if (!isReducedMotion) {
          flake.x += Math.sin(angle * flake.swaySpeed * 100 + i) * flake.swayWidth * 0.4 + flake.wind;
        }

        // Reinicio cuando el copo sale por la parte inferior
        if (flake.y > height + 10) {
          flake.y = -10;
          flake.x = Math.random() * width;
        }

        // Si sale por los laterales, envolver
        if (flake.x > width + 10) flake.x = -10;
        if (flake.x < -10) flake.x = width + 10;

        // Dibujar el copo con sombra y gradiente para contraste perfecto sobre fondos claros y oscuros
        ctx.save();
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);

        // Sombra suave para destacar sobre el fondo blanco del sitio
        ctx.shadowColor = 'rgba(15, 23, 42, 0.28)';
        ctx.shadowBlur = Math.max(flake.radius * 1.6, 3.5);
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 1;

        // Gradiente radial: blanco puro en el centro con un delicado tono azul hielo en el borde
        const gradient = ctx.createRadialGradient(
          flake.x,
          flake.y,
          0,
          flake.x,
          flake.y,
          flake.radius
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${flake.opacity})`);
        gradient.addColorStop(0.7, `rgba(240, 248, 255, ${flake.opacity * 0.95})`);
        gradient.addColorStop(1, `rgba(186, 215, 248, ${flake.opacity * 0.85})`);

        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[60]"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    />
  );
}
