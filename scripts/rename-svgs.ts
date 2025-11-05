#!/usr/bin/env tsx

import fs from 'fs';
import path from 'path';

/**
 * Icon Naming Map
 * Maps hash-based filenames to descriptive names based on component usage analysis
 */
const iconNameMap: Record<string, { newName: string; category: 'tech' | 'logo' | 'ui' }> = {
  // Technology Icons (from InfiniteCarousel)
  'p2dfbc080': { newName: 'react', category: 'tech' },
  'p25e67400': { newName: 'vite', category: 'tech' },
  'peaa700': { newName: 'figma', category: 'tech' },
  'p2be51700': { newName: 'typescript', category: 'tech' },
  'p14f62100': { newName: 'framer', category: 'tech' },
  'p22ce1f00': { newName: 'vercel-top', category: 'tech' },
  'p3e38f872': { newName: 'vercel-bottom', category: 'tech' },
  'p39998970': { newName: 'tailwind', category: 'tech' },
  'p25d25800': { newName: 'vitest', category: 'tech' },
  'p1471b3f0': { newName: 'javascript', category: 'tech' },
  'p65800': { newName: 'css', category: 'tech' },
  'p38ec6400': { newName: 'html', category: 'tech' },
  'p28f35e00': { newName: 'ruby-part1', category: 'tech' },
  'p18ad7600': { newName: 'ruby-part2', category: 'tech' },
  'p3c0b9900': { newName: 'ruby-part3', category: 'tech' },
  'p7b73100': { newName: 'ruby-part4', category: 'tech' },
  'p3b02a3b0': { newName: 'ruby-part5', category: 'tech' },
  'p24b2cd00': { newName: 'ruby-part6', category: 'tech' },
  'p338f3a00': { newName: 'ruby-part7', category: 'tech' },
  'p3cec3ac0': { newName: 'ruby-part8', category: 'tech' },
  'p2027f180': { newName: 'ruby-part9', category: 'tech' },
  'p26418c00': { newName: 'ruby-part10', category: 'tech' },
  'pd2fc700': { newName: 'ruby-part11', category: 'tech' },
  'p2cd7e680': { newName: 'ruby-part12', category: 'tech' },
  'p20acc280': { newName: 'ruby-part13', category: 'tech' },
  'p35f81a00': { newName: 'ruby-part14', category: 'tech' },
  'p13db3000': { newName: 'git', category: 'tech' },
  'p25c2a2c0': { newName: 'github', category: 'tech' },
  'p15604a80': { newName: 'photoshop-line1', category: 'tech' },
  'pfbc8100': { newName: 'photoshop-line2', category: 'tech' },
  'p8f6c00': { newName: 'photoshop-line3', category: 'tech' },
  'p3f98cf80': { newName: 'photoshop-shield-outer', category: 'tech' },
  'p3ea70600': { newName: 'photoshop-shield-inner', category: 'tech' },
  'p2f16880': { newName: 'rounded-rect-bg', category: 'ui' },

  // Brand Logo Ellipses (from BrandLogo component)
  'p1d34c480': { newName: 'ellipse-65-outer-primary', category: 'logo' },
  'p2646ea00': { newName: 'ellipse-66-primary', category: 'logo' },
  'p1d76dc60': { newName: 'ellipse-67-primary', category: 'logo' },
  'p350a7680': { newName: 'ellipse-68-primary', category: 'logo' },
  'p2f4d2600': { newName: 'ellipse-69-primary', category: 'logo' },
  'p171c1700': { newName: 'ellipse-70-inner-primary', category: 'logo' },
  'p37f60000': { newName: 'ellipse-71-inner-background', category: 'logo' },
  'p26c95400': { newName: 'ellipse-72-background', category: 'logo' },
  'p21da900': { newName: 'ellipse-73-background', category: 'logo' },
  'p3451a000': { newName: 'ellipse-74-background', category: 'logo' },
  'p2c665800': { newName: 'ellipse-75-outer-background', category: 'logo' },
  
  // Additional hero icons
  'p11a74280': { newName: 'arrow-left', category: 'ui' },
  'p2b26df80': { newName: 'arrow-right', category: 'ui' },
  'p39fa680': { newName: 'menu-icon', category: 'ui' },
};

const baseDir = path.join(process.cwd(), 'src/assets/icons');

interface RenameOperation {
  oldPath: string;
  newPath: string;
  oldName: string;
  newName: string;
  folder: string;
}

/**
 * Scan directories and build rename operations
 */
function buildRenameOperations(): RenameOperation[] {
  const operations: RenameOperation[] = [];
  const folders = ['hero', 'carousel', 'logo'];
  
  for (const folder of folders) {
    const folderPath = path.join(baseDir, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = fs.readdirSync(folderPath);
    
    for (const file of files) {
      if (!file.endsWith('.svg') || file === 'example-icon.svg') continue;
      
      const hashName = file.replace('.svg', '');
      const mapping = iconNameMap[hashName];
      
      if (mapping) {
        const newFileName = `${mapping.newName}.svg`;
        operations.push({
          oldPath: path.join(folderPath, file),
          newPath: path.join(folderPath, newFileName),
          oldName: hashName,
          newName: mapping.newName,
          folder
        });
      }
    }
  }
  
  return operations;
}

/**
 * Find and remove duplicate files across folders
 */
function findDuplicates(): Map<string, string[]> {
  const duplicates = new Map<string, string[]>();
  const folders = ['hero', 'carousel', 'logo'];
  
  for (const folder of folders) {
    const folderPath = path.join(baseDir, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const files = fs.readdirSync(folderPath);
    
    for (const file of files) {
      if (!file.endsWith('.svg')) continue;
      
      const fullPath = path.join(folderPath, file);
      const content = fs.readFileSync(fullPath, 'utf-8');
      
      if (!duplicates.has(content)) {
        duplicates.set(content, []);
      }
      duplicates.get(content)!.push(fullPath);
    }
  }
  
  return duplicates;
}

/**
 * Execute the renaming process
 */
async function main() {
  console.log('🔍 Analyzing SVG files...\n');
  
  // Find duplicates
  console.log('📊 Finding duplicates...');
  const duplicates = findDuplicates();
  const duplicateGroups = Array.from(duplicates.values()).filter(paths => paths.length > 1);
  
  if (duplicateGroups.length > 0) {
    console.log(`\n⚠️  Found ${duplicateGroups.length} sets of duplicate files:`);
    duplicateGroups.forEach((group, index) => {
      console.log(`\n  Duplicate set ${index + 1}:`);
      group.forEach(p => console.log(`    - ${path.relative(baseDir, p)}`));
    });
    console.log('\n💡 Consider consolidating these later.\n');
  }
  
  // Build rename operations
  const operations = buildRenameOperations();
  
  console.log(`\n📝 Planned renames: ${operations.length} files\n`);
  
  // Group by folder
  const byFolder = operations.reduce((acc, op) => {
    if (!acc[op.folder]) acc[op.folder] = [];
    acc[op.folder].push(op);
    return acc;
  }, {} as Record<string, RenameOperation[]>);
  
  // Display plan
  for (const [folder, ops] of Object.entries(byFolder)) {
    console.log(`\n  ${folder}/ (${ops.length} files):`);
    ops.slice(0, 5).forEach(op => {
      console.log(`    ${op.oldName}.svg → ${op.newName}.svg`);
    });
    if (ops.length > 5) {
      console.log(`    ... and ${ops.length - 5} more`);
    }
  }
  
  // Execute renames
  console.log('\n\n🚀 Executing renames...\n');
  
  for (const op of operations) {
    try {
      // Check if target already exists
      if (fs.existsSync(op.newPath) && op.oldPath !== op.newPath) {
        console.log(`  ⚠️  Skipping ${op.oldName} → ${op.newName} (target exists)`);
        continue;
      }
      
      fs.renameSync(op.oldPath, op.newPath);
      console.log(`  ✓ ${op.folder}/${op.oldName}.svg → ${op.newName}.svg`);
    } catch (error) {
      console.error(`  ✗ Failed to rename ${op.oldName}:`, error);
    }
  }
  
  console.log('\n\n✅ Renaming complete!');
  console.log('\n⚠️  Next steps:');
  console.log('  1. Update svgLoader.ts to use new filenames');
  console.log('  2. Update logoComponents.ts with new ellipse names');
  console.log('  3. Review and remove duplicate files');
  console.log('  4. Run: npm run build');
}

main().catch(console.error);
