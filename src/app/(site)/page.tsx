import Description from "@/ui/description";
import Hero from "@/ui/hero";
import Integrations from "@/ui/integrations";
import Performance from "@/ui/performance";
import Edge from "@/ui/synergiaedge";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <Edge />
      <Performance />
      <Integrations />
    </main>
  );
}
