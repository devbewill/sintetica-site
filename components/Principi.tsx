"use client";

import { Reveal } from "./FadeUp";
import styles from "./Principi.module.css";

const items = [
  {
    num: "01",
    label: "Struttura",
    title: "Dare forma alle idee",
    text: "Le idee hanno bisogno di struttura per diventare azione. Progettiamo percorsi chiari tra l'intuizione e il risultato.",
  },
  {
    num: "02",
    label: "Competenze",
    title: "Coltivare capacità",
    text: "Le competenze sono il patrimonio più concreto di un'organizzazione. Aiutiamo a identificarle, svilupparle e metterle in circolo.",
  },
  {
    num: "03",
    label: "Organizzazione",
    title: "Costruire condizioni",
    text: "Il modo in cui un'organizzazione è strutturata determina ciò che può ottenere. Lavoriamo sulle condizioni che rendono possibili i risultati.",
  },
  {
    num: "04",
    label: "Adattamento",
    title: "Sviluppare resilienza",
    text: "La capacità di adattarsi non è un evento — è una competenza che si costruisce nel tempo, attraverso pratica e attenzione.",
  },
];

export function Principi() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal as="h2" className={styles.header}>
          Quattro dimensioni<span className={styles.headerAccent}>.</span>
        </Reveal>
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
