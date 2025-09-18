# Course Catalog

Live site

- https://course-catalog-one.vercel.app/

Design (Figma)

- https://www.figma.com/design/xNoVSQ1GIphp5XIma7QcEB/Course-Catalog?node-id=10-2&t=8PT8NABPVSihI9GE-1

## Prerequisites

- Node.js 18.18+ (or 20+ recommended)
- npm (or your preferred package manager)

## Install and run locally (Windows PowerShell)

```powershell
# clone your fork or repo, then from the repo root
cd .\front-end

# install dependencies
npm install

# start the dev server
npm run dev

# open in your browser (default)
# http://localhost:3000/course-catalog
```

## Build and run production

```powershell
cd .\front-end
npm run build
npm start
# then visit http://localhost:3000/course-catalog
```

## Project structure

```
front-end/
	src/
		app/
			course-catalog/page.tsx        # Catalog page (search + level filters)
			layout.tsx                     # Fonts + global styles
		components/
			CourseCard.tsx                 # Course card UI
			Container.tsx                  # Max-width layout wrapper
			SectionHeading.tsx             # Page/section heading
		styles/globals.css               # Tokens + base styles
		types/course.ts                  # Shared Course/CourseLevel types
```

## Notes

- If the editor flags Tailwind at-rules in CSS, ensure the Tailwind CSS VS Code extension is enabled.
- Environment variables are not required for local development in this project.
