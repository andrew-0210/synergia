import React from "react";

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

export default Steps;
