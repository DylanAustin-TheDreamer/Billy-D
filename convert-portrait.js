const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'assets', 'images');
const file = 'portrait.png';
const inputPath = path.join(imageDir, file);

const originalSize = fs.statSync(inputPath).size / 1024;

sharp(inputPath)
    .resize(1200, 1200, {
        fit: 'inside',
        withoutEnlargement: true
    })
    .webp({ quality: 85 })
    .toFile(path.join(imageDir, 'portrait-optimized.webp'))
    .then(() => {
        const webpSize = fs.statSync(path.join(imageDir, 'portrait-optimized.webp')).size / 1024;
        console.log(`✓ portrait.png converted!`);
        console.log(`  Original: ${originalSize.toFixed(2)} KB`);
        console.log(`  WebP: ${webpSize.toFixed(2)} KB (${((1 - webpSize/originalSize) * 100).toFixed(1)}% reduction)`);
    })
    .catch(err => console.error('Error:', err));
