import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Marquee } from "@/components/Marquee";
import { Spazio } from "@/components/Spazio";
import { Principi } from "@/components/Principi";
import { Contatto } from "@/components/Contatto";

export default function Home() {
  return (
    <>
      <Hero />

      <Statement
        title="Le idee generano possibilità."
        text="Ogni trasformazione parte da un'intuizione. Ma da sola non basta. Serve struttura, competenze, organizzazione. Serve il contesto giusto perché le cose accadano."
        redLine
      />

      <Statement
        title="La struttura dà forma."
        text="Aiutiamo le organizzazioni a costruire le condizioni per cui nuove possibilità diventano realtà. Non prescriviamo soluzioni — creiamo il terreno perché emergano."
        accent
      />

      <Marquee />

      <Spazio />

      <Principi />

      <Contatto />
    </>
  );
}
