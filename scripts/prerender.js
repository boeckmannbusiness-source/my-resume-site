import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import puppeteer from 'puppeteer';
import chromium from '@sparticuz/chromium';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BUILD_DIR = path.join(__dirname, '../dist');
const ROUTES = ['/', '/imprint', '/games/refoma/data-privacy'];

const isVercel = process.env.VERCEL === '1';

async function waitForServer(port) {
  return new Promise((resolve, reject) => {
    const retries = 30;
    let attempts = 0;
    const interval = setInterval(() => {
      attempts++;
      http.get(`http://localhost:${port}`, (res) => {
        if (res.statusCode === 200) {
          clearInterval(interval);
          resolve(port);
        }
      }).on('error', (err) => {
        if (attempts >= retries) {
          clearInterval(interval);
          reject(err);
        }
      });
    }, 1000);
  });
}

async function prerenderPage(browser, url, outputPath) {
  const page = await browser.newPage();
  
  try {
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
    const html = await page.content();
    
    const dir = path.dirname(outputPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    fs.writeFileSync(outputPath, html);
    console.log(`  ✅ ${url} -> ${outputPath}`);
  } finally {
    await page.close();
  }
}

async function prerender() {
  console.log('🚀 Starting prerender process...\n');

  let server = null;

  try {
    console.log('📦 Building the application...');
    await new Promise((resolve, reject) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        shell: true,
        stdio: 'inherit'
      });
      buildProcess.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error(`Build failed with code ${code}`));
      });
      buildProcess.on('error', reject);
    });

    console.log('\n✅ Build completed\n');

    if (!fs.existsSync(BUILD_DIR)) {
      throw new Error('Build directory does not exist');
    }

    console.log('🌐 Starting local server...');
    server = spawn('npm', ['run', 'preview'], {
      shell: true,
      stdio: 'inherit'
    });

    const port = await waitForServer(4173);
    console.log(`✅ Server ready at http://localhost:${port}\n`);

    console.log('📄 Pre-rendering pages...');
    
    let browser;
    if (isVercel) {
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      });
    } else {
      browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    }

    try {
      for (const route of ROUTES) {
        const url = `http://localhost:${port}${route}`;
        
        if (route === '/') {
          await prerenderPage(browser, url, path.join(BUILD_DIR, 'index.html'));
        } else {
          const routePath = route.replace(/^\//, '');
          await prerenderPage(browser, url, path.join(BUILD_DIR, routePath, 'index.html'));
        }
      }
    } finally {
      await browser.close();
    }

    console.log('\n✨ Prerendering completed!');
    console.log(`\n📁 Output files in: ${BUILD_DIR}`);

  } catch (error) {
    console.error('\n❌ Prerender failed:', error.message);
    process.exit(1);
  } finally {
    if (server) {
      server.kill('SIGTERM');
    }
  }
}

prerender();
