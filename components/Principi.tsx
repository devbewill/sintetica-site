"use client";

import { Reveal } from "./FadeUp";
import styles from "./Principi.module.css";

const items = [
  {
    num: "Rimuovere",
    title: "Togliere prima di aggiungere",
    text: "Ogni intervento parte dal togliere: processi ereditati, strumenti ridondanti, riunioni senza scopo. Meno è di più.",
  },
  {
    num: "Ascoltare",
    title: "Decisioni su evidenze, non su impressioni",
    text: "AI e dati ci dicono cosa funziona e cosa no. Le scelte si basano su fatti, non su mode o abitudini consolidate.",
  },
  {
    num: "Accendere",
    title: "Il cambiamento parte dalle persone",
    text: "Il cambiamento più potente è quello che le persone sentono proprio. Lavoriamo su commitment, ownership e chiarezza.",
  },
  {
    num: "Mantenere",
    title: "Il fuoco resta acceso",
    text: "Il progetto non finisce quando ce ne andiamo. Governance, misurazione, adattamento continuo: perché il valore non si spenga.",
  },
];

export function Principi() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.head}>
          <Reveal as="p" className={styles.kicker}>
            <span className={styles.kickerLine} />
            Principi
          </Reveal>
          <Reveal as="h2" delay={1} className={styles.header}>
            Niente scorciatoie<span className={styles.accent}>.</span>
          </Reveal>
        </div>
        <div className={styles.list}>
          {items.map((item, i) => (
            <Reveal key={item.num} delay={((i % 4) + 1) as 1 | 2 | 3 | 4} className={styles.item}>
              <span className={styles.itemLabel}>{item.num}</span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemText}>{item.text}</p>
              <span className={styles.itemArrow} aria-hidden="true">→</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
