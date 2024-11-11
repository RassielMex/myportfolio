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
    stack: [stack.NEXT, stack.NEST, stack.TAILWIND, stack.TS],
    live: "https://next-goscrum.vercel.app/",
    repo: "https://github.com/RassielMex/next_goscrum",
  },
];
export default projects;

export const stack = {
  NEXT: "next",
  NEST: "nest",
  TS: "typescript",
  JS: "javascript",
  TAILWIND: "tailwind",
};
