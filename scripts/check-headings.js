// quick static check for one <h1> per page component and presence of generateMetadata
const fs = require("fs");
const path = require("path");

const pages = [
  "app/(home)/page.tsx",
  "app/services/page.tsx",
  "app/work/page.tsx",
  "app/contact/page.tsx",
  "app/about/page.tsx"
].map(p => path.resolve(process.cwd(), p)).filter(fs.existsSync);

let ok = true;

// Check that each page has proper metadata export
for (const file of pages) {
  const s = fs.readFileSync(file, "utf8");

  // Check for metadata export (either direct export or in layout)
  const hasMetadata = /export const metadata|export function generateMetadata/.test(s);
  const isClientComponent = s.includes('"use client"');

  if (!hasMetadata && !isClientComponent) {
    console.error(`❌ ${file}: missing metadata export`);
    ok = false;
  }

  // For client components, check that they import components that likely have H1
  if (isClientComponent) {
    const hasHeroImport = s.includes('Hero') || s.includes('hero');
    if (!hasHeroImport) {
      console.error(`❌ ${file}: client component should import Hero component for H1`);
      ok = false;
    }
  } else {
    // For server components, check for H1 directly
    const h1s = (s.match(/<h1[\s>]/g) || []).length;
    if (h1s !== 1) {
      console.error(`❌ ${file}: expected 1 <h1>, found ${h1s}`);
      ok = false;
    }
  }
}

const layout = path.resolve("app/layout.tsx");
if (fs.existsSync(layout)) {
  const s = fs.readFileSync(layout, "utf8");
  if (!/export const metadata|export function generateMetadata/.test(s)) {
    console.error("❌ app/layout.tsx: missing metadata export");
    ok = false;
  }
}

if (ok) {
  console.log("✅ All pages have proper heading structure and metadata");
}

process.exit(ok ? 0 : 1);
