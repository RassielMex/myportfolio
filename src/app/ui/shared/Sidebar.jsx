"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
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
import { useAnimate } from "motion/react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const [showItems, setShowItems] = useState(false);
  const [scope, animate] = useAnimate();

  const iconSize = 16;
  return (
    <nav className="min-w-[320px] md:w-fit md:h-[800px] p-6 md:p-12 md:border-r md:border-r-slate-500">
      <div className="flex h-full justify-between items-center md:flex-col md:h-fit">
        <div className="flex gap-x-4 items-center md:flex-col">
          <Image
            className="w-12 h-12 rounded-xl +md:mb-5 md:h-28 md:w-fit lg:h-48 "
            src="/images/profile.jpg"
            alt="Imagen de perfil"
            height={192}
            width={192}
          />
          <button
            className="h-fit rounded-xl text-green_60 bg-green_10 py-1 px-3 text-xs md:py-2 md:mb-10 md:mt-5 
       md:w-full"
          >
            Disponible
          </button>
        </div>
        <button
          className="md:hidden"
          onClick={() => {
            setShowItems(!showItems);
            animate(
              scope.current,
              { y: [-50, 0], opacity: [0, 1], duration: 0.6 },
              { ease: [0.08, 0.65, 0.53, 0.96] }
            );
          }}
        >
          <Menu size={iconSize} />
        </button>
      </div>
      <div ref={scope}>
        <div className={clsx("mt-10 mb-20 md:block ", !showItems && "hidden ")}>
          <SideNavLink linkName={"Home"} linkRef={"/"} pathname={pathname}>
            <Home size={iconSize} />
          </SideNavLink>
          <SideNavLink
            linkName={"About"}
            linkRef={"/about"}
            pathname={pathname}
          >
            <User size={iconSize} />
          </SideNavLink>
          <SideNavLink
            linkName={"Projects"}
            linkRef={"/projects"}
            pathname={pathname}
          >
            <List size={iconSize} />
          </SideNavLink>
          <SideNavLink
            linkName={"Stack"}
            linkRef={"/stack"}
            pathname={pathname}
          >
            <Layers size={iconSize} />
          </SideNavLink>
          <SideNavLink
            linkName={"Contact"}
            linkRef={"/contact"}
            pathname={pathname}
          >
            <Mail size={iconSize} />
          </SideNavLink>
        </div>
        <div
          className={clsx(
            "flex flex-row justify-around  md:flex-col md:items-center md:gap-y-4 lg:flex-row",
            [!showItems && "hidden"]
          )}
        >
          <Link href={"https://github.com/RassielMex"}>
            <Github size={iconSize} />
          </Link>
          <Link href={"https://www.linkedin.com/in/rassielmex/"}>
            <Linkedin size={iconSize} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

const SideNavLink = ({ children, linkName, linkRef, pathname }) => {
  return (
    <Link href={linkRef ?? ""} className=" ">
      <div
        className={clsx(
          " flex gap-x-4 p-3 mb-1 items-center md:justify-center lg:justify-start hover:bg-dark_10 rounded-md",
          [pathname === linkRef && "bg-dark_10"]
        )}
      >
        {children}
        <p className="md:hidden lg:block">{linkName}</p>
      </div>
    </Link>
  );
};
