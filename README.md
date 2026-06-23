# Arete Homes — lead-gen website

A fast, modern landing page for a "we buy houses for cash" business, built with
**Next.js**. Black-and-silver branding to match the Arete logo, modeled on
competitor sites but cleaner. The whole point of the site is the **lead form** —
every section funnels visitors to "Get my cash offer."

---

## 1. Run it on your machine (PowerShell)

You'll need [Node.js](https://nodejs.org) 18+ installed. Check with `node -v`.

```powershell
# from inside this folder
cd "$HOME\OneDrive\文档\Claude\Projects\Housing app"

npm install      # installs dependencies (first time only)
npm run dev      # starts the dev server
```

Open **http://localhost:3000** in your browser. Edits save live.

---

## 2. Make it yours — edit one file

Open **`app/site.config.js`**. Everything on the site (phone, email, city,
service-area list) reads from this one file:

```js
export const site = {
  name: "Arete",
  phone: "(949) 731-4008",
  email: "hello@aretehomes.com",   // ← change to your real inbox
  leadEndpoint: "",                 // ← see step 3
  ...
};
```

The logo is `public/logo.svg`. To use the real Arete logo instead, drop a
`logo.png` into `public/` and change `/logo.svg` to `/logo.png` in
`app/layout.js` and `app/page.js`.

---

## 3. Connecting the lead form (so you actually get the leads)

Until a key is set, the form **works as a demo** — it shows a success message but
doesn't email anyone. To get real leads emailed to you, use **Web3Forms** (free,
no account, no database):

1. Go to [web3forms.com](https://web3forms.com).
2. Type **team.aretehomes@gmail.com** in the "Create Access Key" box and submit.
3. Web3Forms emails you an access key (looks like `a1b2c3d4-...`). Copy it.
4. Paste it into `web3formsKey` in `app/site.config.js` and push.

Done. Every "Get cash offer" submission now emails that inbox instantly, with the
property address, name, phone, and timeline. No backend or database needed.

---

## 4. Push to GitHub (PowerShell)

You said GitHub is already connected to Vercel, so this is the only manual part.

```powershell
cd "$HOME\OneDrive\文档\Claude\Projects\Housing app"

git init
git add .
git commit -m "Arete lead-gen site"
git branch -M main
```

Create an empty repo on github.com (no README, no .gitignore — this folder
already has them), then connect and push:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/arete-homes.git
git push -u origin main
```

> If `git` isn't installed: `winget install --id Git.Git -e` then reopen PowerShell.

---

## 5. Deploy on Vercel

**Option A — dashboard (easiest):**
1. Go to [vercel.com/new](https://vercel.com/new).
2. "Import Git Repository" → pick `arete-homes`.
3. Vercel auto-detects Next.js. Leave all settings default → **Deploy**.
4. ~60 seconds later you get a live URL like `arete-homes.vercel.app`.

Every future `git push` to `main` redeploys automatically.

**Option B — Vercel CLI (PowerShell):**
```powershell
npm i -g vercel
vercel          # first run links the project
vercel --prod   # deploys to production
```

### Custom domain
In the Vercel project → **Settings → Domains** → add `aretehomes.com` (or
whatever you buy) and follow the DNS instructions. HTTPS is automatic.

---

## File map

```
app/
  layout.js         metadata, fonts, favicon
  page.js           the whole landing page (sections)
  LeadForm.js       the cash-offer form (client component)
  site.config.js    ← your business details live here
  globals.css       all styling (black/silver theme)
public/
  logo.svg          the silver "A" mark
```

## Quick checklist before you go live
- [ ] Set real `email` in `site.config.js`
- [ ] Add Web3Forms `web3formsKey` so leads get emailed
- [ ] Replace the demo disclaimer in the footer (`app/page.js`)
- [ ] Swap `logo.svg` for the real logo if you have a hi-res file
- [ ] Buy + connect a domain
