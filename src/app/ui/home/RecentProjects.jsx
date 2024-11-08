import React from "react";
import Card from "../shared/Card";
import LinkButton from "../shared/LinkButton";

export default function RecentProjects() {
  return (
    <div className="">
      <div className="mt-4 flex flex-col md:flex-row md:gap-8">
        <Card />
        <Card />
      </div>
      <div className="flex flex-col md:flex-row md:justify-end">
        <LinkButton href={"/projetcs"} text={"Más proyectos"} />
      </div>
    </div>
  );
}
