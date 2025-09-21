# Private Swimming Lessons — React + Vite

This project powers the marketing site for Christin Mitchell&apos;s private swimming lessons. It runs on Vite with React 19 and client-side routing provided by `react-router-dom`.

## Local development

```bash
npm install
npm run dev
```

The development server automatically generates optimized WebP variants for every JPG/PNG located in `public/images` before it starts.

## Building for production

```bash
npm run build
```

The `prebuild` step recreates fresh WebP assets in `public/generated/` using [Sharp](https://sharp.pixelplumbing.com/). These generated files are ignored by Git and copied into the Vite output during the build so that `<picture>` elements can reference them without tracking binary blobs in source control.

You can manually refresh the optimized media at any time with:

```bash
npm run images:generate
```
