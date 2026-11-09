import type { Locale } from '../i18n';

export interface BlogTranslation {
  eyebrow: string;
  heroTitle: string;
  heroDescription: string;
  emptyNoticePrefix: string;
  emptyNoticeLink: string;
  subscribeButton: string;
  upcomingDate: string;
  publishedDate: string;
  backToBlog: string;
  placeholderPosts: { title: string; category: string }[];
}

export const BLOG_TRANSLATIONS: Record<Locale, BlogTranslation> = {
  es: {
    eyebrow: 'Blog',
    heroTitle: 'Ideas, guías y novedades tecnológicas',
    heroDescription:
      'Artículos sobre desarrollo, automatización, inteligencia artificial y transformación digital para empresas y equipos técnicos.',
    emptyNoticePrefix: 'Estamos preparando nuevos artículos especializados. Mientras tanto, ',
    emptyNoticeLink: 'cuéntenos qué temas le interesan',
    subscribeButton: 'Suscribirme a novedades',
    upcomingDate: 'Próximamente',
    publishedDate: 'Publicado',
    backToBlog: '← Volver al blog',
    placeholderPosts: [
      {
        title: 'Cómo elegir entre desarrollo web y software a medida',
        category: 'Desarrollo digital',
      },
      {
        title: 'IA en la industria: casos prácticos para pymes',
        category: 'IA y datos',
      },
      {
        title: 'Sistemas ciberfísicos sin complicar su operación',
        category: 'Ingeniería',
      },
    ],
  },
  en: {
    eyebrow: 'Insights & Blog',
    heroTitle: 'Engineering perspectives, guides, and tech analysis',
    heroDescription:
      'Articles on modern software architecture, process automation, applied AI, and digital transformation for technical teams and leadership.',
    emptyNoticePrefix: 'We are curating our upcoming technical guides. In the meantime, ',
    emptyNoticeLink: 'tell us what topics interest you most',
    subscribeButton: 'Subscribe to technical updates',
    upcomingDate: 'Coming soon',
    publishedDate: 'Published',
    backToBlog: '← Back to blog',
    placeholderPosts: [
      {
        title: 'Choosing between custom web development and packaged SaaS',
        category: 'Digital Engineering',
      },
      {
        title: 'Applied AI in manufacturing: practical enterprise use cases',
        category: 'AI & Data',
      },
      {
        title: 'Cyber-physical systems: connecting shop floor without operational downtime',
        category: 'Industrial IoT',
      },
    ],
  },
  pt: {
    eyebrow: 'Blog & Artigos',
    heroTitle: 'Ideias, guias e novidades tecnológicas',
    heroDescription:
      'Artigos sobre engenharia de software, automação de processos, inteligência artificial aplicada e transformação digital.',
    emptyNoticePrefix: 'Estamos preparando novos artigos especializados. Enquanto isso, ',
    emptyNoticeLink: 'conte-nos quais temas mais lhe interessam',
    subscribeButton: 'Receber novidades técnicas',
    upcomingDate: 'Em breve',
    publishedDate: 'Publicado',
    backToBlog: '← Voltar ao blog',
    placeholderPosts: [
      {
        title: 'Como escolher entre desenvolvimento web e software sob medida',
        category: 'Desenvolvimento digital',
      },
      {
        title: 'IA na indústria: casos práticos para empresas em crescimento',
        category: 'IA e dados',
      },
      {
        title: 'Sistemas ciberfísicos sem paradas operacionais',
        category: 'Engenharia',
      },
    ],
  },
};

