# Qandeel Consulting Site

Arabic (RTL) website for **Qandeel Center**, a business and legal consulting and government-services provider in the UAE. Built with Next.js, with a MongoDB-backed admin dashboard for managing articles and posts.

**Live demo:** https://qandeel-consulting-site-moq8.vercel.app/

## Features

- Responsive, mobile-first Arabic interface with right-to-left layout
- SEO: metadata, `sitemap.xml`, semantic markup
- Service pages: government services, legal consulting, licenses, media and advertising
- Articles and FAQ sections for common legal and government-procedure questions
- Contact form that sends requests by email (Resend) and stores them in MongoDB
- Admin area with login (JWT + bcrypt) to manage posts and articles
- Image uploads through Cloudinary
- Visit analytics with charts (Recharts)

## Tech stack

- **Framework:** Next.js (App Router), React
- **Styling and motion:** Tailwind CSS, Framer Motion, Swiper, animate.css
- **Database:** MongoDB with Mongoose
- **Auth:** jose (JWT), bcryptjs
- **Services:** Cloudinary (images), Resend (email)
- **Hosting:** Vercel

## Project structure

```
app/(ar)/       Public Arabic pages (home, services, articles, FAQ, contact, ...)
app/(ar)/admin  Admin dashboard and login
app/api/        Route handlers (auth, contact, posts, analytics, upload-image, ...)
models/         Mongoose models (AdminUser, Article, ContactRequest, Post, Visit)
lib/            MongoDB connection and auth helpers
```

## Getting started

```bash
git clone https://github.com/ahmedketaa/qandeel-consulting-site.git
cd qandeel-consulting-site
npm install
```

Create a `.env.local` file:

```env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
RESEND_API_KEY=
CONTACT_RECEIVER_EMAIL=
```

Then run the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Run the production build |
| `npm run lint` | Run ESLint |

## Author

Built by [Ahmed Mostafa](https://github.com/ahmedketaa), Full Stack Developer.
