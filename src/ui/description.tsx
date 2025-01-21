"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Description = () => {
  const router = useRouter();

  const handleSignUp = () => {
    router.push("/login");
  };
  return (
    <div className="relative overflow-x-hidden">
      <div className="bg-[#0f0f0f]">
        <div className="animate-scroll flex gap-6 py-[0.5rem] md:gap-20">
          <div className="flex items-center gap-4 whitespace-nowrap md:gap-8">
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/assets/logo.svg"
                alt="Synergia_logo"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="inline-block text-[0.875rem] font-bold uppercase leading-[1.125] tracking-[5px] text-[#F5F5F5] md:text-[1rem] lg:leading-[0.9]">
              Get 3 months free
            </p>
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/assets/Star.svg"
                alt="Star"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="inline-block text-[0.875rem] font-bold uppercase leading-[1.125] tracking-[5px] text-[#F5F5F5] md:text-[1rem] lg:leading-[0.9]">
              Unlock global hiring with ease
            </p>
            <Button intent="primary" onClick={handleSignUp}>
              Get Started
            </Button>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap md:gap-8">
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/assets/logo.svg"
                alt="Synergia_logo"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="inline-block text-[0.875rem] font-bold uppercase leading-[1.125] tracking-[5px] text-[#F5F5F5] md:text-[1rem] lg:leading-[0.9]">
              Get 3 months free
            </p>
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/assets/Star.svg"
                alt="Star"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="inline-block text-[0.875rem] font-bold uppercase leading-[1.125] tracking-[5px] text-[#F5F5F5] md:text-[1rem] lg:leading-[0.9]">
              Unlock global hiring with ease
            </p>
            <Button intent="primary" onClick={handleSignUp}>
              Get Started
            </Button>
          </div>
          <div className="flex items-center gap-4 whitespace-nowrap md:gap-8">
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/assets/logo.svg"
                alt="Synergia_logo"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="inline-block text-[0.875rem] font-bold uppercase leading-[1.125] tracking-[5px] text-[#F5F5F5] md:text-[1rem] lg:leading-[0.9]">
              Get 3 months free
            </p>
            <div className="relative h-[2rem] w-[2rem]">
              <Image
                src="/assets/Star.svg"
                alt="Star"
                fill={true}
                className="object-fit"
              />
            </div>
            <p className="inline-block text-[0.875rem] font-bold uppercase leading-[1.125] tracking-[5px] text-[#F5F5F5] md:text-[1rem] lg:leading-[0.9]">
              Unlock global hiring with ease
            </p>
            <Button intent="primary" onClick={handleSignUp}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-center py-[7.5rem]">
        <h2>
          Synergia is a people enabler. From automation people processes to
          creating an engaged and driven culture, Synergia is all you need to
          build a good to great company.
        </h2>
      </div>
    </div>
  );
};

export default Description;
