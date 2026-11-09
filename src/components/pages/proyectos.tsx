'use client';

import { useMemo, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/Icon';
import { PageImage } from '@/components/ui/PageImage';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { IMAGES } from '@/lib/images';
import { localeFromPathname, withLocale, type Locale } from '@/lib/i18n';

type ProjectTagKey = 'all' | 'ai' | 'saas' | 'web' | 'integrations';

const FILTER_KEYS: readonly ProjectTagKey[] = ['all', 'ai', 'saas', 'web', 'integrations'] as const;

const TAG_LABELS: Record<Locale, Record<ProjectTagKey, string>> = {
  es: {
    all: 'Todos',
    ai: 'IA y datos',
    saas: 'SaaS',
    web: 'Desarrollo web',
    integrations: 'Integraciones',
  },
  en: {
    all: 'All',
    ai: 'AI & Data',
    saas: 'SaaS',
    web: 'Web Development',
    integrations: 'Integrations',
  },
  pt: {
    all: 'Todos',
    ai: 'IA e Dados',
    saas: 'SaaS',
    web: 'Desenvolvimento Web',
    integrations: 'Integrações',
  },
};

const UI_COPY: Record<
  Locale,
  {
    eyebrow: string;
    heroTitle: string;
    heroDescription: string;
    filterAria: string;
    ownerPrefix: string;
    resultLabel: string;
    visitLabel: string;
    zoomLabel: string;
    closePreviewAria: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
  }
> = {
  es: {
    eyebrow: 'Trabajo comprobable',
    heroTitle: 'Soluciones desarrolladas para retos reales',
    heroDescription:
      'Una selección de plataformas, comercios electrónicos e implementaciones de datos. Algunos accesos requieren coordinación por confidencialidad y seguridad.',
    filterAria: 'Filtrar proyectos',
    ownerPrefix: 'Propietario',
    resultLabel: 'Resultado',
    visitLabel: 'Visitar proyecto',
    zoomLabel: 'Ampliar',
    closePreviewAria: 'Cerrar vista previa',
    ctaTitle: '¿Necesita una solución similar?',
    ctaDescription:
      'Cuéntenos el reto. Evaluaremos el proceso, las integraciones y la ruta técnica más conveniente.',
    ctaButton: 'Solicitar evaluación del proyecto',
  },
  en: {
    eyebrow: 'Proven track record',
    heroTitle: 'Solutions built for real-world challenges',
    heroDescription:
      'A curated selection of platforms, e-commerce solutions, and data implementations. Some accesses require prior coordination for confidentiality and security.',
    filterAria: 'Filter projects',
    ownerPrefix: 'Owner',
    resultLabel: 'Outcome',
    visitLabel: 'Visit project',
    zoomLabel: 'Enlarge',
    closePreviewAria: 'Close preview',
    ctaTitle: 'Do you need a similar solution?',
    ctaDescription:
      'Tell us about your challenge. We will evaluate the process, required integrations, and the most effective technical roadmap.',
    ctaButton: 'Request project evaluation',
  },
  pt: {
    eyebrow: 'Trabalho comprovado',
    heroTitle: 'Soluções desenvolvidas para desafios reais',
    heroDescription:
      'Uma seleção de plataformas, e-commerces e implementações de dados. Alguns acessos exigem alinhamento prévio por confidencialidade e segurança.',
    filterAria: 'Filtrar projetos',
    ownerPrefix: 'Proprietário',
    resultLabel: 'Resultado',
    visitLabel: 'Visitar projeto',
    zoomLabel: 'Ampliar',
    closePreviewAria: 'Fechar pré-visualização',
    ctaTitle: 'Precisa de uma solução similar?',
    ctaDescription:
      'Conte-nos o seu desafio. Avaliaremos o processo, integrações necessárias e a melhor rota técnica.',
    ctaButton: 'Solicitar avaliação do projeto',
  },
};

interface LocalizedProject {
  title: string;
  tagKey: Exclude<ProjectTagKey, 'all'>;
  image: string;
  href: string;
  owner?: string;
  badge?: Record<Locale, string>;
  contribution?: Record<Locale, string>;
  description: Record<Locale, string>;
  result: Record<Locale, string>;
  access: Record<Locale, string>;
}

const projects: readonly LocalizedProject[] = [
  {
    title: 'Facturación Orba',
    tagKey: 'saas',
    badge: {
      es: 'Nuestro desarrollo',
      en: 'In-house Development',
      pt: 'Nosso Desenvolvimento',
    },
    contribution: {
      es: 'Arquitectura de software, plataforma SaaS e integración tributaria con el Ministerio de Hacienda',
      en: 'Software architecture, SaaS platform, and tax authority integration with the Ministry of Finance',
      pt: 'Arquitetura de software, plataforma SaaS e integração fiscal com o Ministério da Fazenda',
    },
    description: {
      es: 'Plataforma SaaS integral de facturación electrónica, punto de venta (POS), inventario multi-bodega, compras y cuentas corrientes. Desarrollada para operar en Costa Rica con integración directa y validación en tiempo real ante el Ministerio de Hacienda (con arquitectura multi-país en adopción para Perú y Guatemala). Incluye Buzón Orba para recepción automática y validación de XML, reportería fiscal y paneles analíticos en tiempo real.',
      en: 'Comprehensive SaaS platform for electronic invoicing, point of sale (POS), multi-warehouse inventory, procurement, and accounts receivable/payable. Built for Costa Rica with real-time tax validation before the Ministry of Finance (with a multi-country architecture expanding to Peru and Guatemala). Includes Buzón Orba for automated XML invoice reception and validation, tax reporting, and live analytics dashboards.',
      pt: 'Plataforma SaaS abrangente de faturamento eletrônico, ponto de venda (POS), estoque multi-depósito, compras e contas correntes. Desenvolvida para operar na Costa Rica com validação fiscal em tempo real junto ao Ministério da Fazenda (com arquitetura multi-país em expansão para Peru e Guatemala). Inclui Buzón Orba para recepção e validação automática de XMLs, relatórios fiscais e dashboards analíticos em tempo real.',
    },
    result: {
      es: 'Emisión y aceptación inmediata de comprobantes tributarios, conciliación automática de gastos y control operativo y financiero centralizado.',
      en: 'Instant tax invoice issuance and approval, automated expense reconciliation, and unified operational and financial control.',
      pt: 'Emissão e aprovação instantânea de notas fiscais, conciliação automática de despesas e controle operacional e financeiro centralizado.',
    },
    image: IMAGES.facturacionOrba,
    href: 'https://facturacionorba.com',
    access: {
      es: 'Producto propio disponible',
      en: 'Proprietary product available',
      pt: 'Produto próprio disponível',
    },
  },
  {
    title: 'Sense',
    tagKey: 'ai',
    owner: 'Neural Coders',
    contribution: {
      es: 'Desarrollo tecnológico para Neural Coders',
      en: 'Technology development for Neural Coders',
      pt: 'Desenvolvimento tecnológico para Neural Coders',
    },
    description: {
      es: 'Plataforma de inteligencia artificial privada desarrollada para Neural Coders, que permite consultar el conocimiento empresarial mediante lenguaje natural. Integra documentos, bases de datos y sistemas con respuestas fundamentadas en fuentes verificables, controles de acceso por departamento y trazabilidad.',
      en: 'Private enterprise AI platform developed for Neural Coders, enabling natural-language queries across corporate knowledge bases. Connects documents, databases, and internal systems with grounded, source-verified answers, departmental access controls, and full auditability.',
      pt: 'Plataforma de inteligência artificial privada desenvolvida para a Neural Coders, permitindo consultar o conhecimento corporativo por meio de linguagem natural. Integra documentos, bancos de dados e sistemas com respostas fundamentadas em fontes verificáveis, controle de acesso e rastreabilidade.',
    },
    result: {
      es: 'Conocimiento corporativo unificado, consultas con evidencia y gobierno de accesos.',
      en: 'Unified corporate knowledge, evidence-backed answers, and robust access governance.',
      pt: 'Conhecimento corporativo unificado, consultas com evidências e governança de acessos.',
    },
    image: IMAGES.proyectoIa,
    href: 'https://www.neuralcoders.com/sense/',
    access: {
      es: 'Producto de Neural Coders',
      en: 'Neural Coders product',
      pt: 'Produto da Neural Coders',
    },
  },
  {
    title: 'Dataizen',
    tagKey: 'ai',
    owner: 'Neural Coders',
    contribution: {
      es: 'Desarrollo tecnológico para Neural Coders',
      en: 'Technology development for Neural Coders',
      pt: 'Desenvolvimento tecnológico para Neural Coders',
    },
    description: {
      es: 'Plataforma de inteligencia y gobierno de datos desarrollada para Neural Coders. Centraliza fuentes de información y reúne catálogo de datos, calidad, políticas de acceso, dashboards, análisis de procesos e inteligencia artificial para facilitar decisiones empresariales.',
      en: 'Data intelligence and governance platform built for Neural Coders. Centralizes distributed data sources with cataloging, data quality, access policies, self-service dashboards, process analytics, and AI models to drive informed business decisions.',
      pt: 'Plataforma de inteligência e governança de dados desenvolvida para a Neural Coders. Centraliza fontes de informação com catálogo de dados, qualidade, políticas de acesso, dashboards, análise de processos e IA para decisões empresariais.',
    },
    result: {
      es: 'Datos integrados y gobernados, análisis autoservicio e indicadores confiables.',
      en: 'Integrated and governed enterprise data, self-service analytics, and reliable KPIs.',
      pt: 'Dados integrados e governados, análises self-service e indicadores confiáveis.',
    },
    image: IMAGES.plataformas,
    href: 'https://www.neuralcoders.com/dataizen-en/',
    access: {
      es: 'Producto de Neural Coders',
      en: 'Neural Coders product',
      pt: 'Produto da Neural Coders',
    },
  },
  {
    title: 'Airwize',
    tagKey: 'saas',
    owner: 'J4 Soluciones',
    contribution: {
      es: 'Desarrollo de plataforma SaaS para J4 Soluciones',
      en: 'SaaS platform development for J4 Soluciones',
      pt: 'Desenvolvimento de plataforma SaaS para J4 Soluciones',
    },
    description: {
      es: 'Aplicación web empresarial construida para administrar procesos desde una plataforma segura, accesible y preparada para evolucionar.',
      en: 'Enterprise web application built to streamline and manage business processes within a secure, cloud-accessible, and scalable environment.',
      pt: 'Aplicação web corporativa criada para gerenciar processos a partir de uma plataforma segura, acessível e pronta para escalar.',
    },
    result: {
      es: 'Operación centralizada en una plataforma SaaS.',
      en: 'Centralized operations in an intuitive SaaS platform.',
      pt: 'Operação centralizada em uma plataforma SaaS.',
    },
    image: IMAGES.desarrolloResponsive,
    href: 'https://airwizecr.com/sign-in',
    access: {
      es: 'Demostración disponible',
      en: 'Demo available',
      pt: 'Demonstração disponível',
    },
  },
  {
    title: 'Tiendita CSG',
    tagKey: 'integrations',
    owner: 'Coopesangabriel SRL',
    contribution: {
      es: 'Desarrollo tecnológico e integración para Coopesangabriel SRL',
      en: 'Technology development and integration for Coopesangabriel SRL',
      pt: 'Desenvolvimento tecnológico e integração para Coopesangabriel SRL',
    },
    description: {
      es: 'Comercio electrónico integrado con procesos internos y opciones de financiamiento para brindar una experiencia de compra completa.',
      en: 'E-commerce platform tightly integrated with internal workflows and credit/financing options to deliver a seamless shopping experience.',
      pt: 'E-commerce integrado a fluxos internos e opções de financiamento para oferecer uma experiência de compra completa.',
    },
    result: {
      es: 'Venta en línea, sincronización y gestión de crédito.',
      en: 'Online sales, catalog synchronization, and credit management.',
      pt: 'Vendas online, sincronização e gestão de crédito.',
    },
    image: IMAGES.desarrolloWeb,
    href: 'https://tienditacsg.com',
    access: {
      es: 'Sitio público',
      en: 'Public site',
      pt: 'Site público',
    },
  },
  {
    title: 'J4 Soluciones',
    tagKey: 'web',
    owner: 'J4 Soluciones',
    contribution: {
      es: 'Desarrollo web corporativo para J4 Soluciones',
      en: 'Corporate web development for J4 Soluciones',
      pt: 'Desenvolvimento web corporativo para J4 Soluciones',
    },
    description: {
      es: 'Presencia digital corporativa enfocada en comunicar servicios con claridad y facilitar el contacto comercial.',
      en: 'Corporate digital presence tailored to convey service offerings with clarity and optimize client conversion pipelines.',
      pt: 'Presença digital corporativa focada em comunicar serviços com clareza e facilitar a captação de clientes.',
    },
    result: {
      es: 'Canal digital para presentar servicios y captar oportunidades.',
      en: 'Digital channel to showcase capabilities and capture qualified leads.',
      pt: 'Canal digital para apresentar serviços e captar oportunidades.',
    },
    image: IMAGES.homeCode,
    href: 'https://j4soluciones.com/home',
    access: {
      es: 'Sitio público',
      en: 'Public site',
      pt: 'Site público',
    },
  },
  {
    title: 'The Book and Toy Company',
    tagKey: 'web',
    owner: 'The Book and Toy',
    contribution: {
      es: 'Desarrollo de comercio electrónico para The Book and Toy',
      en: 'E-commerce development for The Book and Toy',
      pt: 'Desenvolvimento de e-commerce para The Book and Toy',
    },
    description: {
      es: 'Tienda en línea desarrollada sobre WordPress y WooCommerce para administrar catálogo, pedidos y experiencia de compra.',
      en: 'Online store built on WordPress and WooCommerce to manage product catalogs, orders, and a smooth checkout journey.',
      pt: 'Loja virtual desenvolvida sobre WordPress e WooCommerce para gerenciar catálogo, pedidos e experiência de compra.',
    },
    result: {
      es: 'Canal de comercio electrónico administrable.',
      en: 'Easily manageable e-commerce channel.',
      pt: 'Canal de e-commerce administrável.',
    },
    image: IMAGES.wordpress,
    href: 'https://thebookandtoycompany.com',
    access: {
      es: 'Sitio público',
      en: 'Public site',
      pt: 'Site público',
    },
  },
];

export function ProyectosPage() {
  const pathname = usePathname();
  const locale = localeFromPathname(pathname);
  const copy = UI_COPY[locale];
  const tagLabels = TAG_LABELS[locale];

  const [activeFilter, setActiveFilter] = useState<ProjectTagKey>('all');
  const [previewImage, setPreviewImage] = useState<{ src: string; title: string } | null>(null);

  const visibleProjects = useMemo(
    () =>
      projects.filter(
        (project) => activeFilter === 'all' || project.tagKey === activeFilter
      ),
    [activeFilter]
  );

  return (
    <>
      <section className="py-xl border-b border-outline-variant bg-surface-container-low">
        <div className="w-[92%] lg:w-[80%] mx-auto">
          <span className="font-label-md text-secondary uppercase tracking-widest">
            {copy.eyebrow}
          </span>
          <h1 className="font-display-lg text-display-lg mt-sm mb-sm tracking-tight text-primary">
            {copy.heroTitle}
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mb-xl">
            {copy.heroDescription}
          </p>
          <div className="flex flex-wrap gap-sm" aria-label={copy.filterAria}>
            {FILTER_KEYS.map((filterKey) => (
              <button
                key={filterKey}
                type="button"
                aria-pressed={activeFilter === filterKey}
                onClick={() => setActiveFilter(filterKey)}
                className={`px-lg py-xs font-label-md text-label-md rounded-lg transition-all ${
                  activeFilter === filterKey
                    ? 'bg-primary text-on-primary'
                    : 'bg-white text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {tagLabels[filterKey]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-xl">
        <div className="w-[92%] lg:w-[80%] mx-auto grid md:grid-cols-2 gap-gutter items-stretch">
          {visibleProjects.map((project) => {
            const badgeText = project.badge ? project.badge[locale] : undefined;
            const contributionText = project.contribution ? project.contribution[locale] : undefined;
            const descriptionText = project.description[locale];
            const resultText = project.result[locale];
            const accessText = project.access[locale];
            const categoryLabel = tagLabels[project.tagKey];

            return (
              <article
                key={project.title}
                className="flex flex-col border border-outline-variant rounded-xl overflow-hidden bg-white hover:border-secondary hover:shadow-md transition-all h-full group"
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setPreviewImage({ src: project.image, title: project.title })}
                  onKeyDown={(e) =>
                    e.key === 'Enter' && setPreviewImage({ src: project.image, title: project.title })
                  }
                  className="relative w-full aspect-[16/10] bg-surface-container overflow-hidden shrink-0 cursor-zoom-in"
                  title={copy.zoomLabel}
                >
                  <PageImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-sm right-sm bg-black/60 hover:bg-black/80 text-white rounded-md px-sm py-xs backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-xs font-caption pointer-events-none">
                    <Icon name="zoom_in" className="text-[18px]" /> {copy.zoomLabel}
                  </div>
                </div>
                <div className="p-lg flex flex-col flex-1">
                  <span className="font-label-md text-secondary uppercase tracking-wider">
                    {categoryLabel}
                  </span>
                  <h2 className="font-headline-md text-primary mt-xs mb-sm min-h-[32px] flex items-center">
                    {project.title}
                  </h2>
                  {badgeText ? (
                    <div className="mb-sm rounded-lg bg-surface-container-low px-md py-sm border border-secondary/30 min-h-[76px] flex flex-col justify-center">
                      <p className="font-label-md text-secondary font-semibold flex items-center gap-xs">
                        <Icon name="verified" className="text-[18px]" />
                        {badgeText}
                      </p>
                      {contributionText && (
                        <p className="font-caption text-on-surface-variant mt-xs line-clamp-2">
                          {contributionText}
                        </p>
                      )}
                    </div>
                  ) : project.owner ? (
                    <div className="mb-sm rounded-lg bg-surface-container-low px-md py-sm border border-outline-variant min-h-[76px] flex flex-col justify-center">
                      <p className="font-label-md text-primary font-medium">
                        {copy.ownerPrefix}: {project.owner}
                      </p>
                      {contributionText && (
                        <p className="font-caption text-on-surface-variant mt-xs line-clamp-2">
                          {contributionText}
                        </p>
                      )}
                    </div>
                  ) : null}
                  <p className="font-body-md text-on-surface-variant flex-1">{descriptionText}</p>
                  <div className="mt-md pt-md border-t border-outline-variant">
                    <p className="font-label-md text-primary font-medium">{copy.resultLabel}</p>
                    <p className="font-body-md text-on-surface-variant mt-xs">{resultText}</p>
                  </div>
                  <div className="mt-auto pt-lg flex flex-wrap items-center justify-between gap-sm border-t border-outline-variant">
                    <span className="font-caption text-on-surface-variant">{accessText}</span>
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-xs font-label-md text-secondary hover:text-primary transition-colors"
                    >
                      {copy.visitLabel} <Icon name="open_in_new" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="py-xl bg-surface-container">
        <div className="w-[92%] lg:w-[80%] mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg mb-sm text-primary">{copy.ctaTitle}</h2>
          <p className="font-body-lg text-on-surface-variant mb-lg max-w-2xl mx-auto">
            {copy.ctaDescription}
          </p>
          <ButtonLink
            href={withLocale('/contacto', locale)}
            className="px-xl py-md rounded-lg"
          >
            {copy.ctaButton}
          </ButtonLink>
        </div>
      </section>

      {previewImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-md backdrop-blur-sm animate-fade-in"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[92vh] bg-surface rounded-xl overflow-hidden shadow-2xl flex flex-col border border-outline-variant"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-sm px-md flex items-center justify-between border-b border-outline-variant bg-surface-container-low">
              <h3 className="font-headline-sm text-primary font-medium">{previewImage.title}</h3>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="p-xs text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container transition-colors"
                aria-label={copy.closePreviewAria}
              >
                <Icon name="close" className="text-xl" />
              </button>
            </div>
            <div className="p-md flex items-center justify-center bg-black/10 overflow-auto max-h-[82vh]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImage.src}
                alt={previewImage.title}
                className="max-w-full max-h-[76vh] object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
