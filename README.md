# Sayan Roy — Personal Portfolio (Private)

This repository contains the source for my personal portfolio website. It is a private portfolio project and not intended to be used as an open-source starter or cloned for other projects.

If you are viewing this file in a public place, please note this copy is meant for demo and reference only — contact me before reusing any assets or code.

---

## Quick summary

- Framework: Next.js (React) — the project uses Next.js with the App Router.
- UI: Tailwind CSS + a collection of small UI components in `components/` (including `components/ui/` primitives).
- TypeScript: the project is typed (TypeScript present in the repo).
- 3D & visuals: the site includes Three.js/react-three components and several particle/animation components.

## Features

- Landing / intro animations
- 3D scene powered by `three` + `@react-three/fiber`
- Re-usable UI primitives under `components/ui/` (cards, buttons, dialogs, etc.)
- Custom animations and particle backgrounds (`ParticleAnimation`, `ParticleBackground`, `three-scene`, etc.)
- Small client-side hooks in `hooks/` (e.g., `use-mobile`, `use-toast`)

## Project structure (important files/folders)

- `app/` — Next.js app router pages and layout; contains `globals.css` and top-level pages
- `components/` — Shared React components used across the site
- `components/ui/` — Small UI primitives and design system components
- `hooks/` — Custom React hooks used by components
- `lib/` — utility functions (helper utilities)
- `public/` — static assets (images, icons)
- `styles/` — additional global css and Tailwind entry
- `package.json` — project scripts and dependencies

## Local development (Windows / PowerShell)

1. Install Node (LTS recommended) and pnpm (optional but recommended):

```powershell
# if you prefer pnpm and don't have it
npm install -g pnpm
```

2. Install dependencies (run from repository root):

```powershell
pnpm install
# or if you prefer npm/yarn
npm install
# or
yarn install
```

3. Start the dev server:

```powershell
pnpm dev
# or
npm run dev
# or
yarn dev
```

If you see "'next' is not recognized" when running `npm run dev`, run the install step above. If you're using a different package manager, make sure the `node_modules/.bin` folder is available in your PATH for your shell.

## Build & deploy

```powershell
pnpm build
pnpm start
```

You can deploy to Vercel, Netlify, or your preferred static/node host. The project uses Next.js server/static features — choose the appropriate platform (Vercel is recommended for easiest integration).

## Customization notes

- Colors / theme variables: edit `app/globals.css` (and `styles/globals.css`) — the root CSS variables control background and surface colors. This is where to change primary/secondary/foreground colors.
- Animations: look in `components/` for animation wrappers like `AnimatedBoxes`, `ParticleAnimation` and `three-scene` for Three.js.
- Component UI: edit primitives in `components/ui/` to adjust base spacing, typography and behavior.

## Dependencies highlights

- Next.js (v15+)
- React 19
- Tailwind CSS
- Three.js + @react-three/fiber, @react-three/drei
- Radix UI primitives (a subset under `@radix-ui/react-*` in `package.json`)

## Notes about this repository

This repository is my personal portfolio source. It contains personal content, images, and styling that belong to me. It's not packaged or intended for general distribution. If you want to reuse ideas or code, please reach out to me first.

If you need help running the project or want a feature changed (for example: change site colors to a royal-red / gold / black palette), open an issue in the private tracker or contact me directly.

---

Thank you for taking a look — Sayan
