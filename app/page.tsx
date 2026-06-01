import { Hero } from "@/components/Hero";
import { Spazio } from "@/components/Spazio";
import { Principi } from "@/components/Principi";
import { Citazione } from "@/components/Citazione";
import { Contatto } from "@/components/Contatto";

export default function Home() {
  return (
    <>
      <Hero />
      <Spazio />
      <Principi />
      <Citazione />
      <Contatto />
    </>
  );
}
