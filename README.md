# Numaware — Cybersecurity Website

A production-ready Next.js (App Router) website for Numaware.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- ESLint + Prettier
- Framer Motion (animations)

## Getting Started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Build
```bash
npm run build
npm start
```

## Project Structure
- `src/app` — App Router pages and global layout
- `src/components` — Shared UI components
- `src/data` — Data structures for services, modules, posts
- `public/logo.png` — Upload your logo here

## Environment
No environment variables required. For the contact form, replace the Formspree action with your endpoint.

## Deployment
- Ready for Vercel: connect repository and `npm run build`
- Output is static for all pages listed; ideal for CDN caching

## Branding
- Primary: #0a192f (navy)
- Accent: #64ffda (cyan)
- Font: Inter

## Notes
- Mobile responsive with Tailwind grid/flex
- SEO metadata per page
- Active nav highlighting
- Smooth fade-in animations

---
© 2025 Numaware
