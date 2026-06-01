import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Spazio } from "@/components/Spazio";
import { Principi } from "@/components/Principi";
import { Contatto } from "@/components/Contatto";

export default function Home() {
  return (
    <>
      <Hero />

      <Statement
        title="Le idee generano possibilità"
        titleAccent="."
        text="Ogni trasformazione parte da un'intuizione. Ma da sola non basta. Serve struttura, competenze, organizzazione."
        num="01"
      />

      <Statement
        title="La struttura dà forma"
        titleAccent="."
        text="Aiutiamo le organizzazioni a costruire le condizioni per cui nuove possibilità diventano realtà. Non prescriviamo soluzioni — creiamo il terreno."
        num="02"
      />

      <Statement
        title="Persone, processi, competenze"
        titleAccent="."
        text="Sono questi gli elementi che contano. Non gli strumenti. Non le mode. Il cambiamento reale parte da qui."
        num="03"
      />

      <Spazio />

      <Principi />

      <Contatto />
    </>
  );
}
