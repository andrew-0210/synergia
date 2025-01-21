"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/login");
  };
  return (
    <section className="relative h-[100dvh] md:h-full md:pt-[10rem]">
      <section className="container flex h-[100dvh] flex-col items-center justify-center gap-[3rem]">
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="sub-heading">Automated global employment platform</h3>
          <h1>All your employment needs in one place.</h1>
          <p className="text-center">
            Work with great talent in 180+ countries without opening entities
            and navigating complex local laws. Onboard, pay, manage and care for
            full-timers and contractors - all with accurate and deep local
            knowledge.
          </p>
          <div className="flex gap-4">
            <Button intent="secondary" onClick={handleSignUp}>
              Preview platform
            </Button>
            <Button intent="primary" onClick={handleSignUp}>
              Get Started
            </Button>
          </div>
        </div>
        <div className="relative hidden w-[100%] sm:h-[30rem] md:block">
          <Image
            src="/assets/synergia_image.png"
            alt="Synergia_image"
            fill={true}
            className="object-contain"
          />
        </div>
      </section>
      <div className="absolute bottom-0 hidden w-full bg-gradient-to-t from-[#0c0c0c] to-transparent md:block md:h-[40vh]" />
    </section>
  );
};

export default Hero;
