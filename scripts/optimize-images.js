const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const BACKUP_DIR = path.join(__dirname, '../public/original-backup');

// Images to optimize with their target max dimensions and quality
const OPTIMIZATION_CONFIG = {
  'linked in profile pic.png': { maxWidth: 800, quality: 80, format: 'webp' },
  'frames_1.44.1.png': { maxWidth: 1200, quality: 75, format: 'webp' },
  'BASEAIM BLACK.png': { maxWidth: 400, quality: 85, format: 'png' },
  'baseaim white.png': { maxWidth: 400, quality: 85, format: 'png' },
  'logo-black.png': { maxWidth: 300, quality: 85, format: 'png' },
  'DSCF0967.JPG': { maxWidth: 1200, quality: 80, format: 'webp' },
  'Khan kim.jpg': { maxWidth: 800, quality: 80, format: 'webp' },
};

async function ensureBackupDir() {
  try {
    await fs.access(BACKUP_DIR);
  } catch {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    console.log('✓ Created backup directory');
  }
}

async function backupOriginal(filename) {
  const sourcePath = path.join(PUBLIC_DIR, filename);
  const backupPath = path.join(BACKUP_DIR, filename);

  try {
    await fs.access(backupPath);
    console.log(`  ⊳ Backup already exists for ${filename}`);
  } catch {
    await fs.copyFile(sourcePath, backupPath);
    console.log(`  ✓ Backed up ${filename}`);
  }
}

async function optimizeImage(filename, config) {
  const inputPath = path.join(PUBLIC_DIR, filename);
  const ext = path.extname(filename);
  const baseName = path.basename(filename, ext);
  const outputFilename = config.format === 'webp'
    ? `${baseName}.webp`
    : filename;
  const outputPath = path.join(PUBLIC_DIR, outputFilename);

  try {
    // Get original file size
    const originalStats = await fs.stat(inputPath);
    const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);

    console.log(`\n📸 Processing: ${filename} (${originalSizeMB}MB)`);

    // Backup original
    await backupOriginal(filename);

    // Optimize image
    let sharpInstance = sharp(inputPath);

    if (config.maxWidth) {
      sharpInstance = sharpInstance.resize(config.maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    if (config.format === 'webp') {
      await sharpInstance
        .webp({ quality: config.quality })
        .toFile(outputPath);
    } else if (config.format === 'png') {
      await sharpInstance
        .png({ quality: config.quality, compressionLevel: 9 })
        .toFile(outputPath + '.tmp');
      await fs.rename(outputPath + '.tmp', outputPath);
    } else if (config.format === 'jpeg' || config.format === 'jpg') {
      await sharpInstance
        .jpeg({ quality: config.quality, mozjpeg: true })
        .toFile(outputPath);
    }

    // Get new file size
    const newStats = await fs.stat(outputPath);
    const newSizeMB = (newStats.size / 1024 / 1024).toFixed(2);
    const reduction = ((1 - newStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`  ✓ Optimized: ${originalSizeMB}MB → ${newSizeMB}MB (${reduction}% reduction)`);
    console.log(`  📁 Output: ${outputFilename}`);

    return {
      original: filename,
      optimized: outputFilename,
      originalSize: originalStats.size,
      newSize: newStats.size,
      reduction: parseFloat(reduction)
    };

  } catch (error) {
    console.error(`  ✗ Failed to optimize ${filename}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🎨 Image Optimization Script\n');
  console.log('This will optimize large images and create backups.\n');

  await ensureBackupDir();

  const results = [];

  for (const [filename, config] of Object.entries(OPTIMIZATION_CONFIG)) {
    const result = await optimizeImage(filename, config);
    if (result) {
      results.push(result);
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));

  let totalOriginal = 0;
  let totalNew = 0;

  results.forEach(r => {
    totalOriginal += r.originalSize;
    totalNew += r.newSize;
  });

  const totalOriginalMB = (totalOriginal / 1024 / 1024).toFixed(2);
  const totalNewMB = (totalNew / 1024 / 1024).toFixed(2);
  const totalReduction = ((1 - totalNew / totalOriginal) * 100).toFixed(1);

  console.log(`\nTotal original size: ${totalOriginalMB}MB`);
  console.log(`Total optimized size: ${totalNewMB}MB`);
  console.log(`Total reduction: ${totalReduction}%`);
  console.log(`\n✓ Optimization complete! Originals backed up to: public/original-backup/\n`);
}

main().catch(console.error);
