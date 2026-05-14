#!/usr/bin/env node
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const src = path.join(root, "logo_small.png");
const appDir = path.join(root, "src", "app");

async function run() {
  if (!fs.existsSync(src)) throw new Error(`Missing ${src}`);

  // Favicon (32x32 ICO would be ideal, but Next handles PNG → favicon via icon.png convention)
  await sharp(src)
    .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(appDir, "icon.png"));

  // Apple touch icon
  await sharp(src)
    .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(appDir, "apple-icon.png"));

  // OG image: 1200x630 navy background + logo + gold underline + text
  const NAVY = { r: 0x2a, g: 0x38, b: 0x50, alpha: 1 };
  const GOLD = "#DFC07C";

  // Resize the logo to fit comfortably within the OG canvas
  const logoSize = 360;
  const logoBuffer = await sharp(src)
    .resize(logoSize, logoSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  // Subtle blueprint grid overlay (gold lines on navy)
  const gridSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <pattern id="g" width="60" height="60" patternUnits="userSpaceOnUse">
        <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#DFC07C" stroke-width="0.6" stroke-opacity="0.10"/>
      </pattern>
      <radialGradient id="glow" cx="20%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#DFC07C" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#DFC07C" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect width="100%" height="100%" fill="url(#glow)"/>
  </svg>`);

  const textSvg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
    <style>
      .eyebrow { font: 400 22px 'Helvetica Neue', Arial, sans-serif; fill: #DFC07C; letter-spacing: 4px; }
      .h1 { font: 700 76px 'Helvetica Neue', Arial, sans-serif; fill: #FFFFFF; letter-spacing: -1px; }
      .sub { font: 400 28px 'Helvetica Neue', Arial, sans-serif; fill: rgba(255,255,255,0.78); }
      .meta { font: 500 22px 'Helvetica Neue', Arial, sans-serif; fill: #DFC07C; letter-spacing: 2px; }
    </style>
    <text x="540" y="170" class="eyebrow">ENGINEERING &amp; CONSTRUCTION</text>
    <text x="540" y="250" class="h1">Gabi Fadlun</text>
    <line x1="540" y1="275" x2="650" y2="275" stroke="#DFC07C" stroke-width="3"/>
    <text x="540" y="345" class="sub">Project Management &amp; Site Supervision</text>
    <text x="540" y="385" class="sub">10+ years · Banks · Hotels · TAMA 38 · Luxury</text>
    <text x="540" y="510" class="meta">+972 50 774 7162</text>
  </svg>`);

  await sharp({
    create: {
      width: 1200,
      height: 630,
      channels: 4,
      background: NAVY,
    },
  })
    .composite([
      { input: gridSvg, top: 0, left: 0 },
      { input: logoBuffer, top: 135, left: 90 },
      { input: textSvg, top: 0, left: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(path.join(appDir, "opengraph-image.png"));

  console.log("✓ Generated icon.png (512x512)");
  console.log("✓ Generated apple-icon.png (180x180)");
  console.log("✓ Generated opengraph-image.png (1200x630)");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
