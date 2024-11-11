import { Mail, Phone } from "@geist-ui/icons";
import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="px-12 py-8 ">
      <h1 className="mt-12 text-4xl md:text-6xl lg:text-8xl font-bold">
        ¡Conectemos!
      </h1>
      <div className="gap-x-16 xl:flex xl:flex-row-reverse xl:justify-end">
        <div>
          <h3 className="my-8 text-light_90 text-base font-medium">Contacto</h3>
          <div className="flex gap-x-2 mb-4">
            <Mail size={20} color="#999999" />
            <p className="text-ligt_60">rassiel.mex@gmail.com</p>
          </div>
          <div className="flex gap-x-2 mb-4">
            <Phone size={20} color="#999999" />
            <p className="text-ligt_60">+52 (999) 111 1524</p>
          </div>
        </div>
        <div className="xl:w-1/2">
          <h3 className="my-8 text-light_90 text-base font-medium">
            Dejame un mensaje
          </h3>
          <form className="">
            <fieldset className="gap-x-2 md:flex ">
              <input
                id="name"
                name="name"
                placeholder="Nombre"
                className="w-full p-4 rounded-md mb-2 bg-dark_10 text-ligt_60"
              />
              <input
                id="email"
                name="email"
                placeholder="Email"
                className="w-full p-4 rounded-md mb-2 bg-dark_10 text-ligt_60"
              />
            </fieldset>
            <textarea
              id="message"
              name="message"
              placeholder="Mensaje"
              className="w-full p-4 rounded-md mb-2 bg-dark_10 text-ligt_60 h-48 max-h-48"
            />
            <button className="w-full p-4 rounded-md mb-2 bg-green_60 text-dark_2 ">
              ¡Enviar!
            </button>
          </form>
          <h3 className="my-8 text-light_90 text-base font-medium">
            O un whatsapp!
          </h3>
          <Link
            className="text-ligt_60 flex gap-x-2"
            href={
              "https://wa.me/?text=Hola!%20Quisiera%20saber%20más%20de%20tí"
            }
          >
            <Image
              src={"/icons/whatsapp.png"}
              alt="What icons"
              height={24}
              width={24}
            />
            <span>Enviar</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
