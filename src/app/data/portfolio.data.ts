/* =========================================================
   DATOS DEL PORTAFOLIO
   Todo el contenido personal vive aquí. Para personalizar
   el portafolio, se edita SOLO este archivo.
   ========================================================= */

/** Molde de una red social */
export interface SocialLink {
  label: string;   // nombre para lectores de pantalla: 'GitHub'
  icon: string;    // clase de Bootstrap Icons: 'bi-github'
  url: string;     // dirección completa
}

/** Molde de los datos personales */
export interface Profile {
  name: string;            // nombre completo
  initials: string;        // iniciales para el avatar
  greeting: string;        // saludo sobre el nombre
  roles: string[];         // roles para la máquina de escribir
  bio: string;             // presentación corta
  photo: string;           // foto en la carpeta public ('' = sin foto)
  cvUrl: string;           // CV en PDF en la carpeta public
  socials: SocialLink[];   // lista de redes sociales
}

/** Tus datos */
export const PROFILE: Profile = {
  name: 'Giovanni Emilio Ramirez Berrocal',
  initials: 'GERB',
  greeting: 'Hola, los saluda...',
  roles: [
    'Desarrollador Backend',
    'Programador Java y Spring Boot',
    'ENAMORADO DE LA CHAMA',
    'Estudiante de Desarrollo de Sistemas',
  ],
  bio: 'Construyo APIs REST y aplicaciones web. Me gusta escribir código claro y aprender tecnologías nuevas cada semana.',
  photo: '',
  cvUrl: 'cv.pdf',
  socials: [
    { label: 'GitHub',   icon: 'bi-github',   url: 'https://github.com/GERB-DEVELOPER' },
    { label: 'LinkedIn', icon: 'bi-linkedin', url: 'https://www.linkedin.com/in/giovanni-emilio-ramirez-berrocal-28b5161b8' },
    { label: 'Correo', icon: 'bi-envelope', url: 'mailto:RAMIREZBERROCALGIOVANNI@gmail.com' },
        { label: 'WhatsApp', icon: 'bi-whatsapp', url: 'https://wa.me/51956785457' },

  ],
};
/** Molde de una tarjeta de sección en el Inicio */
export interface Highlight {
  icon: string;       // clase de Bootstrap Icons
  title: string;      // título de la tarjeta
  text: string;       // descripción corta
  link: string;       // ruta interna: '/sobre-mi'
  linkText: string;   // texto del enlace
}

/** Tarjetas que llevan a las demás páginas */
export const HIGHLIGHTS: Highlight[] = [
  {
    icon: 'bi-person',
    title: 'Sobre mí',
    text: 'Mi formación, mi experiencia y las tecnologías que manejo.',
    link: '/sobre-mi',
    linkText: 'Conóceme',
  },
  {
    icon: 'bi-grid',
    title: 'Proyectos',
    text: 'Trabajos y prácticas del instituto: APIs, sitios web y más.',
    link: '/proyectos',
    linkText: 'Ver proyectos',
  },
  {
    icon: 'bi-envelope',
    title: 'Contacto',
    text: '¿Tienes una propuesta o una oportunidad? Escríbeme.',
    link: '/contacto',
    linkText: 'Escríbeme',
  },
];

/* =========================================================
   SOBRE MÍ
   ========================================================= */

/** Molde de una cifra destacada */
export interface Stat {
  value: string;   // texto, para poder escribir '10+' o '3'
  label: string;   // qué significa la cifra
}

/** Molde de la presentación de "Sobre mí" */
export interface AboutInfo {
  title: string;
  paragraphs: string[];   // uno o varios párrafos
  stats: Stat[];          // cifras destacadas
}

/** Tu presentación */
export const ABOUT: AboutInfo = {
  title: 'Conoce mi historia',
  paragraphs: [
    'Soy estudiante de Desarrollo de Sistemas de Información. Me interesa el desarrollo backend: diseñar APIs, modelar bases de datos y escribir código que otros puedan entender.',
    'Aprendo construyendo proyectos reales. Este portafolio es uno de ellos: lo hice con Angular y lo publiqué en GitHub.',
  ],
  stats: [
    { value: '3',   label: 'años estudiando sistemas' },
    { value: '10+', label: 'proyectos realizados' },
    { value: '8',   label: 'tecnologías que uso' },
  ],
};
/** Tipos de ítem de la línea de tiempo: SOLO estos tres valores */
export type TimelineType = 'education' | 'work' | 'course';

/** Molde de un ítem de la línea de tiempo */
export interface TimelineItem {
  type: TimelineType;     // estudio, trabajo o curso
  title: string;          // qué estudiaste o hiciste
  place: string;          // dónde
  period: string;         // cuándo: '2024 - Actualidad'
  description: string;    // una o dos líneas
  current?: boolean;      // opcional: true si es lo que haces ahora
}

/** Tu trayectoria, de lo más reciente a lo más antiguo */
export const TIMELINE: TimelineItem[] = [
  {
    type: 'education',
    title: 'Desarrollo de Sistemas de Información',
    place: 'Instituto de Educación Superior',
    period: '2024 - Actualidad',
    description: 'Programación orientada a objetos, bases de datos, servicios web y desarrollo de aplicaciones.',
    current: true,
  },
  {
    type: 'work',
    title: 'Prácticas de soporte técnico',
    place: 'Nombre de la empresa o institución',
    period: '2025',
    description: 'Mantenimiento de equipos, instalación de software y atención a usuarios.',
  },
  {
    type: 'course',
    title: 'Curso de Java y Spring Boot',
    place: 'Plataforma en línea',
    period: '2024',
    description: 'Creación de APIs REST con Spring Boot, JPA y PostgreSQL.',
  },
  {
    type: 'education',
    title: 'Educación secundaria',
    place: 'Nombre del colegio',
    period: '2019 - 2023',
    description: 'Secundaria completa.',
  },
];
/** Molde de una habilidad */
export interface Skill {
  name: string;
  level: number;          // de 0 a 100
}

/** Molde de un grupo de habilidades */
export interface SkillGroup {
  title: string;
  icon: string;           // clase de Bootstrap Icons
  skills: Skill[];        // lista de habilidades DENTRO del grupo
}

/** Tus habilidades, agrupadas */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Backend',
    icon: 'bi-hdd-stack',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 75 },
      { name: 'SQL y PostgreSQL', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    icon: 'bi-window',
    skills: [
      { name: 'HTML y CSS', level: 80 },
      { name: 'TypeScript', level: 60 },
      { name: 'Angular', level: 55 },
    ],
  },
  {
    title: 'Herramientas',
    icon: 'bi-tools',
    skills: [
      { name: 'Git y GitHub', level: 70 },
      { name: 'VS Code', level: 85 },
      { name: 'Postman', level: 65 },
    ],
  },
];
