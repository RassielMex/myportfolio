import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import MainLayout from "../views/MainLayout";

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="Projects" element={<Projects />} />
        </Route>
        <Route path="*" element={<>Pagina no encontrada</>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
