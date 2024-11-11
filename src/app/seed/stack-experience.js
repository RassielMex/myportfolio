export const stack = {
  NEXT: "Next",
  NEST: "Nest",
  TS: "Typescript",
  JS: "Javascript",
  TAILWIND: "Tailwind",
  REACT: "React",
  GIT: "Git",
  GITHUB: "Github",
  BOOTSTRAP: "Bootstrap",
};

export const stackIconSource = {
  NEXT: "/icons/next-js.png",
  NEST: "/icons/nestjs.png",
  TS: "/icons/typescript.png",
  JS: "/icons/typescript.png",
  TAILWIND: "/icons/tailwind.png",
  REACT: "/icons/react.png",
  GIT: "/icons/git.png",
  GITHUB: "/icons/github.png",
  BOOTSTRAP: "/icons/bootstrap.png",
};

export const stackExperience = [
  {
    name: stack.NEXT,
    iconSrc: stackIconSource.NEXT,
    category: "Frontend",
    experience:
      "He creado aplicaciones web, principalmente con Typescript y Tailwind. Uso de SSR y CSR, server actions, paginado. Validaciones de formularios Zod y useActionState",
  },
  {
    name: stack.REACT,
    iconSrc: stackIconSource.REACT,
    category: "Frontend",
    experience:
      "He creado aplicaciones web, principalmente con Typescript, Javascript. Uso de frameworks CSS como Tailwind y Bootstrap. Validacion de formularios con Yup y Formik, así como manejo de estado global con Redux-Thunk, Context y Zustand",
  },
  {
    name: stack.NEST,
    category: "Backend",
    iconSrc: stackIconSource.NEST,
    experience:
      "Como prncipal framework de backend, especialmente para crear CRUDS basicos con bases de datos SQL y NOSQL a través de PRISMA",
  },
  {
    name: stack.TAILWIND,
    iconSrc: stackIconSource.TAILWIND,
    category: "CSS Framework",
    experience:
      "Como prncipal framework de CSS, para crear estilos basados en diseños (FIGMA) y crear componenetes responsivos",
  },
  {
    name: stack.BOOTSTRAP,
    iconSrc: stackIconSource.BOOTSTRAP,
    category: "CSS Framework",
    experience:
      "Para maquetado rapido de paginas responsivas, customizacion y uso de componentes con React-Bootrstrap",
  },
  {
    name: `${stack.GIT} y ${stack.GITHUB}`,
    iconSrc: stackIconSource.GIT,
    category: "Colaboracion",
    experience:
      "Experiencia para crear repositorios, hacer cambios y resolver conflictos. Crear ramas y hacer merges",
  },
];
