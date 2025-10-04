const sharp = require('sharp');
const path = require('path');

async function createOGImage() {
  const width = 1200;
  const height = 630;

  // Create a gradient background SVG
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1d4ed8;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
      <text x="50%" y="35%" font-family="Arial, sans-serif" font-size="72" font-weight="bold" fill="white" text-anchor="middle">Baseaim</text>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="42" fill="white" text-anchor="middle" opacity="0.95">AI Automation Services</text>
      <text x="50%" y="65%" font-family="Arial, sans-serif" font-size="32" fill="white" text-anchor="middle" opacity="0.9">Custom AI Solutions for Business Growth</text>
      <text x="50%" y="85%" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle" opacity="0.8">Increase Efficiency by 300%+</text>
    </svg>
  `;

  const outputPath = path.join(__dirname, '../public/og-image.jpg');
  const twitterPath = path.join(__dirname, '../public/twitter-image.jpg');

  try {
    // Create OG image (1200x630)
    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outputPath);
    console.log('✓ Created og-image.jpg (1200x630)');

    // Create Twitter image (1200x675) - slightly taller
    const twitterSvg = svg.replace('height="630"', 'height="675"');
    await sharp(Buffer.from(twitterSvg))
      .jpeg({ quality: 90 })
      .toFile(twitterPath);
    console.log('✓ Created twitter-image.jpg (1200x675)');

    console.log('\n✓ Social preview images created successfully!');
  } catch (error) {
    console.error('Error creating OG images:', error);
  }
}

createOGImage();
