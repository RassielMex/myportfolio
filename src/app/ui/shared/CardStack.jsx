import Image from "next/image";

export default function CardStack({ imgSrc, title, description }) {
  return (
    <div className="px-6 py-2 flex gap-2 items-center bg-dark_10 rounded-md">
      <div className="relative h-6 w-6">
        <Image src={imgSrc} alt={title} fill />
      </div>
      <div>
        <p>{title}</p>
        <p className="font-extralight">{description}</p>
      </div>
    </div>
  );
}
