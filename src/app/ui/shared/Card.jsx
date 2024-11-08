import { Github, Globe } from "@geist-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function Card() {
  return (
    <div className="my-1">
      <div className="relative w-full min-h-[260px] md:min-h-[160px] lg:min-h-[320px]">
        <Image
          src="/images/rectangle.png"
          alt="Card image"
          fill
          className="rounded-lg"
        />
      </div>
      <p className="text-green_60 my-4">Diseño web</p>
      <p className="mb-6">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quod
        dolor at velit aliquam expedita a molestiae rem optio ullam, deleniti
      </p>
      <div className="flex justify-start gap-4 flex-wrap mb-6">
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
        <IconTechnology iconSrc={"/icons/nestjs.png"} name={"Nest"} />
      </div>
      <div className="flex justify-between mb-4">
        <Link href={""} className="flex gap-x-1 items-center">
          <Globe size={16} />
          <span>Live</span>
        </Link>
        <Link href={""} className="flex gap-x-1 items-center">
          <Github size={16} />
          <span>Github</span>
        </Link>
      </div>
    </div>
  );
}

const IconTechnology = ({ iconSrc, name }) => {
  return (
    <div className="flex flex-col md:flex-row md:gap-x-1">
      <div className="relative w-5 h-5">
        <Image src={iconSrc} alt={name} fill />
      </div>
      <p className="text-ligt_60 text-sm">{name}</p>
    </div>
  );
};
