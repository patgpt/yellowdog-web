# Yellowdog App

<div align="center">
    <img src="./public/logo.png" alt="Yellowdog Logo" width="200" />
</div>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15.x-black?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.x-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-FBF0DF?logo=bun)](https://bun.sh/)
[![DaisyUI](https://img.shields.io/badge/DaisyUI-5-green?logo=daisyui)](https://daisyui.com/)
[![Contentful](https://img.shields.io/badge/Contentful-CMS-2478CC?logo=contentful)](https://www.contentful.com/)
[![GraphQL](https://img.shields.io/badge/GraphQL-FF0070?logo=graphql)](https://graphql.org/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier)](https://prettier.io/)

## Depoy this project on Vercel:

[![Vercel](https://img.shields.io/badge/Deploy%20with-Vercel-black?logo=vercel)](https://vercel.com/)

A web application built with Next.js (App Router), TypeScript, Tailwind CSS v4, DaisyUI v5, and Contentful CMS. Deployed on Vercel.

## Features

- Built with Next.js 15.x (App Router)
- Server Components by default
- Styled with Tailwind CSS v4 and DaisyUI v5
- Written in strict TypeScript
- Uses Contentful for content management via GraphQL
- Code generation for Contentful SDK using GraphQL Code Generator
- Bun runtime and package management
- Linting with ESLint (Flat Config)
- Code formatting with Prettier
- Optimized for Vercel deployment

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/docs/installation) (v1.x or later recommended)
- Node.js (usually comes with Bun)
- Contentful Space ID, Delivery API Key, and Preview API Key

### Installation

1.  Clone the repository:
    ```bash
    git clone <YOUR_REPOSITORY_URL> # Replace with your repo URL
    cd yellowdog
    ```
2.  Install dependencies:
    ```bash
    bun install
    ```
3.  Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your Contentful credentials and any other required variables:
    ```env
    CONTENTFUL_SPACE_ID=your_space_id
    CONTENTFUL_ACCESS_TOKEN=your_delivery_api_key
    CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_api_key
    # Add other variables as needed
    ```
4.  Generate the Contentful SDK types:
    ```bash
    bun run codegen
    ```
5.  Run the development server:
    ```bash
    bun run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/             # Next.js App Router pages and layouts
├── components/      # Atomic Design components (atoms, molecules, etc.)
├── graphql/
│   └── __generated__/sdk.ts # Generated Contentful SDK
├── styles/          # Global styles, fonts (globals.css)
└── utils/           # Utility functions (e.g., cn.ts)
public/              # Static assets
.env                 # Environment variables (ignored by git)
.gitignore
.github/             # GitHub templates (issues)
CONTRIBUTING.md      # Contribution guidelines
LICENSE              # MIT License
bun.lockb
codegen.ts           # GraphQL codegen config
eslint.config.mjs    # ESLint flat config
introspection.json   # Contentful schema introspection result
next.config.ts       # Next.js config
package.json
postcss.config.mjs   # PostCSS config (for Tailwind/DaisyUI)
README.md            # This file
schema.graphql       # Contentful GraphQL schema
tsconfig.json        # TypeScript config
```

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/). Connect your GitHub repository to Vercel for automatic deployments. Ensure your Contentful environment variables are configured in the Vercel project settings.

## Contributing

Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.
