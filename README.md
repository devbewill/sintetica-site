# Sintetica

Landing page del brand Sintetica.

## Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Linguaggio**: TypeScript
- **Font**: [Inter](https://rsms.me/inter/) via `next/font`
- **Animazioni**: Intersection Observer (custom `FadeUp` component)
- **Stili**: CSS Modules

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produzione
```

## Design

- Tipografia dominante — Inter Light 300, pesi crescenti
- Alternanza light/dark per ritmo visivo
- Zero immagini — solo tipografia e spazio
- Palette: bianco (#fff), nero (#121212), grigi
- Micro-animazioni al viewport con scroll

## Struttura

```
app/
├── globals.css    # Design system + reset
├── layout.tsx     # Root layout + font
└── page.tsx       # Sezioni assemblate

components/
├── Nav.tsx         # Navigazione fissa
├── Hero.tsx        # Headline principale
├── Spazio.tsx      # Core statement (dark)
├── Principi.tsx    # Griglia 2×2 principi
├── Citazione.tsx   # Blocco editoriale
├── Contatto.tsx    # CTA (dark)
├── Footer.tsx      # Footer minimale
└── FadeUp.tsx      # Wrapper animazione
```
