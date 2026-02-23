import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const publicDir = join(rootDir, 'public');

const svgPath = join(publicDir, 'favicon.svg');
const icoPath = join(publicDir, 'favicon.ico');

async function generateFavicon() {
  console.log('Reading SVG...');
  const svgBuffer = readFileSync(svgPath);

  console.log('Generating PNGs at multiple sizes...');
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toBuffer();
    })
  );

  console.log('Converting to ICO...');
  const icoBuffer = await pngToIco(pngBuffers);

  console.log('Writing favicon.ico...');
  writeFileSync(icoPath, icoBuffer);

  console.log('Done! favicon.ico generated successfully.');
}

generateFavicon().catch((err) => {
  console.error('Error generating favicon:', err);
  process.exit(1);
});
