# Luffy Portfolio Template

An open-source developer portfolio template (React + TypeScript + Tailwind) with a fun One Piece demo theme. Fork it, replace the Luffy content with yours, and ship.

## Features

- Responsive layout (home, about, projects, products, hire)
- Dark / light theme with smooth top-to-bottom transition
- Lenis smooth scrolling
- Product detail pages + optional Play Store metrics
- Live IST clock + online status indicator
- Optional Firebase visitor counter
- Contact form via Web3Forms
- GitHub contributions graph
- Intro animation, click sounds, swipe navigation on mobile

## Quick start

```bash
git clone https://github.com/anand-reddi/luffy-portfolio.git
cd luffy-portfolio
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Customize for your portfolio

### 1. Personal content — `constants.ts`

Update:

- `PERSONAL_INFO` — name, title, bio, email, images, about text, GitHub username
- `PERSONAL_INFO.animatedNameEnglish` / `animatedNameJapanese` — name swap on **home**, **About "It's Me"**, and **footer** only (paragraphs stay plain)
- `PERSONAL_INFO.circularText` / `circularTextLetterSpacing` — spinning text around the profile photo
- `VISITOR_STATS` — static visitor number (live optional)
- `PROJECTS` — main projects
- `SIDE_PROJECTS` — products / side projects (optional `playStoreStats`, `overview`, `images`, etc.)
- `SOCIAL_LINKS` — Instagram / LinkedIn / GitHub
- `SKILLS` — tech stack badges
- `WEB3FORMS_ACCESS_KEY` — your key from [web3forms.com](https://web3forms.com)

### 2. Images — `assets/`

Replace demo images (or remote URLs in `constants.ts`) with your own. Import local files like:

```ts
import profile from "./assets/my-profile.webp";
```

### 3. Branding

- `index.html` — title + favicon
- `components/IntroAnimation.tsx` — intro letters / tagline
- Name language swap is controlled only via `PERSONAL_INFO.animatedNameEnglish` / `animatedNameJapanese` in `constants.ts`

### 4. Visitor count (static by default)

Edit in `constants.ts`:

```ts
export const VISITOR_STATS = {
  staticCount: 10800,      // shown out of the box
  enableLiveCount: false,  // set true only after YOUR Firebase setup
};
```

No Firebase keys are required for the template demo.

**Live counting:** set `enableLiveCount: true`, copy `.env.example` → `.env` with **your** Firebase web config, create Firestore, then follow `VISITOR_COUNTER_SETUP.md`.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Local development |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build |

## Deploy

Build with `npm run build`, then host `dist/` on Firebase Hosting, Vercel, Netlify, or GitHub Pages.

## License

MIT — use freely for personal or commercial portfolios. Keep attribution in the footer if you can (UI inspired by Nur Praditya / Subtle Folio).

## Credits

- Template & demo theme maintained from the Luffy portfolio fork
- UI design inspiration: [Subtle Folio](https://dribbble.com/shots/22110108-Subtle-Folio-Portfolio-Framer-Template) by Nur Praditya
