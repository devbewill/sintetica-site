"use client";

import { Reveal } from "./FadeUp";
import styles from "./Processo.module.css";

const steps = [
  {
    num: "01",
    label: "Diagnosi",
    title: "Leggiamo l'organizzazione reale.",
    text: "Mappiamo complessità, attriti, opportunità. Dati e persone ci dicono dove intervenire — non l'organigramma.",
    deliverables: ["System map", "Pain points", "Opportunity report"],
  },
  {
    num: "02",
    label: "Sintesi",
    title: "Troviamo cosa togliere.",
    text: "Dalle evidenze estraiamo priorità. Cosa rimuovere subito, cosa costruire dopo. Una direzione, non un elenco.",
    deliverables: ["Diagnosis report", "Strategic bets", "Roadmap"],
  },
  {
    num: "03",
    label: "Co-design",
    title: "Costruiamo con chi lavora.",
    text: "AI e dati per accelerare, workshop e prototipi per decidere insieme. Mai il pacchetto calato dall'alto.",
    deliverables: ["Workshop", "Prototipi", "Playbook operativi"],
  },
  {
    num: "04",
    label: "Adattamento",
    title: "Restiamo finché regge.",
    text: "Governance, commitment, review cicliche. Il cambiamento diventa metodo interno. La trazione resta misurabile.",
    deliverables: ["Adoption tracking", "Coaching", "Review cicliche"],
  },
];

export function Processo() {
  return (
    <section className={styles.section} id="processo">
      <div className={styles.inner}>
        <div className={styles.head}>
          <div className={styles.headLeft}>
            <Reveal as="p" className={styles.kicker}>
              <span className={styles.kickerLine} />
              Processo
            </Reveal>
            <Reveal as="h2" delay={1} className={styles.headline}>
              Un metodo in quattro fasi<span className={styles.period}>.</span>
            </Reveal>
          </div>
          <Reveal as="p" delay={2} className={styles.lede}>
            Diagnosi, sintesi, co-design, adattamento. Poche fasi, tanta sostanza.
            Il metodo è lo stesso, il risultato è sempre diverso.
          </Reveal>
        </div>

        <ol className={styles.list}>
          {steps.map((s, i) => (
            <Reveal as="li" key={s.num} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.num}>{s.num}</span>
                <span className={styles.label}>{s.label}</span>
              </div>
              <div className={styles.itemBody}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.text}>{s.text}</p>
                <div className={styles.deliverables}>
                  <span className={styles.dLabel}>Output</span>
                  <ul>
                    {s.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <span className={styles.arrow} aria-hidden="true">↘</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
