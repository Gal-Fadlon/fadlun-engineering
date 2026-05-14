#!/usr/bin/env node
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const root = path.join(__dirname, "..");
const iconSrc = path.join(root, "logo_small.png");
const ogLogoSrc = path.join(root, "logo_small-removebg.png");
const appDir = path.join(root, "src", "app");

async function run() {
  if (!fs.existsSync(iconSrc)) throw new Error(`Missing ${iconSrc}`);
  if (!fs.existsSync(ogLogoSrc)) throw new Error(`Missing ${ogLogoSrc}`);

  // Favicon (32x32 ICO would be ideal, but Next handles PNG → favicon via icon.png convention)
  await sharp(iconSrc)
    .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(appDir, "icon.png"));

  // Apple touch icon
  await sharp(iconSrc)
    .resize(180, 180, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toFile(path.join(appDir, "apple-icon.png"));

  // OG image: simple square thumbnail — just the logo on the brand light-grey
  // background. WhatsApp / iMessage / Telegram show this next to the page title
  // and description from the meta tags. Square format + summary card setting in
  // metadata makes WhatsApp render the compact preview style.
  const OG_SIZE = 800;
  const LOGO_FRAC = 0.62; // logo occupies ~62% of canvas, comfortable padding
  const logoPx = Math.round(OG_SIZE * LOGO_FRAC);

  const ogLogoBuffer = await sharp(ogLogoSrc)
    .resize(logoPx, logoPx, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  const logoOffset = Math.round((OG_SIZE - logoPx) / 2);

  await sharp({
    create: {
      width: OG_SIZE,
      height: OG_SIZE,
      channels: 4,
      background: { r: 0xff, g: 0xff, b: 0xff, alpha: 1 },
    },
  })
    .composite([{ input: ogLogoBuffer, top: logoOffset, left: logoOffset }])
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
