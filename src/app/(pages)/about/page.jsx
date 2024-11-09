import { aboutInfo } from "../../seed/about-info";
import { BookOpen, Book } from "@geist-ui/icons";

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-5xl font-medium">Conoceme</h1>
      <p className="text-base font-light">{aboutInfo.profile[0]}</p>
      <h2>Education</h2>
      <div>
        <BookOpen size={24} />
        <div>
          <p>{aboutInfo.education[0].title}</p>
          <p></p>
        </div>
      </div>
      <h2>Courses</h2>
      <BookOpen size={24} />
      <h2>Languages</h2>
    </div>
  );
}
