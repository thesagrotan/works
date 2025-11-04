
  # works

  This is the code for "works", a responsive portfolio site. The original Figma project is available at https://www.figma.com/design/nHzqeATMUhXAOfJJZYaRlu/Responsive-Portfolio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deployment (GitHub Pages)
  - Live site: https://thesagrotan.github.io/works/
  - Deploys automatically on push to `main` via `.github/workflows/deploy.yml`.
  
  ## Baselines (DOM + build sizes)
  - DOM baseline tests live under `src/__tests__/home.snap.test.tsx` and `src/__tests__/modal.snap.test.tsx`.
  - Build size baseline is recorded at `src/__tests__/baselines/build.json` (entry JS/CSS). Update intentionally with:
    - `npm run build`
    - Adjust `build.json` to reflect new hashed filenames and byte sizes if a planned change occurs.
  
  Note: Snapshot tests avoid animation timing and check only semantic content/attributes for stability.
  