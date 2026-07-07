# StrideStep Logistics — TypeScript / React Website

A professional, production-ready logistics company website built with **React 18 + TypeScript + Vite + Tailwind CSS**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS v3 |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Fonts | Inter + Poppins (Google Fonts) |

---

## Project Structure

```
stridestep/
├── public/
│   └── images/          ← Brand images (fleet, rider, hero, etc.)
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Sticky transparent→solid navbar
│   │   │   └── Footer.tsx       ← Full footer + WhatsApp float
│   │   ├── sections/            ← (reserved for shared sections)
│   │   └── ui/
│   │       └── index.tsx        ← FadeIn, SectionTag, BtnPrimary,
│   │                               FormInput, StatusBadge, Card, etc.
│   ├── data/
│   │   └── index.ts             ← All site content (services, jobs, etc.)
│   ├── hooks/
│   │   └── index.ts             ← useScrollY, useInView, useCounter, useMobileMenu
│   ├── pages/
│   │   ├── Home.tsx             ← Homepage (hero, services, stats, why, fleet, CTA)
│   │   ├── Services.tsx         ← All 8 services with detail sections
│   │   ├── Tracking.tsx         ← Live tracking with demo data
│   │   ├── About.tsx            ← History, values, team, certifications
│   │   ├── Quote.tsx            ← 4-step quote request form
│   │   ├── Contact.tsx          ← Form, map, office info
│   │   ├── Careers.tsx          ← Job listings + apply modal
│   │   └── Portal.tsx           ← Full customer portal (login + 8 panels)
│   ├── types/
│   │   └── index.ts             ← All TypeScript interfaces
│   ├── App.tsx                  ← BrowserRouter + Routes
│   ├── main.tsx                 ← React entry point
│   └── index.css                ← Tailwind directives + Google Fonts import
├── tailwind.config.js           ← Custom colors, fonts, animations
├── vite.config.ts               ← Vite config
├── tsconfig.json                ← TypeScript config
└── package.json
```

---

## Pages

| Route | Component | Description |
|---|---|---|
| `/` | `Home.tsx` | Hero, tracking widget, services, stats, fleet, testimonials, CTA |
| `/services` | `Services.tsx` | 8 full service sections with features, icons, sticky nav |
| `/tracking` | `Tracking.tsx` | Tracking search with progress bar, timeline, demo numbers |
| `/about` | `About.tsx` | Mission/vision, milestones timeline, team, certifications |
| `/quote` | `Quote.tsx` | 4-step form: contact info → cargo → route → review |
| `/contact` | `Contact.tsx` | Contact form, Google Maps embed, office details |
| `/careers` | `Careers.tsx` | Filterable job listings + full application modal |
| `/portal` | `Portal.tsx` | Login/register + 8-panel dashboard (no nav/footer) |

---

## Portal Demo Login

URL: `/portal`  
Email: `demo@stridestep.co.ke`  
Password: `Demo@1234`

**Portal panels:** Dashboard · My Shipments · Track Package · My Quotes · Invoices · Notifications · Support Tickets · My Profile

---

## Demo Tracking Numbers

| Number | Status |
|---|---|
| `LLT-28741` | 🚛 In Transit (Nairobi → Mombasa) |
| `LLT-19234` | 🚛 In Transit (Mombasa → Kampala) |
| `LLT-55027` | ✅ Delivered (CBD → Karen) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Deployment

### Option 1 — Netlify (Recommended, Free)
1. Run `npm run build`
2. Drag the `dist/` folder to [netlify.com/drop](https://app.netlify.com/drop)
3. Connect `stridestep.co.ke` in Domain Settings

**Important:** Add `_redirects` file in `/public/` for SPA routing:
```
/*  /index.html  200
```

### Option 2 — Vercel
```bash
npm install -g vercel
vercel --prod
```

### Option 3 — cPanel / Shared Hosting
1. Run `npm run build`
2. Upload contents of `dist/` to `public_html/`
3. Add `.htaccess`:
```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

---

## Customisation

### Update contact details
Edit `src/data/index.ts` — all content (services, jobs, testimonials, nav links) is centralised here.

### Update colors
Edit `tailwind.config.js`:
```js
colors: {
  navy: { DEFAULT: '#0F3D5E' },   // Primary dark blue
  royal: { DEFAULT: '#1565C0' },  // Secondary blue
  amber: { brand: '#FF8F00' },    // CTA / accent orange
}
```

### Add pages
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add nav link in `src/data/index.ts`

---

© 2024 StrideStep Logistics Ltd.
