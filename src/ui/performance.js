import Image from "next/image";
import React from "react";

const Performance = () => {
  return (
    <section className="relative h-full">
      <section className="container-z-10 flex flex-col items-center justify-start gap-[4rem] px-[1rem] py-[9rem]">
        <div className="flex flex-col items-center justify-center gap-6">
          <h3 className="sub-heading">Performance</h3>
          <h2 className="text-center">Up to 3x faster hiring workflow</h2>
          <p className="text-center">
            Hire 4x faster up to 90% with intelligent test selection and
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

export default Performance;
