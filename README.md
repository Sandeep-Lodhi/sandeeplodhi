# sandeeplodhi

Personal portfolio of Sandeep Lodhi, Backend Engineer (Node.js, TypeScript, AI engineering).

Live site: https://sandeeplodhi-portfolio.netlify.app/

## Branches

- `update-portfolio`: the source code. Make changes here.
- `main`: the built site, written by `npm run deploy`. Do not edit by hand.
- `source`: older source, kept for history.

## Working on it

```bash
npm install
npm start        # dev server at http://localhost:8000
npm run build    # production build into public/
npm run deploy   # build and publish to the main branch
```

## Where things live

- `src/config.js`: name, links, stats, skills and activities.
- `content/hero`, `content/about`, `content/contact`: section text.
- `content/jobs`: one folder per company.
- `content/featured`: featured projects with cover images. The `date` field is the sort key; higher numbers come first.
- `content/projects`: the "Other Projects" grid. `showInProjects: false` keeps a project in the archive page only.
- `static/resume.pdf`: the resume the Resume buttons open.

Design based on [Brittany Chiang's v4](https://github.com/bchiang7/v4).
