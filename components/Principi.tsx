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
    label: "Capacità",
    title: "Sviluppare adattamento",
    text: "La capacità di adattarsi non è un evento — è una competenza che si costruisce nel tempo, attraverso pratica e attenzione.",
  },
];

export function Principi() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <Reveal as="h2" className={styles.header}>
          Quattro dimensioni<span>.</span>
        </Reveal>

        <div className={styles.grid}>
          {items.map((item) => (
            <Reveal key={item.num} as="article" className={styles.card}>
              <div className={styles.cardNum}>{item.num}</div>
              <div className={styles.cardLabel}>{item.label}</div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
