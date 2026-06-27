# Premium Developer Portfolio - Thejaswini P

This is a premium, modern, single-page developer portfolio built from scratch for **Thejaswini P** using the latest Next.js 15 App Router, TypeScript, Tailwind CSS v4, and Framer Motion animations.

## Features

- **Apple / Linear Design System**: Dark/Light mode theme syncing with smooth animations, custom layouts, and a responsive structure.
- **Dynamic Scrollspy & Active Indicators**: Floating navbar that updates active indicators based on screen viewport offset.
- **Framer Motion Animations**: Entrance and hover transformations built cleanly on viewport visibility.
- **Production Contact Form**: Form submission proxy sending messages securely to client inbox via AJAX.
- **Type-safe Data Model**: Dynamic, clean representation of experiences, projects, and certifications in type-safe datasets.
- **PWA Ready**: Configuration file with browser branding assets, standalone installation capabilities, sitemaps, and robots crawler files.
- **PDF Resume Viewer**: Embedded sandbox frame allowing recruiters to download or inspect the PDF resume.

---

## Directory Structure

```text
portfolio-next/
├── public/                 # Static assets, PDFs, branding elements
│   ├── favicon.ico         # Custom shortcut icon
│   ├── manifest.json       # PWA configurations
│   ├── robots.txt          # Crawler indexing rules
│   ├── sitemap.xml         # Site structure index
│   └── media/              # Certificate PDF attachments and headshot avatars
├── src/
│   ├── app/                # Next.js App Router core controller
│   │   ├── globals.css     # Global styling rules, variables, and glass utilities
│   │   ├── layout.tsx      # Main layout template loading Inter and Poppins fonts
│   │   ├── page.tsx        # Coordinates all structural pages
│   │   └── not-found.tsx   # Custom 404 error template
│   ├── components/         # Premium React UI elements
│   │   ├── LoadingScreen.tsx
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Education.tsx
│   │   ├── ResumePortal.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── portfolioData.ts # Type-safe central data file
├── package.json            # Script definitions and dependency trees
└── tsconfig.json           # TypeScript compilation configurations
```

---

## Local Development Setup

To test the application locally, run these command blocks:

1. **Install Packages**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```

3. **Open Browser**:
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify Output**:
   Build the optimized production app locally to verify everything is solid:
   ```bash
   npm run build
   ```

---

## Vercel Deployment

Deploy the project to **Vercel** serverless hosting:

1. Create a Vercel Account: [Vercel Sign Up](https://vercel.com/signup).
2. Connect your GitHub account.
3. Import the `portfolio-next` repository.
4. Set the Framework Preset to **Next.js**.
5. Click **Deploy**. Vercel will automatically configure routing, build optimization, CDN distribution, and SSL.
