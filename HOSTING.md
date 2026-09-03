# Hosting this site independently

This is now a plain Vite + React static site. No Base44 backend required.

## Build
```
npm install
npm run build
```
This outputs static files to `dist/`.

## Deploy (pick one — all have free tiers)
- **Vercel**: `npx vercel` in this folder, or connect the GitHub repo in their dashboard. Auto-detects Vite.
- **Netlify**: drag-and-drop the `dist/` folder at app.netlify.com/drop, or connect the repo (build command `npm run build`, publish dir `dist`).
- **GitHub Pages**: push `dist/` to a `gh-pages` branch, or use the `gh-pages` npm package.
- **Cloudflare Pages**: connect repo, build command `npm run build`, output dir `dist`.

## What was changed from the Base44 export
- Removed unused login/register/auth pages and the Base44 auth context — they were never wired into routing, so this was dead code.
- Removed the browser upload widgets on project pages (they wrote to Base44 storage/localStorage, not real shared storage anyway). Add real project images/files directly into `src/` and import them, or drop them in `public/` and reference with an absolute path like `/my-file.pdf`.
- Removed the contact form — it was calling Base44's SendEmail API, and was misconfigured to send to leahgc01@purdue.edu anyway. `src/components/portfolio/ContactSection.jsx` is still in the repo (just unused) if you want to rebuild it later with Formspree, EmailJS, or a plain `mailto:` link.
- Also stripped the now-dead "Contact" nav links in `Navbar.jsx` since there's nothing on the page for them to scroll to anymore.
- Removed `@base44/sdk` and `@base44/vite-plugin` from dependencies; added the `@` → `src` path alias directly in `vite.config.js` (the Base44 plugin was quietly providing that alias — build breaks without it).
- Project images referencing `media.base44.com` URLs still work fine (public CDN), but consider moving them into `src/assets` or `public/` eventually so the site doesn't depend on Base44 staying up.
