@AGENTS.md

# JMN Journal of Medical Sciences — Developer Context & Commands

## Overview
Official open-access, biannual medical journal website for **JMN Journal of Medical Sciences** (JMN Education and Research Foundation / JMN Medical College and Hospital). Built to strictly comply with ISSN India criteria.

## Core Commands
- `npm run dev`: Launch local development server (`http://localhost:3000`)
- `npm run build`: Run TypeScript checks and static site generation (`output: 'export'`)
- `run.bat`: Windows shortcut to verify Node.js, install dependencies, launch dev server, and open browser

## Architecture & Conventions
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS with custom editorial tokens (Maroon `#5B1E1E`, Cream `#E8D5B5`, Gold `#B8860B`, Off-white `#FDFBF8`)
- **Type Checking**: Full TypeScript strict checking. Run `npx tsc --noEmit` to verify types.
- **Issues & Articles**:
  - Issue metadata registered in `lib/issues.ts`.
  - Issue contents stored in `content/issues/*.json`.
  - Articles are rendered via static SSG routes at `app/article/[slug]/page.tsx` emitting Highwire Press metadata tags.
  - PDFs are stored in `public/articles/<volume-issue>/`.

## ISSN India Strict Rules
1. Never hardcode compliance data (particulars, board, contact) as images — plain text only.
2. Subject must read `"Medical Sciences"` everywhere.
3. Strict volume numbering: 1 volume per calendar year (`2025 = Volume 1`, `2026 = Volume 2`).
4. Full, unabbreviated article titles everywhere.
5. All external links (especially Editorial Board institutional profiles) must resolve cleanly.
