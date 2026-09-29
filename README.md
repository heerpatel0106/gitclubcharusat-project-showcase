# Git Club Project Showcase

A centralized, responsive project showcase website for the Git Club community at CHARUSAT. The platform enables students, faculty, and recruiters to discover what the community builds, filter projects by domain, search technologies, understand the problem and solution behind each build, meet the project teams, and visit GitHub repositories and live demos.

## Features

* **Project showcase**: Central portfolio of community projects spanning Web Development, AI/ML, App Development, IoT, and Design.
* **Search**: Real-time keyword search across project titles, descriptions, problem statements, technologies (e.g. React, Python), and team members.
* **Category filtering**: Instant domain filters (All, Web Development, AI / ML, App Development, IoT, Design) with dynamic counters and URL query synchronization.
* **Sorting**: Flexible sorting options by Featured First, Newest First, and Alphabetical (A–Z).
* **Featured projects**: Dedicated spotlight layout for flagship builds alongside secondary featured cards.
* **Project detail pages**: In-depth editorial case study for every project featuring the Problem, Solution, 4-step How It Works breakdown, Tech Stack badges, Contributor cards, and 404 handling.
* **GitHub/live demo links**: Direct links to open-source repositories and hosted web applications.
* **Responsive design**: Fully responsive across mobile (390px), tablet (768px/1024px), and desktop (1280px/1440px) with mobile hamburger drawer navigation.

## Tech Stack

* React
* Vite
* JavaScript
* CSS
* React Router
* Lucide React

## Run Locally

Ensure Node.js (v18+) is installed on your system.

```bash
# 1. Clone or navigate to the project directory
cd gitclub-showcase

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open `http://localhost:5173` in your browser.

## Build

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```
