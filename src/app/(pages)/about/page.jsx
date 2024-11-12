import { aboutInfo } from "../../seed/about-info";
import { Book, MapPin, CheckSquare, Briefcase, Hash } from "@geist-ui/icons";
import * as motion from "motion/react-client";

export default function AboutPage() {
  return (
    <div className="p-12">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0, transition: { duration: 0.3 } }}
      >
        <h1 className="text-5xl font-medium mb-8">Conóceme</h1>
        <p className="text-base font-light mb-8">{aboutInfo.profile[0]}</p>
        <div className="flex gap-x-2 items-center mb-8">
          <MapPin size={16} color="#4CE6A6" />
          <span className="text-base font-extralight">Umán, Yucatán, MX</span>
        </div>
        <h2 className="my-8 text-2xl font-medium">Educación</h2>
        <div className="flex gap-x-1 items-start">
          <Book size={24} className="mt-0.5 lg:mt-1" />
          <div className="">
            <p className="text-base font-light">{`${aboutInfo.education[0].title} - ${aboutInfo.education[0].place}`}</p>
            <span className="text-base font-extralight">{`${aboutInfo.education[0].startDate} - ${aboutInfo.education[0].endDate}`}</span>
          </div>
        </div>
        <h2 className="my-8 text-2xl font-medium">Cursos</h2>
        {aboutInfo.courses.map((course, index) => {
          return <CourseItem key={index + course.title} course={course} />;
        })}
        <h2 className="my-8 text-2xl font-medium">Experiencia</h2>
        {aboutInfo.jobs.map((job, index) => {
          return <ExperienceItem key={index + job.title} job={job} />;
        })}
        <h2 className="my-8 text-2xl font-medium">Lenguajes</h2>
        {aboutInfo.languages.map((lang, index) => {
          return <LanguageItem key={index + lang.title} language={lang} />;
        })}
      </motion.div>
    </div>
  );
}

const CourseItem = ({ course }) => {
  return (
    <div className="flex gap-x-1 items-start mb-2">
      <CheckSquare size={20} className="mt-0.5 lg:mt-1" />
      <div className="">
        <p className="text-base font-light">{`${course.title} - ${course.place}`}</p>
        <span className="text-base font-extralight">{`${course.duration}`}</span>
        {course.certificate && (
          <p>
            <u className="text-base font-extralight">{`${course.certificate}`}</u>
          </p>
        )}
      </div>
    </div>
  );
};

const ExperienceItem = ({ job }) => {
  return (
    <div className="flex gap-x-1 items-start mb-2">
      <Briefcase size={20} className="mt-0.5 lg:mt-1" />
      <div className="">
        <p className="text-base font-light">{`${job.title} - ${job.place}`}</p>
        <span className="text-base font-extralight">{`${job.duration}`}</span>
      </div>
    </div>
  );
};

const LanguageItem = ({ language }) => {
  return (
    <div className="flex gap-x-1 items-start mb-2">
      <Hash size={20} className="mt-0.5 lg:mt-1" />
      <div className="">
        <p className="text-base font-light">{`${language.title}`}</p>
        <span className="text-base font-extralight">{`${language.date}`}</span>
        {language.certificate && (
          <p>
            <u className="text-base font-extralight">{`${language.certificate}`}</u>
          </p>
        )}
      </div>
    </div>
  );
};
