# Project Management Guide

## Overview

The portfolio now uses a centralized data-driven approach for managing projects. All project data is stored in `/src/data/projects.ts`, making it easy to add, edit, or remove projects without touching the component code.

## Adding a New Project

### 1. Prepare Your Images

First, add your project images to the figma assets or your public/assets folder. You'll need:
- 3 images for the project card (shown on the home page)
- 3 images for the detail view (shown in the modal)

### 2. Import Images in projects.ts

At the top of `/src/data/projects.ts`, add your image imports:

```typescript
import myProjectImg1 from "figma:asset/YOUR_ASSET_HASH.png";
import myProjectImg2 from "figma:asset/YOUR_ASSET_HASH.png";
import myProjectImg3 from "figma:asset/YOUR_ASSET_HASH.png";
```

### 3. Add Project Data

Add a new project object to the `projects` array in `/src/data/projects.ts`:

```typescript
{
  id: "unique-project-id",
  title: "Project Title",
  year: "2024-2025",
  categories: ["Category 1", "Category 2", "Category 3"],
  longDescription: "A detailed description of the project that will appear in the modal. This should explain the project's purpose, your role, the challenges you faced, and the solutions you implemented.",
  images: {
    card: [
      {
        src: myProjectImg1,
        alt: "Project Screenshot 1",
        objectFit: "cover",
        objectPosition: "center"
      },
      {
        src: myProjectImg2,
        alt: "Project Screenshot 2",
        objectFit: "cover",
        objectPosition: "center top"
      },
      {
        src: myProjectImg3,
        alt: "Project Screenshot 3",
        objectFit: "cover",
        objectPosition: "center"
      }
    ],
    detail: [
      {
        src: myProjectImg1,
        alt: "Detailed View 1",
        objectFit: "cover",
        objectPosition: "center"
      },
      {
        src: myProjectImg2,
        alt: "Detailed View 2",
        objectFit: "cover",
        objectPosition: "center"
      },
      {
        src: myProjectImg3,
        alt: "Detailed View 3",
        objectFit: "cover",
        objectPosition: "center"
      }
    ]
  }
}
```

## Project Data Structure

### Required Fields

- **id** (string): A unique identifier for the project (used for routing and layoutId)
- **title** (string): The project name displayed in the card and modal
- **year** (string): The timeframe of the project (e.g., "2023-2025")
- **categories** (string[]): Array of category/skill tags
- **longDescription** (string): Full project description shown in the modal
- **images** (object): Contains card and detail image configurations

### Image Configuration

Each image requires:
- **src**: The imported image reference
- **alt**: Accessibility text describing the image
- **objectFit** (optional): How the image should fit in its container
  - `"cover"` (default) - Image covers the entire container, may be cropped
  - `"contain"` - Entire image is visible, may have empty space
  - `"fill"` - Stretches image to fill container
  - `"none"` - Original size
  - `"scale-down"` - Scales down if larger than container
- **objectPosition** (optional): Where to position the image within its container
  - Examples: `"center"`, `"top"`, `"bottom"`, `"left"`, `"right"`, `"center top"`, `"50% 25%"`
  - Default is `"center"`

### Image Positioning Tips

Use standard CSS `object-fit` and `object-position` for image control:
- **objectFit: "cover"** - Best for most cases, ensures images fill their containers
- **objectPosition** - Use to focus on specific parts of the image
  - `"center"` - Centers the image (default)
  - `"top"` - Shows the top portion of the image
  - `"bottom"` - Shows the bottom portion
  - `"left"` - Shows the left portion
  - `"right"` - Shows the right portion
  - `"center top"` - Centers horizontally, aligns to top
  - Percentage values like `"30% 70%"` for precise control

## Removing a Project

Simply delete or comment out the project object from the `projects` array in `/src/data/projects.ts`.

## Reordering Projects

Projects are displayed in the order they appear in the `projects` array. Simply reorder the array elements to change the display order.

## Current Projects

The portfolio currently includes:
1. **CredCore** - Fintech platform
2. **Urban Mobility** - Transportation platform (placeholder images)
3. **HealthSync** - Digital health dashboard (placeholder images)
4. **CryptoVault** - DeFi wallet application (placeholder images)

## Notes

- The last category in the `categories` array will be styled differently (lighter text)
- Project descriptions support basic HTML formatting (use `<br />` for line breaks)
- Images use the `figma:asset/` prefix for Figma-imported assets
- The same images can be used for both card and detail views with different `objectFit` and `objectPosition` settings
- Card images are displayed in a stacked layout with fixed dimensions (178px height, 285px width)
- Detail images use a responsive aspect-video ratio (16:9)
- All images use standard CSS properties - no complex calculations needed!
