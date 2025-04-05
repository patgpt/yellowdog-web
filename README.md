# Yellowdog App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-FBF0DF?logo=bun)](https://bun.sh/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-green?logo=daisyui)](https://daisyui.com/)
[![Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?logo=vercel)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL) // Replace YOUR_REPO_URL

Brief project description goes here. Explain what the project does.

## Features

- Feature 1
- Feature 2
- Built with Next.js App Router
- Styled with Tailwind CSS v4 and DaisyUI v5
- Written in TypeScript
- Uses Bun as the runtime/package manager
- Ready for Vercel deployment

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/docs/installation) (v1.x or later recommended)
- Node.js (usually comes with Bun)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
    cd YOUR_REPO_NAME
    ```
2.  Install dependencies:
    ```bash
    bun install
    ```
3.  Set up environment variables:
    - Copy `.env.example` (if you create one) to `.env`.
    - Fill in the required environment variables (e.g., Contentful keys).
    ```bash
    cp .env.example .env
    ```
4.  Run the development server:
    ```bash
    bun run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

(You can optionally add the structure outlined in your custom instructions here)

```
src/
├── app/             # Next.js App Router pages and layouts
├── components/      # Atomic Design components
├── styles/          # Global styles, fonts
└── utils/           # Utility functions
public/              # Static assets
.env                 # Environment variables (ignored by git)
.gitignore
bun.lock
codegen.ts           # GraphQL codegen config
eslint.config.mjs    # ESLint config
next.config.ts       # Next.js config
package.json
postcss.config.mjs   # PostCSS config (for Tailwind)
README.md
schema.graphql       # GraphQL schema
tsconfig.json        # TypeScript config
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). Connect your GitHub repository to Vercel for automatic deployments.

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.
