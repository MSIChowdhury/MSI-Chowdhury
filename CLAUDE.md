# CLAUDE.md

Academic homepage of MD Sameer Iqbal Chowdhury (Ph.D. student, CS, Texas State University).
Live at https://msichowdhury.github.io/MSI-Chowdhury/ — GitHub Pages builds it with Jekyll on every push to `main`.

## Rule: use the AcadHomepage theme

The site MUST stay on the [AcadHomepage](https://github.com/RayeRen/acad-homepage.github.io) Jekyll theme as set up here.
Do not switch templates, rebuild it as plain HTML, or restyle it into a different look unless the user explicitly asks.
New content goes into the theme's existing patterns, not new layouts or CSS.

## Where things live

- `_pages/about.md` — all page content (single page). Sections are `# <emoji> Title` headings.
- `_config.yml` — sidebar: name, bio, avatar, email, GitHub, LinkedIn, description.
- `_data/navigation.yml` — top menu; one entry per section.
- `images/` — photos; `Sameer_s_CV.pdf` — CV linked from the page.
- `_layouts/`, `_includes/`, `_sass/`, `assets/` — theme files; avoid editing.

## Conventions

- Projects use the theme's `paper-box` card (image + badge left, text right). Plain lists for news, publications, education, honors.
- Bold the owner's name in every author list. Keep paper status honest ("In press", "Under review").
- Dates in italics at the start of list items, e.g. `*2025.08*`.
- Never crop images (no `object-fit: cover` / forced aspect ratios); show them at natural shape.
- Nav URLs must be relative (`#-news`, not `/#-news`): the site is served under `/MSI-Chowdhury/`. Heading `# 🔥 News` gets the id `-news`.
- Google Scholar stats crawler is removed (no Scholar profile yet). Re-add it only when the user gives a Scholar ID.
- Keep the theme's MIT `LICENSE` file.

## Verify before pushing

Build the way GitHub Pages does, then screenshot desktop (1400px) and phone (390px) widths:

```bash
bundle exec jekyll build --safe --baseurl /MSI-Chowdhury
```

(Without local Ruby: run Jekyll in the `ruby:3.3` Docker image with `gem install github-pages` and `JEKYLL_NO_BUNDLER_REQUIRE=true`, since `Gemfile.lock` pins old gems.)

Check that every nav anchor matches a heading id in the built `index.html`. Commit or push only when the user asks; after pushing, confirm the live site updated.
