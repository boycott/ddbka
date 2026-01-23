# Dover & District Beekeepers' Association Website

The official website for the Dover & District Beekeepers' Association (DDBKA), built with Astro and Tailwind CSS.

## 🐝 About

This website serves as the primary online presence for DDBKA, providing information about:
- Beekeeping in the Dover and District area
- Association membership and benefits
- Monthly meetings and events
- News and updates
- Asian Hornet awareness and reporting
- Contact information and resources

## 🚀 Tech Stack

- **[Astro](https://astro.build)** - Modern static site generator
- **[Tailwind CSS v4](https://tailwindcss.com)** - Utility-first CSS framework
- **[Bun](https://bun.sh)** - Fast JavaScript runtime and package manager
- **Content Collections** - Type-safe content management for news and meetings

## 📁 Project Structure

```text
/
├── public/              # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/         # Images and media files (processed by Astro)
│   ├── components/     # Reusable Astro components
│   ├── content/        # Content collections (news, meetings)
│   │   ├── config.ts   # Content collection schemas
│   │   ├── news/       # News articles (markdown)
│   │   └── meetings/   # Meeting information (markdown)
│   ├── layouts/        # Page layouts
│   │   └── Main.astro  # Main site layout with header/footer
│   ├── pages/          # File-based routing
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # About page
│   │   ├── committee.astro       # Committee information
│   │   ├── contact.astro         # Contact page
│   │   ├── hornets.astro         # Asian Hornet information
│   │   ├── membership.astro      # Membership information
│   │   ├── news/                 # News section
│   │   │   ├── index.astro       # News listing
│   │   │   └── [...slug].astro   # Individual news articles
│   │   └── meetings/             # Meetings section
│   │       ├── index.astro       # Meetings listing
│   │       └── [...slug].astro   # Individual meeting pages
│   └── styles/         # Global styles
└── astro.config.mjs    # Astro configuration
```

## 🧞 Commands

All commands are run from the root of the project using Bun:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `bun install`          | Install dependencies                             |
| `bun run dev`          | Start local dev server at `localhost:4321`       |
| `bun run build`        | Build production site to `./dist/`               |
| `bun run preview`      | Preview production build locally                 |
| `bun run astro ...`    | Run Astro CLI commands                           |

## 🛠️ Development

### Getting Started

1. **Install dependencies:**
   ```sh
   bun install
   ```

2. **Start the development server:**
   ```sh
   bun run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:4321`

### Adding Content

#### News Articles

Create a new markdown file in `src/content/news/`:

```markdown
---
title: "Your Article Title"
pubDate: 2025-11-29
description: "A brief description of the article"
author: "Author Name"
tags: ["tag1", "tag2"]
---

Your article content here in markdown format.
```

#### Meetings

Create a new markdown file in `src/content/meetings/`:

```markdown
---
title: "Meeting Title"
date: 2025-12-15
description: "Meeting description"
location: "Alkham Village Hall"
time: "2:00 PM"
---

Meeting details and agenda in markdown format.
```

### Content Collections

The site uses Astro's Content Collections for type-safe content management. Schemas are defined in `src/content/config.ts`:

- **News Collection**: Articles with title, publication date, description, author, and optional tags
- **Meetings Collection**: Meeting information with title, date, description, location, and time

### Styling

The site uses Tailwind CSS v4 with a custom design system:
- **Primary colours**: Amber tones for beekeeping theme
- **Typography**: Clean, readable fonts with proper hierarchy
- **Components**: Reusable styled components for consistency
- **Responsive**: Mobile-first design approach

## 🌐 Deployment

The site is configured for deployment to `https://www.ddbka.co.uk`.

### Building for Production

```sh
bun run build
```

This generates a static site in the `./dist/` directory ready for deployment to any static hosting service (Cloudflare Pages, Netlify, Vercel, etc.).

### Preview Production Build

```sh
bun run preview
```

## 📝 Key Features

### Dynamic Homepage
The homepage automatically displays:
- Latest news article
- Most recent past meeting
- Next upcoming meeting

These are pulled from the content collections and update automatically as new content is added.

### Content Management
All content is managed through markdown files in the `src/content/` directory, making it easy to add, edit, and version control content.

### SEO Optimized
- Proper meta tags and titles
- Semantic HTML structure
- Fast page loads with static generation
- Optimized images using Astro's image optimization

### Accessibility
- Semantic HTML elements
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support

## 🤝 Contributing

When adding new content or features:

1. Create content in the appropriate collection directory
2. Follow the existing schema and formatting
3. Test locally with `bun run dev`
4. Build and preview with `bun run build && bun run preview`
5. Deploy to production

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)

## 📧 Contact

For questions about the website, contact the DDBKA Committee at [enquiries@ddbka.co.uk](mailto:enquiries@ddbka.co.uk)
