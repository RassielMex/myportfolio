import AboutResume from "./ui/home/AboutResume";
import RecentProjects from "./ui/home/RecentProjects";
import StackResume from "./ui/home/StackResume";
import * as motion from "motion/react-client";

export default function HomePage() {
  return (
    <div className="px-12 py-16 min-w-[320px]">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
      >
        <AboutResume />
        <RecentProjects />
        <StackResume />
        <h1 className="mt-12 text-4xl md:text-6xl lg:text-8xl font-bold">
          ¡Conectemos!
        </h1>
      </motion.div>
    </div>
  );
}
