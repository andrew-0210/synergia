"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/signup");
  };
  return (
    <div className="relative">
      <div className="absolute top-0 z-[-2] h-screen w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]" />
      <div className="absolute inset-0 z-[-1] h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_50%,#9a6aff_100%)]"></div>
      <section className="container flex h-screen flex-col items-center justify-start gap-[1rem] py-[9rem]">
        <h1>
          A{" "}
          <span className="rounded-lg border-l-2 border-[#b4e251] bg-gradient-to-r from-[#5b7229] to-transparent px-[0.5rem] text-[#b4e251]">
            versatile
          </span>{" "}
          all-in-one HRM powerhouse
        </h1>
        <p className="mb-[1rem] text-center">
          From seamless recruitment to effortless payroll and performance
          management, Synergia simplifies every aspect of HR for growing teams.
        </p>
        <Button intent="secondary" onClick={handleSignUp}>
          Get Started
        </Button>
      </section>
    </div>
  );
};

export default Hero;
