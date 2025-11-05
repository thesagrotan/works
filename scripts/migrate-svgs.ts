#!/usr/bin/env tsx
/**
 * SVG Migration Script
 * 
 * This script converts the old SVG path objects into individual SVG files
 * organized in the /src/assets/icons/ directory structure.
 * 
 * Usage:
 *   npm run migrate-svgs
 *   or
 *   tsx scripts/migrate-svgs.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read and parse the path files manually to avoid import issues
const heroPathsContent = fs.readFileSync(
  path.join(__dirname, '../src/imports/svg-hero-paths.ts'),
  'utf-8'
);

const carouselPathsContent = fs.readFileSync(
  path.join(__dirname, '../src/imports/svg-carousel-icon-paths.ts'),
  'utf-8'
);

// Extract the object literal using regex
function extractPaths(content: string): Record<string, string> {
  const paths: Record<string, string> = {};
  
  // Match pattern: key: "path string"
  const regex = /(\w+):\s*["']([^"']+)["']/g;
  let match;
  
  while ((match = regex.exec(content)) !== null) {
    const [, key, pathData] = match;
    paths[key] = pathData;
  }
  
  return paths;
}

const heroPaths = extractPaths(heroPathsContent);
const carouselPaths = extractPaths(carouselPathsContent);

interface PathData {
  [key: string]: string;
}

/**
 * Create an SVG file from a path string
 */
function createSvgFile(
  pathData: string,
  fileName: string,
  outputDir: string,
  viewBox: string = '0 0 48 48'
): void {
  const svgContent = `<svg viewBox="${viewBox}" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}" fill="currentColor"/>
</svg>
`;

  const filePath = path.join(outputDir, `${fileName}.svg`);
  fs.writeFileSync(filePath, svgContent, 'utf-8');
  console.log(`✅ Created: ${fileName}.svg`);
}

/**
 * Process all paths from a source object
 */
function processPaths(
  paths: PathData,
  outputDir: string,
  viewBox: string = '0 0 48 48'
): void {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let count = 0;
  for (const [key, pathData] of Object.entries(paths)) {
    // Use the hash key as filename for now
    // You can rename them to more descriptive names later
    createSvgFile(pathData, key, outputDir, viewBox);
    count++;
  }

  console.log(`\n📦 Processed ${count} icons in ${outputDir}\n`);
}

/**
 * Main migration function
 */
function migrate(): void {
  console.log('🚀 Starting SVG migration...\n');

  const projectRoot = path.join(__dirname, '..');
  const iconsDir = path.join(projectRoot, 'src', 'assets', 'icons');

  // Migrate hero icons
  console.log('📁 Processing hero icons...');
  processPaths(
    heroPaths,
    path.join(iconsDir, 'hero'),
    '0 0 48 48'
  );

  // Migrate carousel icons
  console.log('📁 Processing carousel icons...');
  processPaths(
    carouselPaths,
    path.join(iconsDir, 'carousel'),
    '0 0 48 48'
  );

  console.log('✨ Migration complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Review the generated SVG files');
  console.log('2. Rename files to descriptive names (optional)');
  console.log('3. Update component imports to use the new svgLoader');
  console.log('4. Remove old import files when ready\n');
}

// Run migration
migrate();
