import { generatePdf } from "../src/lib/cv-pdf-generator";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const pdf = await generatePdf();
  const out = path.resolve(process.cwd(), "public", "cv.pdf");
  fs.writeFileSync(out, pdf);
  console.log(`CV PDF generated → ${out} (${(pdf.length / 1024).toFixed(1)} KB)`);
}

main().catch((err) => {
  console.error("CV PDF generation failed:", err);
  process.exit(1);
});
