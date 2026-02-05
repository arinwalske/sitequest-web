# SiteQuest Web

Modern Next.js landing page and deep link handler for the SiteQuest mobile app.

## Overview

SiteQuest Web enables users to view and share campsite reviews via web links. When a user clicks a share link on mobile, they're automatically redirected to the app. Desktop users see a beautiful web interface with all the campsite details.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Font**: Geist Sans

## Design System

The app uses a dark mode theme matching the mobile app:

| Element        | Color             |
| -------------- | ----------------- |
| Background     | `#121212`         |
| Surface/Cards  | `#1E1E1E`         |
| Primary Accent | `#4CAF50` (Green) |
| Text Main      | `#FFFFFF`         |
| Text Muted     | `#AAAAAA`         |
| Border         | `#333333`         |
| Rating - Great | `#2E7D32`         |
| Rating - Okay  | `#FBC02D`         |
| Rating - Bad   | `#C62828`         |

## Features

### 🏠 Landing Page (`/`)

- Modern, responsive homepage
- Feature highlights
- App store download buttons
- Fully branded with SiteQuest design

### 🔗 Share Page (`/share`)

- **Deep Linking**: Automatically attempts to open `sitequest://scout?id=<UUID>` on page load
- **Fallback UI**: Shows campsite details if deep link fails (desktop users)
- **Dynamic Metadata**: Generates Open Graph tags for rich social sharing
- **Database Integration**: Fetches data from Supabase `scouted_sites` table

#### Share Page displays:

- Campground name and site number
- Rating badge (color-coded)
- Starlink availability
- Cell signal strength
- Hammock-friendly status
- User notes
- "Open in App" button
- App store download links

## Setup

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Configure Supabase**:
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
     ```

3. **Database Schema**:

   Ensure your Supabase database has the `scouted_sites` table:

   ```sql
   CREATE TABLE scouted_sites (
     client_uuid UUID PRIMARY KEY,
     campground_name TEXT NOT NULL,
     site_number TEXT NOT NULL,
     rating TEXT CHECK (rating IN ('great', 'okay', 'bad')),
     notes TEXT,
     starlink BOOLEAN DEFAULT false,
     cell_signal TEXT,
     hammock BOOLEAN DEFAULT false
   );
   ```

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open** [http://localhost:3000](http://localhost:3000)

## Usage

### Share Links

Share links follow this format:

```
https://your-domain.com/share?id=<client_uuid>
```

Example:

```
https://sitequest.app/share?id=123e4567-e89b-12d3-a456-426614174000
```

### Testing Deep Links

On mobile devices, the share page will automatically attempt to open the app. On desktop, it shows the web UI.

## Project Structure

```
sitequest-web/
├── app/
│   ├── share/
│   │   ├── page.tsx           # Share page with deep linking
│   │   └── DeepLinkHandler.tsx # Client-side deep link trigger
│   ├── types/
│   │   └── database.ts        # TypeScript types for database
│   ├── globals.css            # Global styles & design system
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Landing page
│   └── supabase.ts            # Supabase client
├── public/                    # Static assets
└── package.json
```

## Development

- **Linting**: `npm run lint`
- **Build**: `npm run build`
- **Production**: `npm start`

## Deployment

Deploy to Vercel (recommended):

```bash
vercel
```

Or any platform that supports Next.js:

- Set environment variables for Supabase
- Build and deploy the Next.js app

## Notes

- The share page uses `dynamic = 'force-dynamic'` to ensure fresh data on every request
- Deep linking only works on devices with the SiteQuest app installed
- All colors are defined in `globals.css` as CSS variables for easy theming

## License

Private - SiteQuest Mobile App Project
