"use client";

import { useState } from "react";
import { Reveal } from "./FadeUp";
import styles from "./Faq.module.css";

const faqs = [
  {
    q: "Cosa fa Sintetica esattamente?",
    a: "Aiutiamo le organizzazioni a semplificarsi. Rimuoviamo complessità — tecnologica e organizzativa — e riportiamo il focus su ciò che genera valore reale. Non facciamo consulenza generica: entriamo nei meccanismi del lavoro quotidiano con AI e know-how.",
  },
  {
    q: "Usate l'AI? Come?",
    a: "L'AI è uno dei nostri strumenti, non il fine. La usiamo per analizzare dati organizzativi, identificare pattern di complessità e accelerare le decisioni. Ma la sintesi finale è sempre umana. Non vendiamo AI: la applichiamo dove serve.",
  },
  {
    q: "Cosa intendete per 'rimuovere complessità'?",
    a: "Ogni organizzazione accumula strati nel tempo: tool ridondanti, processi ereditati, riunioni senza scopo. Noi identifichiamo e rimuoviamo tutto ciò che non genera valore. Togliere è il primo passo per riaccendere l'energia nei team.",
  },
  {
    q: "Con che tipo di aziende lavorate?",
    a: "Principalmente organizzazioni tra 50 e 500 persone che stanno affrontando un salto di scala: crescita rapida, riorganizzazione, digitalizzazione. Anche PMI con ambizione e complessità.",
  },
  {
    q: "Come misurate l'impatto?",
    a: "Con metriche chiare: velocità decisionale, riduzione dell'attrito operativo, chiarezza dei ruoli, engagement delle persone. Non vendiamo slide: misuriamo risultati.",
  },
  {
    q: "Come si inizia?",
    a: "Con una conversazione. Ci racconti cosa sta succedendo e dove vuoi arrivare. Se vediamo che possiamo essere utili, proponiamo una prima esplorazione — senza impegno.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="p" className={styles.kicker}>
            <span className={styles.kickerLine} />
            FAQ
          </Reveal>
          <Reveal as="h2" delay={1} className={styles.headline}>
            Le domande<br />
            che ci fanno<span className={styles.period}>.</span>
          </Reveal>
        </div>

        <dl className={styles.list}>
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={((i % 5) + 1) as 1 | 2 | 3 | 4 | 5} className={`${styles.item} ${open === i ? styles.open : ""}`}>
              <dt>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open === i}
                >
                  <span className={styles.qNum}>0{i + 1}</span>
                  <span className={styles.qText}>{faq.q}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    <span className={styles.toggleH} />
                    <span className={`${styles.toggleV} ${open === i ? styles.toggleVRot : ""}`} />
                  </span>
                </button>
              </dt>
              <dd className={styles.answerWrap}>
                <div className={styles.answer}>
                  <p>{faq.a}</p>
                </div>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
