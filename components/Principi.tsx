import styles from "./Principi.module.css";
import { FadeUp } from "./FadeUp";

const principles = [
  {
    id: "01",
    title: "Idee",
    text: "Le idee hanno bisogno di struttura per diventare reali. Un&rsquo;organizzazione &egrave; il luogo dove questo accade &mdash; quando &egrave; pensata per funzionare.",
  },
  {
    id: "02",
    title: "Persone",
    text: "Gli strumenti passano. Le competenze restano. La differenza non sta in ci&ograve; che si adotta, ma in ci&ograve; che si &egrave; in grado di fare.",
  },
  {
    id: "03",
    title: "Cambiamento",
    text: "Il cambiamento non riguarda solo la tecnologia. Riguarda il modo in cui lavoriamo, decidiamo, collaboriamo. Riguarda l&rsquo;organizzazione.",
  },
  {
    id: "04",
    title: "Adattamento",
    text: "La capacit&agrave; di adattamento non si acquista. Si costruisce &mdash; con scelte consapevoli, processi essenziali, persone valorizzate.",
  },
];

export function Principi() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {principles.map((p, i) => (
            <FadeUp key={p.id} as="article" delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className={styles.card}>
                <span className={styles.number}>{p.id}</span>
                <h2 className={styles.title}>{p.title}</h2>
                <p className={styles.text} dangerouslySetInnerHTML={{ __html: p.text }} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
