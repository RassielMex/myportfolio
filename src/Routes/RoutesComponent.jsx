import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import MainLayout from "../views/MainLayout";

const RoutesComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<>Pagina no encontrada</>} />
      </Routes>
    </HashRouter>
  );
};

export default RoutesComponent;
