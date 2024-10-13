"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

const links = [
  {
    id: "1",
    name: "About Us",
    href: "/about_us",
  },
  {
    id: "2",
    name: "Products",
    href: "/products",
  },
  {
    id: "3",
    name: "Solutions",
    href: "/solutions",
  },
  {
    id: "4",
    name: "Pricing",
    href: "/pricing",
  },
];

const Nav = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const handleSignUp = () => {
    router.push("/login");
  };

  const pathname = usePathname();

  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header
      className={` ${
        openMenu ? "bg-[#000000] backdrop-blur-sm" : ""
      } fixed z-50 mx-auto w-full bg-gradient-to-b from-[#000000] to-transparent px-[1rem] py-[1rem] backdrop-blur-sm sm:px-[2rem]`}
    >
      <nav
        className={`${openMenu ? "h-screen flex-col gap-4 bg-[#000000] duration-500 ease-out" : "flex items-center justify-between gap-4"} mx-auto rounded-lg px-[0.5rem] md:p-2 lg:max-w-[90em]`}
      >
        <div className="flex w-full items-center justify-between lg:w-auto">
          <Link href="/" onClick={() => setOpenMenu(false)}>
            <div className="relative h-[3rem] w-[9rem] md:h-[3rem] md:w-[10rem]">
              <Image
                src="/assets/logo_full.svg"
                alt="Synergia_logo"
                fill={true}
                className="object-fit antialiased"
              />
            </div>
          </Link>
          <div
            className="rounded-md p-2 hover:bg-[#2a2a2a] lg:hidden"
            onClick={handleMenu}
          >
            {openMenu ? (
              <AiOutlineClose size={24} color="#b4e251" />
            ) : (
              <AiOutlineMenu size={24} color="#b4e251" />
            )}
          </div>
        </div>
        <ul
          className={
            openMenu
              ? "flex flex-col gap-4 py-[2rem] lg:hidden"
              : "hidden gap-4 lg:flex lg:flex-1"
          }
        >
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === link.href
                : pathname.startsWith(link.href);
            return (
              <li
                key={link.id}
                onClick={() => setOpenMenu(false)}
                className="text-[0.875rem] font-medium"
              >
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

        <div
          className={
            openMenu
              ? "flex flex-col gap-4 py-[2rem] sm:flex-row lg:hidden"
              : "hidden gap-2 lg:flex"
          }
        >
          <Button
            intent="secondary"
            size="medium"
            onClick={handleLogin}
            className="flex-1"
          >
            Login
          </Button>
          <Button
            intent="primary"
            size="medium"
            onClick={handleSignUp}
            className="hidden flex-1"
          >
            Sign Up
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
