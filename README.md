# Neon Pulse Soda Lab

Premium, futuristic 3D e-commerce experience for a cold drink/soda brand. Built with Next.js 14, React Three Fiber, Tailwind CSS, Framer Motion, GSAP, and shadcn/ui.

## Features
- Immersive 3D hero with floating bottle, ice cubes, liquid wave, and bubbles
- Product grid with interactive 3D models and add-to-cart flow
- Product detail 3D viewer with orbit controls and AR-ready button
- Glassmorphism UI, neon glow buttons, and parallax backgrounds
- Cart drawer with localStorage persistence
- Scroll-triggered reveals and animated promo banner

## Tech Stack
- Next.js 14 (App Router)
- React Three Fiber + Drei
- Tailwind CSS (v4) + shadcn/ui
- Framer Motion + GSAP ScrollTrigger
- TypeScript

## Getting Started

Install dependencies:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
```

Open `http://localhost:3000`.

## 3D Models (Auto-Download)
This project ships with procedural fallback models. For production-quality assets, add public, royalty-free model URLs in `scripts/models.json` and download them.

1. Update `scripts/models.json` with direct GLB/GLTF download URLs from:
   - Sketchfab (free, downloadable)
   - Poly Pizza
   - Google Poly Archive
   - CGTrader free section
   - TurboSquid free models

2. If using Sketchfab API downloads, set your token:
```bash
export SKETCHFAB_TOKEN=YOUR_TOKEN
```

3. Download models:
```bash
npm run models:download
```

4. Optimize and Draco-compress:
```bash
npm run models:optimize
```

Optimized files are written to `public/assets/models/optimized` and loaded automatically when present.

## Folder Structure
```
/app
/components
  /cart
  /sections
  /three
  /visuals
/3d-models
/public/assets
  /models
  /textures
/styles
/utils
/hooks
/scripts
```

## Useful Scripts
- `npm run dev` - Start local dev server
- `npm run build` - Production build
- `npm run start` - Start production server
- `npm run models:download` - Download 3D models
- `npm run models:optimize` - Optimize models with Draco

## Deployment (Vercel)
1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Build command: `npm run build`
4. Output: `.next`

The app is fully Vercel-ready with App Router support.

## Docker
Build:
```bash
docker build -t neon-pulse .
```

Run:
```bash
docker run -p 3000:3000 neon-pulse
```

## Notes
- 3D models are optional; procedural models are used when assets are missing.
- Enable `prefers-reduced-motion` to disable cursor motion and heavy animations.
