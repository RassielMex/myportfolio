import comicFortressImg from "../src/img/projects/comicFortress.jpg";
import goScrumImg from "../src/img/projects/goscrum.jpg";
import netLectureImg from "../src/img/projects/netlecture.jpg";
import cpumonitorImg from "../src/img/projects/cpuMonitor.jpg";

const projects = [
  {
    title: "GoScrum",
    description:
      "Administrador de tareas usando React, React-Boostrap, Formik, Yup. ",
    accounts: "Usuario: rmexLeader Contraseña:1234",
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
    accounts: "Usuario: rhcp94.rm@gmail.com Contraseña: netlecture",
    screenshot: netLectureImg,
    live: "https://netlecture.netlify.app/",
    repo: "https://github.com/RassielMex/netLecture",
  },
  {
    title: "System Monitor",
    description:
      "Monitoreo de cpu a través de un backend, Front-End usando ChartJs",
    screenshot: cpumonitorImg,
    live: "http://www.servicecloudlmex.co/",
    repo: "https://github.com/RassielMex/cputemp",
  },
];
export default projects;
