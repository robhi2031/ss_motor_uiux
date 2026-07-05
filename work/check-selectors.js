const fs = require("fs");

const html = fs.readFileSync("outputs/index.html", "utf8");
const js = fs.readFileSync("outputs/app.js", "utf8");
const ids = [...js.matchAll(/querySelector\("#([^"]+)/g)].map((match) => match[1]);
const missing = [...new Set(ids)].filter((id) => !html.includes(`id="${id}"`));

if (missing.length) {
  console.error(`Missing IDs: ${missing.join(", ")}`);
  process.exit(1);
}

console.log(`All querySelector IDs exist: ${new Set(ids).size}`);
