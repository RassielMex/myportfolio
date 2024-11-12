import Card from "../../ui/shared/Card";
import projects from "../../seed/projects";
import * as motion from "motion/react-client";

export default function page() {
  return (
    <div className="p-12">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
      >
        <h1 className="text-5xl font-medium mb-8">Mis proyectos remarcables</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {projects.map((project, index) => {
            return <Card key={index + project.title} {...project} />;
          })}
        </div>
      </motion.div>
    </div>
  );
}
