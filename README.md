# Shalashian — Tax & Business Consultant

A premium, mobile-first personal/business portfolio for **Shalashian**, Tax & Business Consultant (Sri Lanka) and the practice behind **S&C Business Consultants (Pvt) Ltd** — established 2018.

Built with **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion** and **Lucide** icons.

## Run it

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Sections

- Hero — brand card using the official S&C artwork, availability badge, socials
- Experience strip — KPMG Sri Lanka, SCBC, Kreston Sri Lanka, Cathay Academy, CA Sri Lanka, AAT
- About — practice card, quick facts, current roles
- Stats — years in practice, lecturing, firms, professional bodies
- Services — tax advisory, audit & assurance, business advisory, teaching & mentoring
- The firm — S&C Business Consultants, its three pillars and Facebook link
- Journey — 2011 to today (school, Kreston, S&C, SCBC, Cathay Academy, KPMG)
- Credentials — CA Sri Lanka, AAT Sri Lanka, University of Jaffna, St. Joseph's College
- Contact — Facebook message CTA, location and availability

## Edit the content

All copy lives in **`src/data/profile.js`** — name, role, intro, about paragraphs, stats, services, journey, credentials, company details and social links.

To add an email or phone later, fill `email` / `phone` in that file and add a row in `src/components/Contact.jsx`.

## Images

```
public/images/shalashian.jpg   official S&C brand artwork (hero card)
public/images/sc-mark.jpg       S&C logo mark (about + firm sections)
```

## Structure

```
src/
  data/profile.js        all site content
  components/
    Navbar.jsx           top bar + mobile bottom dock
    Hero.jsx             3D tilt brand card
    Ticker.jsx           firm & credential strip
    About.jsx            practice card + intro
    Stats.jsx            animated counters
    Expertise.jsx        services
    Firm.jsx             S&C feature panel
    Journey.jsx          timeline
    Credentials.jsx      qualifications & education
    Contact.jsx          contact panel
    Footer.jsx
  index.css              white / electric-blue design system
```

## Notes

- Facebook is the only public contact link supplied so far. No email/phone is shown until real details are added.
- The mobile bottom dock and hero card are designed mobile-first (390px) and verified at desktop 1440px.
