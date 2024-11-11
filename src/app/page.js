import AboutResume from "./ui/home/AboutResume";
import RecentProjects from "./ui/home/RecentProjects";
import StackResume from "./ui/home/StackResume";
import CardStack from "./ui/shared/CardStack";

export default function HomePage() {
  return (
    <div className="px-12 py-16 min-w-[320px]">
      <AboutResume />
      <RecentProjects />
      <StackResume />
      <h1 className="mt-12 text-4xl md:text-6xl lg:text-8xl font-bold">
        ¡Conectemos!
      </h1>
    </div>
  );
}
