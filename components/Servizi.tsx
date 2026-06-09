"use client";

import { Reveal } from "./FadeUp";
import styles from "./Servizi.module.css";

type Service = {
  num: string;
  title: string;
  kicker: string;
  text: string;
  bullets: string[];
  span?: "wide" | "tall";
};

const services: Service[] = [
  {
    num: "01",
    kicker: "Strategia",
    title: "Design organizzativo",
    text: "Ripensiamo la struttura attorno a ciò che genera valore — non attorno all'organigramma. Togliamo strati, chiariamo decisioni, allineiamo persone e obiettivi.",
    bullets: ["Modelli operativi snelli", "Architetture decisionali", "Allineamento strategico"],
    span: "tall",
  },
  {
    num: "02",
    kicker: "AI & Dati",
    title: "Intelligenza applicata",
    text: "L'AI non è una bandiera: è una leva. La innestiamo dove toglie attrito e fa emergere pattern — non dove aggiunge complessità.",
    bullets: ["Assessment AI readiness", "Automazione intelligente", "Toolchain senza attrito"],
  },
  {
    num: "03",
    kicker: "Processi",
    title: "Operational simplicity",
    text: "Togliamo i passaggi che non servono. Sequenze, handoff e strumenti diventano essenziali, coerenti e misurabili. Meno è di più.",
    bullets: ["Service blueprint", "Workflow essenziali", "Metriche di efficienza"],
  },
  {
    num: "04",
    kicker: "Persone",
    title: "Governance & commitment",
    text: "Governance chiara, impegno collettivo, ruoli definiti. Le persone sanno cosa fare e perché — e hanno gli strumenti per decidere.",
    bullets: ["Modelli di governance", "Programmi di change", "Rituali e cadenze"],
    span: "wide",
  },
];

export function Servizi() {
  return (
    <section className={styles.section} id="servizi">
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="p" className={styles.kicker}>
            <span className={styles.kickerLine} />
            Servizi
          </Reveal>
          <Reveal as="h2" delay={1} className={styles.headline}>
            Quattro leve<span className={styles.accent}>,</span><br />
            un unico principio<span className={styles.period}>.</span>
          </Reveal>
          <Reveal as="p" delay={2} className={styles.lede}>
            Strategia, AI, processi, persone. Ogni intervento parte dal togliere
            per arrivare ad accendere — sempre su misura.
          </Reveal>
        </div>

        <div className={styles.grid}>
          {services.map((s, i) => (
            <Reveal
              key={s.num}
              delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
              className={`${styles.card} ${s.span ? styles[s.span] : ""}`}
            >
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>{s.num}</span>
                <span className={styles.cardKicker}>{s.kicker}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
              <ul className={styles.bullets}>
                {s.bullets.map((b) => (
                  <li key={b}>
                    <span className={styles.bulletArrow} aria-hidden="true">→</span>
                    {b}
                  </li>
                ))}
              </ul>
              <span className={styles.cardCorner} aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
