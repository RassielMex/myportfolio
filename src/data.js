import comicFortressImg from "../src/img/ComicFortress.png";
import goScrumImg from "../src/img/GoScrum.png";
import netLectureImg from "../src/img/Netlecture.png";

const projects = [
  {
    title: "GoScrum",
    description:
      "Administrador de tareas usando React, React-Boostrap, Formik, Yup. ",
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
      "Clon de Netflix para reseñas de libros, creado con React, Css, Firebase, Formik",
    screenshot: netLectureImg,
    live: "https://netlecture.netlify.app/",
    repo: "https://github.com/RassielMex/netLecture",
  },
];
export default projects;
