import Button from "@/components/Button";
import React from "react";

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

export default Integrations;
