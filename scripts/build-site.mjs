#!/usr/bin/env node
/**
 * Genera el sitio estático en web/ a partir de los mockups en mokup/
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { translateToSpanish } from './i18n-es.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const MOKUP = path.join(ROOT, 'mokup');
const OUT = path.join(ROOT, 'web');

const PAGE_MAP = {
  inicio_soluciones_orba: 'index.html',
  desarrollo_web_soluciones_orba: 'desarrollo-web.html',
  plataformas_a_la_medida_soluciones_orba: 'plataformas.html',
  inteligencia_artificial_soluciones_orba: 'inteligencia-artificial.html',
  ciencia_de_datos_soluciones_orba: 'ciencia-de-datos.html',
  sistemas_ciberf_sicos_soluciones_orba: 'sistemas-ciberfisicos.html',
  control_y_automatizaci_n_soluciones_orba: 'control-automatizacion.html',
  prototipado_soluciones_orba: 'prototipado.html',
  plugins_wordpress_soluciones_orba: 'plugins-wordpress.html',
  hosting_soluciones_orba: 'hosting.html',
  soporte_t_cnico_soluciones_orba: 'soporte.html',
  nosotros_soluciones_orba: 'nosotros.html',
  contacto_soluciones_orba: 'contacto.html',
  proyectos_soluciones_orba: 'proyectos.html',
};

/** Etiquetas de enlaces en español → archivo */
const HREF_BY_LABEL = {
  Inicio: 'index.html',
  'Desarrollo web': 'desarrollo-web.html',
  'Software a medida': 'plataformas.html',
  'IA y datos': 'inteligencia-artificial.html',
  'Sistemas ciberfísicos': 'sistemas-ciberfisicos.html',
  'Hosting y soporte': 'hosting.html',
  Nosotros: 'nosotros.html',
  'Soporte técnico': 'soporte.html',
  'Ver casos de éxito': 'proyectos.html',
  'Ver Casos de Éxito': 'proyectos.html',
  'Leer historia de éxito': 'proyectos.html',
  'Ciencia de datos': 'ciencia-de-datos.html',
  'IA y ciencia de datos': 'ciencia-de-datos.html',
  Prototipado: 'prototipado.html',
  Hosting: 'hosting.html',
  Proyectos: 'proyectos.html',
  'Plugins WordPress': 'plugins-wordpress.html',
  'Control y automatización': 'control-automatizacion.html',
};

function linkifyAnchors(html) {
  let out = html;
  for (const [label, href] of Object.entries(HREF_BY_LABEL)) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(
      new RegExp(`(<a\\s[^>]*href=")#"([^>]*>\\s*${escaped}\\s*</a>)`, 'gi'),
      `$1${href}"$2`
    );
  }
  return out;
}

function buttonToLink(html, label, href) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return html.replace(
    new RegExp(`<button([^>]*)>\\s*${escaped}\\s*</button>`, 'gi'),
    `<a href="${href}"$1 class="inline-flex items-center justify-center">$&</a>`.replace(
      new RegExp(`<a href="${href}"([^>]*)><a href="${href}"[^>]*>\\s*${escaped}\\s*</button>`, 'gi'),
      `<a href="${href}"$1>${label}</a>`
    )
  );
}

function patchButtons(html) {
  let out = html;
  const ctas = [
    ['Contacto', 'contacto.html'],
    ['Nosotros', 'nosotros.html'],
  ];
  for (const [label, href] of ctas) {
    const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    out = out.replace(
      new RegExp(`<button([^>]*)>\\s*${escaped}\\s*</button>`, 'gi'),
      (_, attrs) => {
        const clsMatch = attrs.match(/class="([^"]*)"/);
        const rest = attrs.replace(/\s*class="[^"]*"/, '').trim();
        const cls = clsMatch
          ? `${clsMatch[1]} inline-flex items-center justify-center`
          : 'inline-flex items-center justify-center';
        const restAttr = rest ? ` ${rest}` : '';
        return `<a href="${href}" class="${cls}"${restAttr}>${label}</a>`;
      }
    );
  }
  return out;
}

function patchCommon(html, filename) {
  let out = linkifyAnchors(html);
  out = patchButtons(out);

  // Logo → inicio
  out = out.replace(
    /<!-- Brand Logo -->\s*<div class="flex items-center gap-xs">/g,
    '<!-- Brand Logo -->\n<a href="index.html" class="flex items-center gap-xs">'
  );
  out = out.replace(
    /(<img alt="Soluciones Orba Logo"[^/]*\/>\s*<span class="font-headline-lg[^>]*>Soluciones Orba<\/span>)\s*<\/div>(\s*<!-- Desktop Links -->)/g,
    '$1</a>$2'
  );

  // Enlace Nosotros en header (variante <a>)
  out = out.replace(
    /<a class="([^"]*)" href="#">Nosotros<\/a>/g,
    '<a class="$1" href="nosotros.html">Nosotros</a>'
  );

  if (filename === 'index.html') {
    out = out.replace(
      /<!-- Services Bento Grid -->\s*<section class="py-xl bg-white">/,
      '<!-- Services Bento Grid -->\n<section id="servicios" class="py-xl bg-white">'
    );
    out = out.replace(
      /<button class="border-2 border-primary text-primary px-xl py-md[^"]*">\s*Nuestros Servicios\s*<\/button>/,
      '<a href="#servicios" class="border-2 border-primary text-primary px-xl py-md font-label-md text-label-md font-bold rounded-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all inline-flex items-center justify-center">Nuestros Servicios</a>'
    );
    out = out.replace(
      /<button class="bg-primary text-on-primary px-xl py-md[^"]*">\s*Hablemos de tu proyecto/,
      '<a href="contacto.html" class="bg-primary text-on-primary px-xl py-md font-label-md text-label-md font-bold rounded-lg hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-sm">Hablemos de tu proyecto'
    );
    out = out.replace(
      /(arrow_forward<\/span>\s*)<\/button>/,
      '$1</a>'
    );
    out = out.replace(
      /<a class="inline-flex items-center gap-xs font-label-md[^"]*" href="#">\s*Ver casos de éxito/,
      '<a class="inline-flex items-center gap-xs font-label-md text-label-md mt-xl hover:translate-x-2 transition-transform" href="proyectos.html">Ver casos de éxito'
    );
    out = out.replace(
      /<button class="mt-lg border border-primary[^"]*">\s*Explorar hardware\s*<\/button>/i,
      '<a href="sistemas-ciberfisicos.html" class="mt-lg border border-primary px-lg py-xs font-label-md text-label-md rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-colors inline-block">Explorar hardware</a>'
    );
  }

  // CTAs comunes en otras páginas
  out = out.replace(
    /<button class="([^"]*bg-primary[^"]*)">\s*Empezar Proyecto/gi,
    '<a href="contacto.html" class="$1 inline-flex items-center gap-xs">Empezar proyecto'
  );
  out = out.replace(
    /(Empezar proyecto[\s\S]*?arrow_forward<\/span>\s*)<\/button>/i,
    '$1</a>'
  );
  out = out.replace(
    /<button class="([^"]*)">\s*Agendar una consulta técnica\s*<\/button>/,
    '<a href="contacto.html" class="$1 inline-flex items-center justify-center">Agendar una consulta técnica</a>'
  );
  out = out.replace(
    /<button class="([^"]*)">\s*Ver Casos de Éxito\s*<\/button>/,
    '<a href="proyectos.html" class="$1 inline-flex items-center justify-center">Ver casos de éxito</a>'
  );

  out = out.replace(
    /document\.querySelectorAll\('a\[href\^="#"\]'\)\.forEach\(anchor => \{[\s\S]*?\}\);/,
    `document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (!target) return;
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });`
  );

  return out;
}

function build() {
  fs.mkdirSync(OUT, { recursive: true });

  for (const [folder, filename] of Object.entries(PAGE_MAP)) {
    const src = path.join(MOKUP, folder, 'code.html');
    if (!fs.existsSync(src)) {
      console.warn(`Omitido (no existe): ${src}`);
      continue;
    }
    let html = fs.readFileSync(src, 'utf8');
    html = translateToSpanish(html);
    html = patchCommon(html, filename);
    fs.writeFileSync(path.join(OUT, filename), html, 'utf8');
    console.log(`✓ ${filename}`);
  }

  console.log(`\nSitio generado en ${OUT} (español)`);
}

build();
