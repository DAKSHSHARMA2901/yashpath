yashpath
<<<<<<< HEAD
=======
Yashpath Diagnostic Center – Web App

A modern, responsive React + TypeScript single-page application for a diagnostic center. It showcases services, a searchable test catalog, appointment booking, a demo patient portal, and a contact page. Built with Vite and Tailwind CSS.

## Features
- **Marketing pages**: `Home`, `About`, `Contact` with rich content and CTAs
- **Test catalog**: Search, filter by category, price range, and availability
- **Appointment booking**: Validated form with preselected test from catalog and demo confirmation flow
- **Patient portal (demo)**: Mock login with tabs for Appointments, Test Results, and Profile
- **Responsive UI**: Tailwind-based design, Lucide icons

## Tech Stack
- **Frontend**: React 18, TypeScript, React Router
- **Build**: Vite
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer
- **Icons**: lucide-react

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
4. Preview production build:
   ```bash
   npm run preview
   ```

## Project Structure
```
src/
  App.tsx                # Router and layout (Header, Footer, Routes)
  main.tsx               # App bootstrap
  index.css              # Tailwind entry
  components/
    Header.tsx
    Footer.tsx
  pages/
    Home.tsx             # Hero, offers, features, services, CTA
    TestCatalog.tsx      # Search, category, price, availability filters
    BookAppointment.tsx  # Validated booking form + confirmation
    PatientPortal.tsx    # Demo login; appointments, results, profile tabs
    About.tsx            # Mission, vision, values, team, achievements
    Contact.tsx          # Contact info, validated form, FAQ, map placeholder
  types/
    index.ts             # App type definitions
  utils/
    mockData.ts          # Diagnostic tests, categories, time slots, mock patient/results
```

## Key Pages and Flows
- **Home**: Highlights services, offers, stats; CTAs to Book Appointment and View Tests.
- **Test Catalog**: Client-side filtering from `mockData`. Book button preselects a test via `?testId=`.
- **Book Appointment**: Validates name, email, phone, test, date, time; simulates API; shows confirmation summary.
- **Patient Portal**: Demo login (any email/password). Tabs:
  - Appointments: status badges and actions (reschedule/cancel UI placeholders)
  - Test Results: list with status; view/download UI for ready results
  - Profile: mock patient data view with buttons (UI only)
- **Contact**: Validated contact form (simulated submit), address/phone/email, hours, FAQ, and map placeholder.

## Configuration
- Tailwind is preconfigured via `tailwind.config.js` and `postcss.config.js`.
- Routing uses `BrowserRouter`; update base path in `vite.config.ts` if deploying under a subpath.

## Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Build production bundle
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Data and Types
- Mock data lives in `src/utils/mockData.ts` and types in `src/types`.
- Replace mocks with real API calls when integrating a backend.

## Deployment
- Build the app (`npm run build`).
- Serve `dist/` via any static host (Netlify, Vercel, GitHub Pages, Nginx, S3+CloudFront).

## Roadmap (Future Enhancements)
- **Authentication & Accounts**: Real sign-up/login, password reset, OTP, roles (patient/admin/phlebotomist).
- **Backend Integration**: Persist appointments, tests, results; integrate databases and APIs.
- **Online Payments**: Razorpay/Stripe for paid tests and health packages.
- **Result Delivery**: Secure PDF viewer/download, result notifications (email/SMS/WhatsApp), watermarking.
- **Home Sample Collection**: Slot selection, address capture, phlebotomist assignment and routing.
- **Admin Dashboard**: Manage tests, pricing, availability; appointment calendar; reports and analytics.
- **Inventory & QC**: Reagents inventory tracking, machine QC logs, alerts.
- **Report Engine**: Template-driven reports, reference ranges by age/sex, critical alerts.
- **Internationalization**: Multi-language UI (e.g., English/Hindi) and locale-aware formats.
- **Accessibility & Performance**: a11y audits, keyboard navigation, Lighthouse optimizations, code-splitting.
- **Notifications**: Email/SMS integration for booking confirmations and result readiness.
- **CMS Content**: Editable offers, banners, FAQs, and static pages.
- **SEO & Analytics**: Meta tags, sitemap, schema.org, page analytics.
- **Security & Compliance**: HIPAA/GDPR-aligned handling, audit logs, consents.

## Contributing
1. Fork and clone the repo.
2. Create a feature branch.
3. Commit with clear messages and open a PR.

## License
This project is provided as-is for demonstration and can be adapted under your preferred license.
>>>>>>> 7252e9e (Update Header component: show only logo, remove Y)
