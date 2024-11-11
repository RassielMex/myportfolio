import { Github, Globe } from "@geist-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgSrc,
  title,
  description,
  stack,
  live,
  repo,
  features,
}) {
  return (
    <div className="my-1 ">
      <div className="relative w-full min-h-[260px] md:min-h-[160px] lg:min-h-[320px]">
        <Image src={imgSrc} alt="Card image" fill className="rounded-lg" />
      </div>
      <p className="text-green_60 my-4">{title}</p>
      <p className="mb-6">{description}</p>
      <div className="flex justify-start gap-4 flex-wrap mb-6">
        {stack?.map((tech, i) => {
          return <IconTechnology key={i + tech.name} {...tech} />;
        })}
      </div>
      <div className="mb-6 max-w-96">
        {features?.map((feat, i) => {
          return (
            <p key={i + feat.slice(5)} className="font-light italic">
              - {feat}
            </p>
          );
        })}
      </div>
      <div className="flex justify-between mb-4">
        <Link href={live || ""} className="flex gap-x-1 items-center">
          <Globe size={16} />
          <span>Live</span>
        </Link>
        <Link href={repo || ""} className="flex gap-x-1 items-center">
          <Github size={16} />
          <span>Github</span>
        </Link>
      </div>
    </div>
  );
}

const IconTechnology = ({ iconSrc, name }) => {
  return (
    <div className="flex flex-col gap-1 md:flex-row">
      <div className="relative w-5 h-5">
        <Image src={iconSrc} alt={name} fill />
      </div>
      <p className="text-ligt_60 text-sm">{name}</p>
    </div>
  );
};
