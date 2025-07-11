This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.



# On The Ball Hockey – Web Project

This is a Next.js project bootstrapped with create-next-app.

## Getting Started
First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Overview
This site promotes and manages my ball hockey program for kids aged 6–12. Built using Next.js with the app router.

## Project Structure
- `app/`: Main app pages and layout
- `components/`: Reusable components like Navbar
- `public/`: Static files like images
- `styles/`: Global CSS

## Key Files
- `app/page.tsx`: Main homepage
- `app/layout.tsx`: Shared layout (includes Navbar/Footer)
- `components/Navbar.tsx`: Navigation bar
- `globals.css`: Base styles

## Current Features
- Homepage with navbar, welcome message, and slogan
- Responsive layout with consistent design
- Interactive buttons with hover animations
- Registration form with form validation
- About, Contact, and Program pages
- Consistent color scheme and typography (Quicksand font)

## Technology Stack

Framework: Next.js 14+ with App Router
Styling: Tailwind CSS + custom CSS
Typography: Quicksand font family
Backend: Vercel (migrated from AWS)
Database: Supabase (PostgreSQL with real-time capabilities)
Authentication: Supabase Auth
Deployment: Vercel Platform
Notifications: Twilio SMS API

## Development Notes

Port: Development server runs on port 3000 (may change if in use)
Deployment: Using npx vercel --prod for quick production deployments
Git Workflow: Regular commits tracked for documentation and README updates

## Recent Updates (AS OF 07/10/25)

- Integrated SMS weather alerts using Twilio
- Replaced email logic with SMS in send_weather_notification() function
- Added clean_phone_number() helper to sanitize phone numbers
- Created /api/getWeather route to fetch daily forecast from Supabase
- Fixed weather widget in footer to display live forecast
- Mapped weather descriptions to emojis via getWeatherEmoji() helper
- Added emojimapping.tsx to centralize emoji logic
- Improved mobile responsiveness across layout and footer
- Refactored hamburger menu button with JSX event handling and inline styling

## Recent Updates (AS OF 07/07/25)

- Fixed InteractiveButton component to properly accept type and disabled props
- Enhanced button styling with disabled state visual feedback
- Added proper form submission handling for registration page
- Fixed homepage routing issue (renamed from Homepage.tsx back to page.tsx)
- Migrated backend from AWS to Vercel for streamlined deployment
- Integrated Supabase for database management and authentication
- Ongoing registration functionality improvements and bug fixes

## UPCOMING FEATURES
- Add “notes” field for health concerns or equipment requests
- Add confirmation screen after registration
- ADMIN DASHBOARD?
<details>
<summary>📋 Development Timeline (Click to expand)</summary>

July 10, 2025

- Phone num formatting fix (multiple commits)

July 9, 2025

- Weather dscr text color change
- Use client moved to top weatherwidget.tsx
- Export/import getWeatherEmoji
- Weather widget emojis
- Mobile homepage width fix
- Weather widget format fix
- Reversed last update
- Supabase_anon_key --> supabase_key

July 8, 2025

- Weather fix maybe
- Footer layout fix
- Weather error fix
- Large Update: Added mobile-responsiveness to navbar.tsx and globals. Entire website is now mobile friendly with hamburger menu button.
- Weather widget text colour
- More formatting for footer
- Footer format updates. text colour/size
- Weather widget = precip chance --> rain prob
- Weatherwidget console log
- Getweather folder structure fix api/getweather/route.ts
- Changed email weather notifs to sms
- Created client component 'backtotopbutton.tsx' for event handler
- Added back to top button with smooth scrolling in footer
- Added live weather to footer and space for future chatbot
- Updated registration page fields. added parent name/number. added validation function to phonenumber


July 7, 2025

- weather service creation
- Update README.md
- Homepage named back to page.tsx
- Buttons update contact/reg page

July 6, 2025

- Buttons update on reg and contact page. Incomplete

July 4, 2025

- Next.config update
- Route.ts update again
- Added force-dynamic to route.ts
- "Test route in route.ts"

July 3, 2025

- "Console log on route.ts"
- "//output line in next.config.ts"
- Fix next.config for app router deployment
- Updated next.config.ts to fix rgstr button
- Home page action buttons: Linked them to reg & program pgs

June 27, 2025

- Pages folder delete
- Pages folder
- Registration fix cont
- Registration fix; final?
- Error fixes

June 26, 2025

Registration page API fix
Migration from AWS to Vercel

DEVELOPMENT TIMELINE

Apr 20
Set up and deployed AWS API gateway.

Set up Lambda functions for serverless logic

Configured DynamoDB for storage

cont
Must fix age range in registration

Must fix error registration (start fresh)

Start host on AWS task

Cont
Continue troubleshooting registration error

Continue next AWS step (hosting?)

Apr 19
Updated content on home, program and about

Updated structure to be consistent throughout each page

Pushed updates on git

Created temp URL on Vercel

Next
Must update structure on rest of pages to match

Update content on those pages

Include pictures where necessary

Look up unique new features to add

Apr 18
Added logo and cropped it to fit seamlessly

Adjusted navbar sizing and spacing

cont
Update content

Program page could add a photo

Search up random unique features to add

Apr 17
Edited rest of homepage content

Edited about content (almost done)

cont
Add real logo to navbar

Fix Navbar.tsx problem

Program page could add a photo

Search up random unique features to add

Keep editing content

Apr 17
Added background photo to homepage

Edited content on homepage

cont
Edit the rest of content on homepage

Edit program page content

Edit about page content

Search up unique features to add

Apr 15
Fixed colour scheme on program and homepage

Changed font of program page to Quicksand and tweaked content

Cont. Apr 14
Must fix colour scheme on home page first

Explore different layouts for home page

Implement Quicksand font

Check console error on webpage

Apr 13
Fixed 404 error

Updated program page

Quicksand font

What to cont. Apr 13
Must fix programs page 404 error (must be called "program")

Play around with different font styles

Do not add images yet

Last worked on Apr 13
Linked each page to function properly (except programs)

Edited the entire aesthetic with new colors and fonts on every page for consistency

Sidenote: learned a little more about reading code when editing footer font, sizing, and color

Apr 13 cont.
Created additional links: registration, contact

Updated about page mission statement

April 11, 2025
- Fixed double text issue
- Fixed white space at the top issue
- Task for that day:
- Make some parts of webpage orange
- Fix linking issue to navbar for about page
- Link the rest of the pages
</details>

Recent Focus Areas:

Fixed InteractiveButton component to properly accept type and disabled props
Enhanced button styling with disabled state visual feedback
Added proper form submission handling for registration page
Fixed homepage routing issue (renamed from Homepage.tsx back to page.tsx)
Migrated backend from AWS to Vercel for streamlined deployment
Ongoing registration functionality improvements and bug fixes

Development Notes

Port: Development server runs on port 3000 (may change if in use)
Deployment: Using npx vercel --prod for quick production deployments
Git Workflow: Regular commits tracked for documentation and README updates
