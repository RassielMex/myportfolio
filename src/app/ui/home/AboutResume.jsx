import { MapPin, ArrowRight } from "@geist-ui/icons";
import Link from "next/link";
import LinkButton from "../shared/LinkButton";

export default function AboutResume() {
  return (
    <div className="">
      <h1 className="text-5xl font-semibold mb-8">
        ¡Hola a todos, mi nombre es Rassiel!
      </h1>
      <p className="text-base font-extralight mb-16 max-w-[600px]">
        Programador apasionado por crear y visualizar nuevas ideas, afrontar
        todo reto e imaginar soluciones.
      </p>
      <div className="flex flex-col justify-between gap-y-6 md:flex-row ">
        <div className="flex gap-x-2 items-center">
          <MapPin size={16} color="#4CE6A6" />
          <span className="text-base font-extralight">Umán, Yucatán, MX</span>
        </div>
        <LinkButton href={"/about"} text={"Más acerca de mí"} />
      </div>
    </div>
  );
}
