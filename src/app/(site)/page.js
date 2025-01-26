"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Paragraph from "@/components/Paragraph";

const paragraph =
  "Synergia is a people enabler. From automation people processes to creating an engaged and driven culture, Synergia is all you need to build a good to great company.";

const steps = [
  {
    stage: "01",
    heading: "Build your page",
    description: "Choose your template and spin up a unique career brand.",
  },
  {
    stage: "02",
    heading: "Add your jobs",
    description: "Build better job descriptions in minutes using AI.",
  },
  {
    stage: "03",
    heading: "Start interviewing",
    description: "Automatically discover people for your open roles.",
  },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Edge />
      <Performance />
      <Integrations />
      <Steps />
    </main>
  );
}

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
      <div className="absolute top-[70%] -z-10 hidden h-[8rem] w-[16rem] rounded-full bg-[#6886d4] blur-[164px] md:block" />
      <div className="absolute right-[20%] top-[70%] -z-10 hidden h-[8rem] w-[309px] rounded-full bg-[#6886d4] blur-[164px] md:block" />
    </section>
  );
};

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
      <div className="container flex flex-wrap justify-center py-[7.5rem]">
        <Paragraph value={paragraph} />
      </div>
    </div>
  );
};

const Edge = () => {
  return (
    <section className="container h-[100dvh]">
      <div className="flex flex-col items-center gap-6">
        <h3 className="sub-heading">Under the hood</h3>
        <h2>The Synergia Edge</h2>
        <p className="text-center">
          Synergia is the only global employment solution with compliant,
          automated hiring and deep local intelligence. We&apos;re not just a
          platform. We&apos;re a trusted partner in helping you succeed in your
          global employment journey.
        </p>
      </div>
    </section>
  );
};

const Performance = () => {
  return (
    <section className="relative h-full">
      <section className="container-z-10 flex flex-col items-center justify-start gap-[4rem] px-[1rem] py-[9rem]">
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="sub-heading">Performance</h3>
          <h2 className="text-center">Up to 3x faster hiring workflow</h2>
          <p className="text-center">
            Hire 3x faster up to 90% with intelligent test selection and
            caching. Powered by advanced instrumentation and call graph
            analysis.
          </p>
        </div>
        <div className="h-full w-full">
          <div className="relative -z-10 h-[10rem] w-full md:h-[16rem]">
            <Image
              src="/assets/3x.svg"
              alt="3x_image"
              fill={true}
              className="object-fill"
            />
          </div>
          <div className="relative -z-10 h-[10rem] w-full -scale-y-100 opacity-20 md:h-[16rem]">
            <Image
              src="/assets/3x.svg"
              alt="3x_image"
              fill={true}
              className="object-fill"
            />
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 z-10 h-[30dvh] w-full bg-gradient-to-t from-[#0C0C0C] to-[rgba(12,12,12,0)]" />
    </section>
  );
};

const Integrations = () => {
  return (
    <section className="container h-[100dvh]">
      <div className="flex flex-col items-center gap-6">
        <h3 className="sub-heading">Integrations</h3>
        <h2>Use integrations to make the world your Synergia</h2>
        <p className="text-center">
          Automate work at each step. Connect with your favorite tools or create
          custom apps. Reduce time to hire, eliminate errors, improve
          productivity.
        </p>
        <Button intent="primary">See all Integrations</Button>
      </div>
    </section>
  );
};

const Steps = () => {
  return (
    <section className="container h-full py-[7.5rem]">
      <div className="flex flex-col items-center gap-[4rem]">
        <h2>
          <span className="text-[#b4e251]">No demo calls </span> necessary.
        </h2>
        <div className="flex max-w-[1194px] flex-col gap-4 md:flex-row">
          {steps.map((step) => {
            return (
              <div
                className="flex flex-col gap-2 rounded-2xl border border-[#2b2b2b] bg-[#161616] p-[1.5rem] md:gap-5"
                key={step.stage}
              >
                <p className="font-bold text-[#b4e251]">{step.stage}</p>
                <h4 className="text-[1.25rem] font-semibold leading-[36px] -tracking-[0.5px] md:text-[1.75rem]">
                  {step.heading}
                </h4>
                <p>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
