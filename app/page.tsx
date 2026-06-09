import { Hero } from "@/components/Hero";
import { Statement } from "@/components/Statement";
import { Spazio } from "@/components/Spazio";
import { Principi } from "@/components/Principi";
import { Servizi } from "@/components/Servizi";
import { Processo } from "@/components/Processo";
import { Faq } from "@/components/FAQ";
import { Contatto } from "@/components/Contatto";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  return (
    <>
      <Hero />

      <Statement
        num="01"
        title="La complessità è rumore"
        titleAccent="."
        text="Ogni organizzazione accumula strati: tool che non parlano tra loro, processi ereditati da ere geologiche, riunioni che moltiplicano riunioni. Il primo passo non è aggiungere. È togliere."
        variant="split"
      />

      <Statement
        num="02"
        title="La tecnologia serve, le persone accendono"
        titleAccent="."
        text="L'AI non è il fine: è un acceleratore. La applichiamo dove toglie attrito, non dove aggiunge complessità. Automatizziamo il ripetitivo per liberare tempo al lavoro che conta."
        variant="poster"
      />

      <Spazio />

      <Statement
        num="03"
        title="Governance, commitment, direzione"
        titleAccent="."
        text="Il cambiamento regge se le persone lo abitano. Costruiamo governance chiara, gestiamo il commitment, diamo ritmo ai progetti. Il fuoco resta acceso solo se qualcuno lo custodisce."
        variant="quiet"
      />

      <Servizi />

      <Principi />

      <Processo />

      <Faq />

      <Marquee />

      <Contatto />
    </>
  );
}
