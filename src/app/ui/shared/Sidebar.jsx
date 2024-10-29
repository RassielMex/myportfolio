"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Home,
  User,
  List,
  Layers,
  Mail,
  Github,
  Linkedin,
  Menu,
} from "@geist-ui/icons";
import Link from "next/link";
import clsx from "clsx";

export default function Sidebar() {
  const [showItems, setShowItems] = useState(false);

  const iconSize = 16;
  return (
    <nav className="w-[320px] md:w-fit md:h-[800px] p-12">
      <div className="flex h-full justify-between items-center md:flex-col md:h-fit">
        <Image
          className="w-12 h-12 rounded-xl +md:mb-5 md:h-28 md:w-fit lg:h-48 "
          src="/images/rectangle.png"
          alt="Imagen de perfil"
          height={192}
          width={192}
        />
        <button
          className="rounded-xl text-green_60 bg-green_10 py-1 px-3 text-xs md:py-2 md:mb-10 md:mt-5 
      "
        >
          Disponible
        </button>
        <button
          className="md:hidden"
          onClick={() => {
            setShowItems(!showItems);
          }}
        >
          <Menu size={iconSize} />
        </button>
      </div>
      <div className={clsx("mt-10 mb-20 md:block ", showItems && "hidden ")}>
        <SideNavLink linkName={"Home"} linkRef={"/"}>
          <Home size={iconSize} />
        </SideNavLink>
        <SideNavLink linkName={"About"} linkRef={"/about"}>
          <User size={iconSize} />
        </SideNavLink>
        <SideNavLink linkName={"Projects"} linkRef={"/projects"}>
          <List size={iconSize} />
        </SideNavLink>
        <SideNavLink linkName={"Stack"} linkRef={"/stack"}>
          <Layers size={iconSize} />
        </SideNavLink>
        <SideNavLink linkName={"Contact"} linkRef={"/contact"}>
          <Mail size={iconSize} />
        </SideNavLink>
      </div>
      <div
        className={clsx(
          "flex flex-row justify-around  md:flex-col md:items-center md:gap-y-4 lg:flex-row",
          showItems && "hidden"
        )}
      >
        <Link href={""}>
          <Github size={iconSize} />
        </Link>
        <Link href={""}>
          <Linkedin size={iconSize} />
        </Link>
      </div>
    </nav>
  );
}

const SideNavLink = ({ children, linkName, linkRef }) => {
  return (
    <Link href={linkRef ?? ""} className=" ">
      <div className="flex gap-x-4 p-3 md:justify-center lg:justify-start hover:bg-dark_10 rounded-md">
        {children}
        <p className="md:hidden lg:block">{linkName}</p>
      </div>
    </Link>
  );
};
