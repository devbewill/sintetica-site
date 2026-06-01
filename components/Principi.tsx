"use client";

import { Reveal } from "./FadeUp";
import styles from "./Principi.module.css";

const items = [
  {
    num: "01",
    label: "Struttura",
    title: "Dare forma alle idee",
    text: "Le idee diventano utili quando trovano sequenza, responsabilità e criteri di scelta.",
  },
  {
    num: "02",
    label: "Competenze",
    title: "Rendere visibile il sapere",
    text: "Le capacità già presenti nell'organizzazione vengono riconosciute, collegate e messe in movimento.",
  },
  {
    num: "03",
    label: "Processi",
    title: "Togliere attrito",
    text: "Il lavoro scorre meglio quando passaggi, decisioni e strumenti sono coerenti tra loro.",
  },
  {
    num: "04",
    label: "Adattamento",
    title: "Costruire continuità",
    text: "Il cambiamento non resta episodio: diventa metodo, ritmo, capacità interna.",
  },
];

export function Principi() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal as="p" className={styles.kicker}>Come lavoriamo</Reveal>
          <Reveal as="h2" delay={1} className={styles.header}>
            Quattro leve, una direzione<span className={styles.headerAccent}>.</span>
          </Reveal>
        </div>
        <div className={styles.list}>
          {items.map((item, i) => (
            <Reveal key={item.num} delay={(i + 1) as 1 | 2 | 3 | 4 | 5} className={styles.item}>
              <div className={styles.itemLeft}>
                <span className={styles.itemNum}>{item.num}</span>
                <span className={styles.itemLabel}>{item.label}</span>
              </div>
              <div className={styles.itemRight}>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
