import Image from "next/image";

export default function CardStack({ iconSrc, name, category, experience }) {
  return (
    <div className="px-6 py-2 flex gap-4 items-center bg-dark_10 rounded-md">
      <div className="relative h-6 w-6 min-w-6">
        <Image src={iconSrc} alt={name} fill />
      </div>
      <div>
        <p className="font-medium text-lg">{name}</p>
        <p className="font-extralight">{category}</p>
        {experience && <p className="font-light my-4">{experience} </p>}
      </div>
    </div>
  );
}
