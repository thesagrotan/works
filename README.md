
  # Responsive Portfolio Website

  This is a code bundle for Responsive Portfolio Website. The original project is available at https://www.figma.com/design/nHzqeATMUhXAOfJJZYaRlu/Responsive-Portfolio-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  
  ## Baselines (DOM + build sizes)
  - DOM baseline tests live under `src/__tests__/home.snap.test.tsx` and `src/__tests__/modal.snap.test.tsx`.
  - Build size baseline is recorded at `src/__tests__/baselines/build.json` (entry JS/CSS). Update intentionally with:
    - `npm run build`
    - Adjust `build.json` to reflect new hashed filenames and byte sizes if a planned change occurs.
  
  Note: Snapshot tests avoid animation timing and check only semantic content/attributes for stability.
  