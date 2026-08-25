import fs from 'fs';
import path from 'path';

// Directories containing your site's JSON files
const jsonDirectories = ['./src/pageData'];

function updateJsonFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            updateJsonFiles(fullPath);
        } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.json') {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Replace references ending in .png with .webp (case-insensitive)
            const updatedContent = content.replace(/([a-zA-Z0-9_\-]+)\.png/gi, '$1.webp');

            if (content !== updatedContent) {
                fs.writeFileSync(fullPath, updatedContent, 'utf8');
                console.log(`Updated PNG references to WebP in: ${fullPath}`);
            }
        }
    }
}

jsonDirectories.forEach(dir => updateJsonFiles(dir));
console.log('Finished updating JSON image paths!');