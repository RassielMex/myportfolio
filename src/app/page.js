import AboutResume from "./ui/home/AboutResume";
import RecentProjects from "./ui/home/RecentProjects";

export default function HomePage() {
  return (
    <div className="px-12 py-16 min-w-[320px]">
      <AboutResume />
      <RecentProjects />
    </div>
  ); // We'll update this
}
