# Layla's portfolio kit

Three niche portfolios on one site, plain HTML + Tailwind (no build step).

```
portfolio/
├── index.html                 ← hub for the bare domain
├── assets/                    ← shared CSS, JS, favicon, résumé PDFs
├── images/                    ← ONE image library shared by all three portfolios
├── packaging/                 ← Packaging & label design
│   ├── index.html
│   └── kids-garden.html       ← case study template (packaging)
├── illustration/              ← Illustration, style guides, consumer products
│   ├── index.html
│   └── reflect-overcome-grow.html   ← case study template (illustration / licensing)
└── amazon/                    ← Amazon & e-commerce
    ├── index.html
    └── ryve-live-with-purpose.html  ← case study template (Amazon)
```

Send recruiters the niche link, not the root:
`yourname.vercel.app/packaging/` · `/illustration/` · `/amazon/`

---

## 1. Structure strategy

**One niche per link.** A packaging hiring manager should never have to scroll past coloring books to find a carton. Each portfolio only links to its own work, so it reads as a specialist's site.

**4 to 6 projects per niche, 2 or 3 of them as full case studies.** The rest can link to a short case study (hero, brief, gallery, outcome) or stay as cards until you write them. Quality beats count.

**Reuse projects, change the angle.** Speravia sits in all three portfolios, told three ways:

| Niche | What the Speravia story emphasizes |
|---|---|
| Packaging | Rigid magnetic box, gold foil, print layout, production files |
| Illustration | The 52 illustrated cards and the visual system across them |
| Amazon | Designed to sell on the Amazon gifting shelf |

Same images, different first paragraph and different section order.

**What each niche's case study must prove**

| Niche | The proof section | Lineup |
|---|---|---|
| Packaging | *Production*: dieline view + spec table. Shows you ship clean, manufacturer-ready files | Kids Garden, Pristes, Quiteña, Purexa, Speravia, Muna Moringa (swap in Wild Origin / Pico Botanica as you like) |
| Illustration / licensing | *Style guide*: line rules, motif library, page grid, do/don't. Proves you can define a world others can reproduce. This is what a Styleguides Artist role hires for | Reflect, Overcome & Grow, Speravia, Kids Garden characters, Harmony & Joy, Live With Purpose, botanical calendar |
| Amazon | *Asset matrix* + *listing mock*. Shows you think in sizes, formats and languages | RYVE Live With Purpose, DYNMC YOU, Milula christening gift, coloring sets, Speravia, listing sample pack |

**Gap worth filling for licensing roles:** a mini style guide built on an IP you own (Kids Garden characters with the client's OK, or your Endem flora). 6–8 pages: character/motif sheet, color callouts, construction notes, do/don't, three product mockups. It directly mirrors the job.

**Case study section order** (delete what doesn't apply):
Hero + facts → Brief → Challenge → Approach → Identity / Style guide / Asset matrix → Gallery → Production → Outcome → Next project

**Honesty rules baked in:** testimonials pasted word for word, no invented metrics, your actual role stated plainly. Anything still highlighted in yellow is a fact only you can fill in.

---

## 2. Editing

**Yellow highlights** (`<span class="fill">…</span>`) mark text that still needs your real info. Search the files for `fill` to find them all. When a page is finished, change `<html lang="en">` to `<html lang="en" class="ship">` to switch any leftovers to normal text.

**Find & replace across all files**
- `your@email.com` → your email
- The `href="#"` links in the contact sections → Upwork / LinkedIn / Instagram URLs

**Images.** Each image slot shows its expected file path. Save the file there and it appears automatically, no code change. Until then you see a labelled placeholder.
- Export JPG at about 80% quality, roughly 2× the size shown on the slot label, under ~500 KB each
- Use lowercase-hyphen names: `images/pristes/cover.jpg`
- Card covers are reused on the hub and in "Next case study" blocks, so one good cover goes a long way

**New case study:** duplicate the template in that niche's folder, rename it to match the card link (e.g. `pristes.html`), replace text and image paths.

**Colors.** Each niche's accent is one line in `assets/site.css` (`--accent`). Fonts are Fraunces (display) + Archivo (text) + JetBrains Mono (labels).

**Résumés.** Put niche-specific PDFs in `assets/`: `resume-packaging.pdf`, `resume-illustration.pdf`, `resume-amazon.pdf`.

**Preview locally:** double-click any `.html` file. (Needs internet for Tailwind and fonts.)

---

## 3. Deploy free on Vercel

**Easiest, no Git:**
1. Install the Vercel CLI once: `npm i -g vercel` (needs Node.js)
2. In the `portfolio` folder run `vercel`, log in, accept the defaults
3. `vercel --prod` publishes. Re-run it after every change

**Better long term, with GitHub (auto-deploys on every change):**
1. Create a GitHub repo and upload the `portfolio` folder contents (drag and drop works on github.com)
2. On vercel.com → Add New → Project → import the repo
3. Framework preset: **Other**. No build command, output directory left blank → Deploy
4. Every edit you commit on GitHub redeploys automatically

**Custom domain** (optional): Vercel project → Settings → Domains.

Alternatives that host the same folder for free: Netlify (drag the folder onto app.netlify.com/drop) and Cloudflare Pages.

---

## 4. Before you send a link

- [ ] No yellow highlights left on pages you're sharing (or `class="ship"` added)
- [ ] Every card on the niche homepage either opens a case study or is removed
- [ ] Images load on mobile (check on your phone)
- [ ] Contact email and résumé link work
- [ ] OG image set (`images/og/packaging.jpg` etc., 1200 × 630) so the link previews nicely in LinkedIn and email
