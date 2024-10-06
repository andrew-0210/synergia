"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const links = [
  {
    id: "1",
    name: "Products",
    href: "/products",
  },
  {
    id: "2",
    name: "Solutions",
    href: "/solutions",
  },
  {
    id: "3",
    name: "Pricing",
    href: "/pricing",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <header className="fixed mx-auto w-full bg-gradient-to-b from-[#000000] to-transparent px-[1rem] py-[1rem] sm:px-[3rem]">
      <nav className="mx-auto flex items-center justify-between rounded-lg px-[0.5rem] backdrop-blur-sm md:p-2 lg:max-w-[1194px]">
        <div className="flex items-center gap-4">
          <Link href="/">
            <div className="relative h-[3rem] w-[9rem] md:h-[3rem] md:w-[10rem]">
              <Image
                src="/assets/logo_full.svg"
                alt="Synergia_logo"
                fill={true}
                className="object-fit antialiased"
              />
            </div>
          </Link>
          <ul className="hidden gap-4 lg:flex">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);
              return (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className={isActive ? "font-semibold text-[#b4e251]" : " "}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <button className="bg-[#2a2a2a] p-2">Login</button>
        </div>
        <div className="rounded-md p-2 hover:bg-[#2a2a2a] lg:hidden">
          <AiOutlineMenu size={24} color="#b4e251" />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
