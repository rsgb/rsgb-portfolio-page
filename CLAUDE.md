# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website for Rui Braga — a single-page React app showcasing frontend work, open-source contributions, and AI/automation projects. No routing; the page scrolls through sections (Hero, Skills, Experience, Projects, Contact).

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint (flat config, JS/JSX only)

## Architecture

- **React 19 + Vite 8**, plain JavaScript (no TypeScript).
- Entry: `index.html` → `src/main.jsx` → `src/App.jsx`.
- **Data-driven**: all content (skills, experience, projects, contact info) lives in `src/data/portfolioData.js` and is passed as props from `App` into section components. To change site content, edit `portfolioData.js` — don't hardcode text in components.
- **Components** (`src/components/`): one file per page section, plus `SectionTitle` (shared heading) and `Navbar`/`Footer`. Each component receives its data via props.
- **Styling**: global CSS in `src/App.css` and `src/index.css` — no CSS modules, no CSS-in-JS.
- **Icons**: `react-icons` (specifically `fa6` and `fi` icon sets).
- **Images**: stored in `assets/images/` (outside `src/`), referenced via `new URL('../../assets/images/...', import.meta.url).href` in `portfolioData.js` for Vite asset handling. Project images include both desktop (`.png`) and mobile (`.webp`) variants.
- **Contact form**: submits to Web3Forms API (`api.web3forms.com`). The access key is in `ContactSection.jsx`.
- **Lightbox**: `ProjectsSection` has a built-in image lightbox with keyboard navigation (arrow keys, Escape). Mobile screenshots are displayed at a narrower width.

## ESLint

Flat config in `eslint.config.js`. Unused vars error is suppressed for names starting with uppercase or underscore (`varsIgnorePattern: '^[A-Z_]'`).
