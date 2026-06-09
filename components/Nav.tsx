"use client";

import { useEffect, useState } from "react";
import styles from "./Nav.module.css";

const links = [
  { label: "Servizi", href: "#servizi" },
  { label: "Processo", href: "#processo" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark}>S</span>
          <span className={styles.logoText}>Sintetica<span className={styles.dot}>.</span></span>
        </a>

        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={styles.link}>
                <span className={styles.linkIndex}>0{links.indexOf(l) + 1}</span>
                <span>{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#contatto" className={styles.cta}>
          <span>Scrivici</span>
          <span className={styles.ctaArrow} aria-hidden="true">→</span>
        </a>
      </div>
    </nav>
  );
}
