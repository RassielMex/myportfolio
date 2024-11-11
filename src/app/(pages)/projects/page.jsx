import Card from "../../ui/shared/Card";
import projects from "../../seed/projects";

export default function page() {
  return (
    <div className="p-12">
      <h1 className="text-5xl font-medium mb-8">Mis proyectos remarcables</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((project, index) => {
          return <Card key={index + project.title} {...project} />;
        })}
      </div>
    </div>
  );
}
