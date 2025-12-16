import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sourceDir = './Fencible Portfolio';
const outputDir = './public/images/portfolio';
const servicesDir = './public/images/services';
const maxSize = 500 * 1024; // 500KB

// Ensure output directories exist
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
if (!fs.existsSync(servicesDir)) fs.mkdirSync(servicesDir, { recursive: true });

// Only use JPG, JPEG, and PNG files (HEIC not supported without extra deps)
const portfolioImages = {
  'Aimi.PNG': 'garden-transformation.webp',
  'Russfence.PNG': 'fence-installation.webp',
  'Derek2.JPG': 'fence-project-1.webp',
  'LiamStudham1.jpg': 'lawn-project.webp',
  'Rob1.jpeg': 'patio-1.webp',
  'RobynLuke.jpg': 'landscaping-1.webp',
  'RobynLuke2.jpg': 'landscaping-2.webp',
  'Sofia1.jpg': 'garden-design.webp',
};

// Service images
const serviceImages = {
  'Aimi.PNG': 'garden-renovation.webp',
  'Russfence.PNG': 'fencing.webp',
  'Rob1.jpeg': 'patios.webp',
  'Derek2.JPG': 'garden-rooms.webp',
};

async function convertImage(inputPath, outputPath, maxBytes = maxSize) {
  try {
    console.log(`Converting: ${inputPath} -> ${outputPath}`);

    // Start with quality 80 and reduce if needed
    let quality = 80;
    let buffer;

    do {
      buffer = await sharp(inputPath)
        .resize(1600, 1200, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality })
        .toBuffer();

      if (buffer.length > maxBytes && quality > 30) {
        quality -= 10;
        console.log(`  Size ${Math.round(buffer.length/1024)}KB > 500KB, reducing quality to ${quality}`);
      }
    } while (buffer.length > maxBytes && quality > 30);

    fs.writeFileSync(outputPath, buffer);
    console.log(`  Saved: ${Math.round(buffer.length/1024)}KB`);
    return true;
  } catch (err) {
    console.error(`  Error: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log('Converting portfolio images (JPG/PNG only)...\n');

  // Convert portfolio images
  for (const [source, dest] of Object.entries(portfolioImages)) {
    const inputPath = path.join(sourceDir, source);
    const outputPath = path.join(outputDir, dest);

    if (fs.existsSync(inputPath)) {
      await convertImage(inputPath, outputPath);
    } else {
      console.log(`Skipping (not found): ${inputPath}`);
    }
  }

  console.log('\nConverting service images...\n');

  // Convert service images
  for (const [source, dest] of Object.entries(serviceImages)) {
    const inputPath = path.join(sourceDir, source);
    const outputPath = path.join(servicesDir, dest);

    if (fs.existsSync(inputPath)) {
      await convertImage(inputPath, outputPath);
    } else {
      console.log(`Skipping (not found): ${inputPath}`);
    }
  }

  console.log('\nDone! Files created:');
  console.log('Portfolio:', fs.readdirSync(outputDir).filter(f => f.endsWith('.webp')));
  console.log('Services:', fs.readdirSync(servicesDir).filter(f => f.endsWith('.webp')));
}

main();
