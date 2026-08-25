import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

// Points directly to your public/assets directory
const assetsDir = './public/assets';

async function processDirectory(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            // Recursively walk subdirectories like blog, projects, recipes, etc.
            await processDirectory(fullPath);
        } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.png') {
            // Ignore root favicon-style assets if you want to keep them as PNG
            if (entry.name.startsWith('android-chrome-') || entry.name.startsWith('apple-touch-icon')) {
                continue;
            }

            const outputPath = fullPath.replace(/\.png$/i, '.webp');

            await sharp(fullPath)
                .webp({ quality: 80 }) // Converts PNG to WebP at 80% quality
                .toFile(outputPath);

            console.log(`Converted: ${fullPath} -> ${outputPath}`);

            // Delete the original heavy PNG after converting
            fs.unlinkSync(fullPath);
        }
    }
}

console.log('Starting WebP conversion for public/assets...');
processDirectory(assetsDir)
    .then(() => console.log('Finished converting all PNGs to WebP!'))
    .catch((err) => console.error('Error compressing images:', err));