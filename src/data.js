import comicFortressImg from "../src/img/projects/comicFortress.jpg";
import goScrumImg from "../src/img/projects/goscrum.jpg";
import netLectureImg from "../src/img/projects/netlecture.jpg";

const projects = [
  {
    title: "GoScrum",
    description:
      "Administrador de tareas usando React, React-Boostrap, Formik, Yup. ",
    description_optional: "Usuario: rmexLeader Contraseña:1234",
    screenshot: goScrumImg,
    live: "https://rassielmex.github.io/goScrum/",
    repo: "https://github.com/RassielMex/goScrum",
  },
  {
    title: "Comic Fortress",
    description:
      "Simple ecommerce, hace uso de tecnologías como React, Boostrap, Firebase",
    screenshot: comicFortressImg,
    live: "https://react-ecommerce-407bc.web.app/",
    repo: "https://github.com/RassielMex/comicFortress",
  },
  {
    title: "Netlecture",
    description:
      "Clon de Netflix para reseñas de libros, creado con React, Css, Firebase, Formik.",
    description_optional: "Usuario: rhcp94.rm@gmail.com Contraseña: netlecture",
    screenshot: netLectureImg,
    live: "https://netlecture.netlify.app/",
    repo: "https://github.com/RassielMex/netLecture",
  },
];
export default projects;
