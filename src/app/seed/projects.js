import { stack, stackIconSource } from "./stack-experience";

const projects = [
  {
    title: "GoScrum",
    description: "Simple administrador de tareas para equipos",
    imgSrc: "/images/projects/goscrum.jpg",
    features: [
      "Login y Registro con email y contraseña",
      "Creacion de tareas y asignacion por equipo",
      "Filtro por prioridades y estados",
    ],
    stack: [
      { name: stack.NEXT, iconSrc: stackIconSource.NEXT },
      { name: stack.NEST, iconSrc: stackIconSource.NEST },
      { name: stack.TAILWIND, iconSrc: stackIconSource.TAILWIND },
      { name: stack.TS, iconSrc: stackIconSource.TS },
    ],
    live: "https://next-goscrum.vercel.app/",
    repo: "https://github.com/RassielMex/next_goscrum",
  },
];
export default projects;
