import React from "react";
import Card from "../shared/Card";
import LinkButton from "../shared/LinkButton";
import projects from "../../seed/projects";

export default function RecentProjects() {
  const latestProjects = projects.slice(0, 2);
  return (
    <div className="mt-12">
      <h3 className="font-medium text-xl mb-4">Proyectos Recientes</h3>
      <div className="flex flex-col md:flex-row md:gap-8">
        {latestProjects.map((project, index) => {
          return <Card key={index + project.title} {...project} />;
        })}
      </div>
      <div className="flex flex-col md:flex-row md:justify-end">
        <LinkButton href={"/projects"} text={"Más proyectos"} />
      </div>
    </div>
  );
}
