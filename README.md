# TEDxUIUC Website

Official website for TEDx at the University of Illinois at Urbana-Champaign.

**Live Site:** [tedxatuiuc.com](https://www.tedxatuiuc.com/)

## About

This is the official digital presence for TEDxUIUC, showcasing our events, speakers, and mission to spread ideas worth sharing on the UIUC campus. The website serves as the primary information hub for students, speakers, and community members interested in TEDx events.

## Features

- **Multi-page website** - Event details, speakers, team info, ticketing, and join pages
- **TypeScript implementation** - Type-safe development throughout
- **Tailwind CSS styling** - Modern utility-first CSS framework
- **Sticky navigation** - Persistent nav bar with dropdown menu

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom fonts
- **Deployment:** Vercel
- **Fonts:** Custom typefaces (MIXONE, Seawave-Alt, Roboto Light)

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/michelleshin34/tedxatuiuc.git
cd tedxatuiuc
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

The page auto-updates as you edit files in the `app` directory.

### Project Structure

```
tedxatuiuc/
├── src/app/
│   ├── details/       # Event details page
│   ├── join/          # Join TEDx page
│   ├── speakers/      # Speaker profiles
│   ├── team/          # Team information
│   ├── tickets/       # Ticketing page
│   ├── who/           # About page
│   └── page.tsx       # Homepage
├── public/            # Static assets (images, icons)
└── globals.css        # Global styles
```

## Deployment

The site is deployed on Vercel with automatic deployments from the main branch.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/michelleshin34/tedxatuiuc)

## Contributing

This is an active project for TEDxUIUC. For questions or suggestions, please open an issue or contact the development team.

## License

© 2024 TEDxUIUC. All rights reserved.
