import Image from "next/image";
import React from "react";

export default function Sidebar() {
  return (
    <div className="h-[800px] w-1/4">
      <Image
        src="/images/rectangle.png"
        alt="Imagen de perfil"
        width={192}
        height={192}
      />
    </div>
  );
}
