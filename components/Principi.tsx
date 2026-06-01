"use client";

import { Reveal } from "./FadeUp";
import styles from "./Principi.module.css";

const principles = [
  {
    id: "01",
    title: "Idee",
    label: "Struttura",
    text: "Le idee hanno bisogno di struttura per diventare reali. Un\u2019organizzazione \u00e8 il luogo dove questo accade \u2014 quando \u00e8 pensata per funzionare.",
  },
  {
    id: "02",
    title: "Persone",
    label: "Competenze",
    text: "Gli strumenti passano. Le competenze restano. La differenza non sta in ci\u00f2 che si adotta, ma in ci\u00f2 che si \u00e8 in grado di fare.",
  },
  {
    id: "03",
    title: "Cambiamento",
    label: "Organizzazione",
    text: "Il cambiamento non riguarda solo la tecnologia. Riguarda il modo in cui lavoriamo, decidiamo, collaboriamo. Riguarda l\u2019organizzazione.",
  },
  {
    id: "04",
    title: "Adattamento",
    label: "Capacit\u00e0",
    text: "La capacit\u00e0 di adattamento non si acquista. Si costruisce \u2014 con scelte consapevoli, processi essenziali, persone valorizzate.",
  },
];

export function Principi() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <Reveal>
            <span className={styles.sectionLabel}>Principi</span>
          </Reveal>
          <Reveal delay={2}>
            <h2 className={styles.sectionTitle}>
              Quattro dimensioni<br />
              <em className={styles.italic}>dell&rsquo;evoluzione.</em>
            </h2>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {principles.map((p, i) => (
            <Reveal key={p.id} as="article" delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.id}>{p.id}</span>
                  <span className={styles.label}>{p.label}</span>
                </div>
                <h3 className={styles.title}>{p.title}</h3>
                <p className={styles.text}>{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
