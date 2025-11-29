# TecNomic — Frontend

This folder contains the static frontend for the TecNomic site (HTML, CSS, JS, images).

Quick notes

- The project is static HTML/CSS/JS — no build step required unless you add a bundler.
- If you add large binaries (source PSDs, large PNGs), consider using Git LFS or keeping them out of the repo.

How to push local changes (example commands for PowerShell)

1. Open PowerShell at the `frontend` folder:

```powershell
cd "c:\Users\sudhansu sekhar\Documents\BR Tech Solution\New\frontend"
```

2. Initialize (if not already) and commit changes:

```powershell
git init            # only if repo not already initialized locally
git status
git add .
git commit -m "Update frontend: <brief description>"
```

3. Add remote (only if not already set) and push:

```powershell
# replace <USERNAME> and <REPO> with your repository details
git remote add origin https://github.com/sudhansu9062/tec-new.git
git branch -M main
git push -u origin main
```

4. If the remote has updates you don't have locally, instead pull first:

```powershell
git fetch origin
git pull --rebase origin main
# resolve conflicts if any, then
git push origin main
```

Vercel deployment

- If the repository is connected to Vercel, pushing to `main` will trigger a deployment automatically.
- If your static site is inside a subfolder (e.g. `frontend`), set Project Root in Vercel to `frontend`.

Questions?

- If you want, I can also create a feature branch patch and prepare a commit message for you to review.

````
# TecNomic Frontend (static)

This folder contains a static approximation of the homepage design from the provided screenshot.

Quick start (requires Node.js):

```powershell
cd "c:/Users/sudhansu sekhar/Desktop/New/frontend"
npx serve -s . -l 3000
# open http://localhost:3000
````

Notes:

- The assets are simple SVG placeholders. Send any brand assets (logo, fonts, images) and I will swap them in.
- If you prefer a different dev server, tell me and I can update `package.json`.
