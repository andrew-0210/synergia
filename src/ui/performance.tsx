import React from "react";

const Performance = () => {
  return (
    <section className="container flex h-screen flex-col items-center justify-start gap-[1rem] px-[1rem] py-[9rem]">
      <p className="font-semibold uppercase tracking-[8px] text-[#9a6aff]">
        Performance
      </p>
      <h2 className="text-center">
        Up to 4x{" "}
        <span className="rounded-lg border-l-2 border-[#9a6aff] bg-gradient-to-r from-[#402b6c] to-transparent px-[0.5rem] text-[#9a6aff]">
          faster
        </span>{" "}
        pipeline execution
      </h2>
      <p className="text-center">
        Reduce pipeline execution up to 90% with intelligent test selection and
        caching. Powered by advanced instrumentation and call graph analysis.
      </p>
    </section>
  );
};

export default Performance;
