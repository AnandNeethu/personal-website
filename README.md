# Neethu Anand · Academic website

A personal research website built directly in this repository with Next.js App Router, React, strict TypeScript, Tailwind CSS, and Lucide icons. It presents theoretical and computational chemistry research at POSTECH with an off-white, navy, and slate palette, serif headings, a genuine CV portrait, and a conceptual quantum-dynamics illustration.

The project is configured for static export. It has no database, backend, analytics, contact-form service, remote fonts, or external runtime content requests.

## Handover status

**Source only. Dependencies have not been installed. The website has not been run, type-checked, linted, tested, built, previewed in a browser, or deployed.** No Git commands were executed. The existing `.git` and `.venv` directories were left untouched. No lockfile was fabricated; `npm install` will generate `package-lock.json`.

Read [CONTENT_REVIEW.md](CONTENT_REVIEW.md) before publishing. It identifies missing contact/profile information, manuscript metadata, and the public CV decision.

## Run manually in PowerShell

Use Node.js 22.13 or newer (a supported Node LTS release is recommended) and npm. You do not need to activate or change the Python environment.

```powershell
Set-Location -LiteralPath 'C:\Users\neethu\Documents\Projects\personal-website'
npm install
npm run dev
```

Open `http://localhost:3000` yourself. Stop the development server with **Ctrl+C**, or use a separate PowerShell window for the following commands:

```powershell
Set-Location -LiteralPath 'C:\Users\neethu\Documents\Projects\personal-website'
npm run typecheck
npm run lint
npm run build
```

`typecheck` runs `tsc --noEmit`. `lint` runs the ESLint CLI with Next.js Core Web Vitals and TypeScript rules; Next.js 16 no longer provides `next lint`. `build` produces the static site in `out/`. No automated test runner is included.

`next-env.d.ts` is supplied so type checking does not depend on first running a build. Next.js may update this generated file; it is ignored by Git. TypeScript also includes generated `.next/types` and `.next/dev/types` when they exist.

There is no production `npm start` script because this project exports static files. Serve `out/` with your static hosting provider. If you later choose server rendering, remove `output: "export"` from `next.config.ts`, then add a `next start` script.

## Pages

| Route | Content |
| --- | --- |
| `/` | Introduction, affiliation, research themes, selected papers, links to CV and contact |
| `/about/` | Biography, academic journey, mentoring, documented collaborations |
| `/research/` | Quantum dynamics, ESIPT, and molecular machine learning |
| `/publications/` | Eight published papers and four ongoing/forthcoming works; text, topic, and status filtering |
| `/experience/` | Research timeline, teaching, talks, conferences, workshops |
| `/education/` | Ph.D. and BS–MS, research topic, supervisor, award dates |
| `/projects/` | Six descriptive research project cards with objectives, methods, contributions, and related papers |
| `/skills/` | Scientific expertise, software, communication, and professional development |
| `/awards/` | Six awards, recognition, fellowship, and scholarship entries |
| `/cv/` | Public academic summary; optional approved PDF download |
| `/contact/` | Affiliation, collaboration interests, source repository, and explicitly labeled missing contact/profile information |

The site also includes a custom 404 page, favicon, Open Graph image, `sitemap.xml`, and `robots.txt`.

## Structure

```text
personal-website/
├── references/                   # Existing private CV source, ignored
├── reference/                    # Also ignored if added later
├── public/images/
│   └── neethu-anand.jpg           # Actual portrait extracted from the supplied CV
├── src/
│   ├── app/                      # Pages, layout, global styles, metadata routes
│   ├── components/               # Navigation, cards, filters, timeline, theme control
│   ├── data/                     # Editable academic records, separate from UI
│   ├── lib/site.ts               # Site URL and shared SEO metadata
│   └── types/academic.ts          # Academic data interfaces
├── .env.example
├── next.config.ts
├── eslint.config.mjs
├── postcss.config.mjs
├── tsconfig.json
├── package.json
├── CONTENT_REVIEW.md
└── README.md
```

## Update academic content

| File in `src/data/` | What to edit |
| --- | --- |
| `profile.ts` | Name, designation, affiliation, biography, interests, approved email, portrait path, public CV path, and verified links |
| `research.ts` | Research themes, scientific questions, approaches, applications, methods |
| `publications.ts` | Full publication metadata, status, DOI, topics, selected/featured papers |
| `experience.ts` | Research appointments, teaching, presentations |
| `education.ts` | Degrees, research periods, award dates, thesis, supervisor |
| `projects.ts` | Study descriptions and related publication IDs |
| `skills.ts` | Expertise categories, software, language skills, professional training |
| `awards.ts` | Awards, recognition, fellowship, scholarship |
| `navigation.ts` | Navigation and sitemap route list |

All values placed in these data files are public website content, even if a particular field is not currently rendered. Keep private information outside `src/` and `public/`.

### Add a publication

Add an entry to the typed `publications` array in `src/data/publications.ts`:

```typescript
{
  id: "replace-with-a-unique-id",
  title: "Replace with the verified publication title",
  authors: ["Replace with the complete author list"],
  journal: "Replace with the verified journal",
  year: 2026, // Replace with the actual publication year.
  citation: "Replace with volume, pages, or article number",
  status: "Published",
  topics: ["Quantum dynamics"],
  // Add doi: "..." only when a verified DOI exists.
}
```

This is a structural example, not academic content to publish unchanged. Use a stable unique `id`; projects link to publications through `publicationIds`. Filters update from the data automatically. Published articles sort by year descending, preserving entry order within the same year. Search matches title, authors, venue, DOI, year, and topics.

Supported statuses are `Published`, `Accepted`, `Submitted`, `In preparation`, and `Preprint forthcoming`. Only Published entries appear in the peer-reviewed year groups. Other statuses appear in the clearly separated ongoing/forthcoming section. Use `year: null`, `journal: null`, and `authors: []` where those details are unknown, with a clear `note`. Never use the CV date as a manuscript publication date. Use `url` for a verified publisher or preprint URL when there is no DOI.

Home selections are controlled by the three IDs in `src/app/page.tsx`; `featured: true` adds the journal-cover badge only where that recognition is verified. Update both as the record changes.

### Approve a public email and academic links

Set `profile.email` to an address you approve for public use. The contact page renders an email link only when this value exists. There is no form that silently fails to send.

Add verified profile entries to `profile.links`, with `label`, `url`, and `description`. Remove corresponding entries from `profile.missingProfiles`. The GitHub link currently leads to the supplied website repository; it is not presented as a CV-sourced academic profile.

### Add or replace the portrait

The included portrait is the real JPEG embedded in the supplied CV, extracted without alteration. It is only 200 × 267 pixels and is intentionally displayed at modest sizes. For higher quality, add a public-approved image to `public/images/` and update `profile.portrait`. Set this field to `null` for the initials placeholder. No fictional photograph is generated.

### Add an approved downloadable CV

1. Create a separate public copy with private contact information and referee details removed as appropriate.
2. Put that reviewed copy at a chosen path such as `public/cv/neethu-anand-public.pdf`.
3. Set `profile.publicCv` to `/cv/neethu-anand-public.pdf`.
4. Review the file yourself before publishing.

The source CV is not served by Next.js. Do not place it in `public/` or create a route that reads it. The `/cv/` page works as a public HTML summary without any PDF. The entire source directories `reference/` and `references/` are ignored.

## Styling and accessibility

`src/app/globals.css` contains Tailwind v4 imports, theme tokens, utility composition, responsive layouts, focus states, motion settings, and print rules. A separate `tailwind.config` is not needed for this CSS-first setup.

- The typography uses local system font stacks; no Google Fonts download is required during a build.
- Light/dark mode initially follows the operating system. The theme toggle saves an explicit preference to local storage, with an in-memory fallback when storage is unavailable. Clear the `academic-theme` local storage key to return to system preference.
- Navigation is a disclosure on smaller screens; Explore uses native `details`/`summary`. Escape closes the active disclosure. Links are also available in the footer.
- Skip navigation, visible keyboard focus, form labels, live filter-result counts, descriptive link names, and reduced-motion styles are included in source.
- The home illustration is explicitly conceptual and does not represent measured or simulated results.
- The CV summary has print styles. Review print output manually if you intend to share it.

These are implementation intentions, not accessibility certification. Keyboard behavior, screen-reader output, contrast, zoom, and responsive presentation still need your manual review.

## Metadata and the public domain

Create your local environment file when ready:

```powershell
Copy-Item -LiteralPath '.env.example' -Destination '.env.local'
```

Only run this copy if `.env.local` does not already exist. Edit `NEXT_PUBLIC_SITE_URL` to your real origin, for example your eventual Vercel origin or custom domain. Supply an absolute `https://` origin with no path, query, or fragment. Do not use the GitHub repository URL as the website origin.

Until this value is supplied, pages use `noindex, nofollow`, `robots.txt` disallows indexing, canonical URLs are omitted, and the sitemap is empty. After setting it, rebuild manually so metadata and static files contain the correct domain. This is a public build-time value, not a secret. Search engine directives do not provide access control.

Open Graph metadata, a generated PNG sharing image, and public-only Person structured data are included. Image generation is intended to happen during the static build. Its output and social-sharing rendering remain unverified. Sitemap entries do not contain invented last-modified dates.

## Dependencies

Runtime: `next` (~16.4.6), `react` and `react-dom` (~19.3.0), `lucide-react` (^0.468.0).

Development: TypeScript, Tailwind CSS and `@tailwindcss/postcss`, PostCSS, ESLint, `eslint-config-next`, and the Node/React/React DOM TypeScript definitions. Full constraints are in `package.json`. Dependency compatibility and resolution have not been checked by installation; npm will select permitted patches and generate a real lockfile for your review.

Configuration follows the official [Next.js ESLint documentation](https://nextjs.org/docs/app/api-reference/config/eslint), [Next.js static export guide](https://nextjs.org/docs/app/guides/static-exports), and [Tailwind CSS Next.js setup](https://tailwindcss.com/docs/installation/framework-guides/nextjs).

## Deploy later to Vercel

When you are satisfied with your own review:

1. Run the manual installation, type check, lint, and build commands above, and address any reported issues.
2. Inspect the generated public output and review `CONTENT_REVIEW.md`.
3. Commit and push the source yourself. Keep the private source CV and environment files out of the commit. Commit the real `package-lock.json` generated by npm for reproducible installs.
4. Import `AnandNeethu/personal-website` into Vercel, select Next.js, and use the repository root as the project root. Set a compatible Node version and the production `NEXT_PUBLIC_SITE_URL` environment variable.
5. Use `npm run build` as the build command. This configuration exports to `out/`; use that directory if an output override is needed. Do not configure `next start` for a static export.
6. Deploy yourself, then inspect public routes, links, metadata, and indexing behavior. Rebuild after changing the origin or academic data.

For another static host, publish the generated `out/` directory. `trailingSlash: true` emits directory-style pages such as `research/index.html`. Domain-root hosting is assumed; hosting beneath a subpath, including GitHub project Pages, needs additional `basePath` and asset-path work.

`.gitignore` does not untrack files that were already committed. If private CVs or environment files were tracked previously, review that situation yourself; no Git index or history operations were performed here.

## What remains unverified

- npm dependency availability, peer compatibility, and the generated lockfile.
- TypeScript and ESLint results, static-export compilation, and metadata image generation.
- Browser layout, light/dark behavior, filter interactions, keyboard navigation, and mobile responsiveness.
- Publisher DOI destinations, academic profiles not supplied in the CV, and status changes since October 2026.
- Vercel configuration and behavior, since no deployment was performed.

No successful build or test result is claimed.
