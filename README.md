# Suman Kumar Goit — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS, and Lucide React. The site includes an introduction, about section, skills, featured project, and education. Contact actions open your email application directly.

## Requirements
- Node.js 20 or newer
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Replace your profile photo
Your current uploaded photograph is included at `public/images/suman.jpg`. To replace it, put your new photo at the same path and filename. If you prefer a different format, update the image path in `src/components/Hero.jsx`. The photo is displayed with `object-fit: cover`; adjust `object-position` in `src/styles.css` if you want to change the crop. No component changes are required when keeping the same path.

## Publish with GitHub and Vercel
1. Create an empty GitHub repository.
2. Extract this ZIP, open a terminal in the project folder, and run:
   ```bash
   git init
   git add .
   git commit -m "Add personal portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
   git push -u origin main
   ```
   Replace the remote URL with your actual repository URL.
3. Sign in to https://vercel.com/ and import the GitHub repository.
4. Vercel should detect Vite. Use `npm run build` as the build command and `dist` as the output directory.
5. Add `VITE_FORMSPREE_ENDPOINT` under Vercel Project Settings → Environment Variables if you configure Formspree.
6. Deploy. Subsequent pushes to the connected branch trigger deployments automatically.

## Updating the portfolio
Edit the profile and project content in `src/data.js`. Main sections are components under `src/components/`; styles are in `src/styles.css`. Commit and push changes to GitHub to deploy updates through Vercel.

## Notes
- The project does not include a contact form, backend, or database. Email links open the visitor’s default email application.
- The source-code repository for Nepali Diet Planner was not supplied, so the portfolio links to the live demo and your GitHub profile without inventing a repository URL.
- A GitHub Actions workflow builds the project on pushes and pull requests.
