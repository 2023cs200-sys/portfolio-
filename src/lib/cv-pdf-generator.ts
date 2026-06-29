import PDFDocument from "pdfkit";
import { PERSONAL, ACADEMIC, PROJECTS, SKILL_CARDS, CERTS } from "./data";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const MARGIN = 50;
const CW = PAGE_W - MARGIN * 2; // usable content width

// ── helpers ──────────────────────────────────────────────────────────────────

/** Strip characters that upset PDFKit */
const esc = (s: string) => s.replace(/[\\()]/g, "");

/**
 * Draw text at an absolute (x, y) position and return the height it consumed.
 * Always call doc.text() with { lineBreak: false } for single-line strings or
 * { width } for multi-line strings so PDFKit doesn't silently re-use its own
 * internal cursor position.
 */
function textH(
  doc: PDFKit.PDFDocument,
  text: string,
  x: number,
  y: number,
  opts: PDFKit.Mixins.TextOptions & { width?: number } = {}
): number {
  doc.text(text, x, y, opts);
  return doc.y - y; // actual height consumed (PDFKit updates doc.y for us)
}

// ── generator ─────────────────────────────────────────────────────────────────

export async function generatePdf(): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN },
      info: { Title: `${PERSONAL.name} – CV`, Author: PERSONAL.name },
      autoFirstPage: true,
    });

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    const L = MARGIN;
    const R = PAGE_W - MARGIN;

    let y = MARGIN;

    // ── utilities ──────────────────────────────────────────────────────────

    const newPage = () => {
      doc.addPage();
      y = MARGIN;
    };

    const needPage = (needed: number) => {
      if (y + needed > PAGE_H - MARGIN) newPage();
    };

    const drawSep = () => {
      doc
        .moveTo(L, y)
        .lineTo(R, y)
        .strokeColor("#CBD5E1")
        .lineWidth(0.6)
        .stroke();
    };

    const drawSection = (title: string) => {
      needPage(30);
      y += 6;
      doc.font("Helvetica-Bold").fontSize(10).fillColor("#2563EB");
      doc.text(title, L, y, { width: CW, lineBreak: false });
      y += 14;
      drawSep();
      y += 8;
    };

    // ── HEADER ──────────────────────────────────────────────────────────────

    doc.font("Helvetica-Bold").fontSize(20).fillColor("#0F172A");
    doc.text(PERSONAL.name, L, y, { width: CW });
    y = doc.y + 2;

    doc.font("Helvetica").fontSize(10).fillColor("#2563EB");
    doc.text(PERSONAL.title, L, y, { width: CW });
    y = doc.y + 6;

    doc.font("Helvetica").fontSize(8).fillColor("#64748B");
    doc.text(PERSONAL.email, L, y, { width: CW });
    y = doc.y + 2;
    doc.text(PERSONAL.github, L, y, { width: CW });
    y = doc.y + 2;
    doc.text(PERSONAL.linkedin, L, y, { width: CW });
    y = doc.y + 10;

    // thin line under header
    drawSep();
    y += 4;

    // ── EDUCATION ───────────────────────────────────────────────────────────

    drawSection("EDUCATION");

    for (const e of ACADEMIC) {
      needPage(50);

      // Row 1 – degree / topic
      doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#0F172A");
      doc.text(esc(e.topic), L, y, { width: CW });
      y = doc.y;

      // Row 2 – badge (period / status) in italic
      doc.font("Helvetica-Oblique").fontSize(8.5).fillColor("#2563EB");
      doc.text(esc(e.badge), L, y, { width: CW });
      y = doc.y;

      // Row 3 – institution
      doc.font("Helvetica").fontSize(8).fillColor("#475569");
      doc.text(esc(e.institution), L, y, { width: CW });
      y = doc.y + 3;

      // Row 4 – description
      doc.font("Helvetica").fontSize(8).fillColor("#64748B");
      doc.text(esc(e.description), L, y, { width: CW });
      y = doc.y + 8;
    }

    // ── PROJECTS ─────────────────────────────────────────────────────────────

    drawSection("PROJECTS");

    for (const p of PROJECTS) {
      needPage(60);

      // Row 1 – project number + title
      doc.font("Helvetica-Bold").fontSize(9.5).fillColor("#0F172A");
      doc.text(`#${p.n}  ${esc(p.title)}`, L, y, { width: CW });
      y = doc.y + 1;

      // Row 2 – tags
      doc.font("Helvetica").fontSize(7.5).fillColor("#2563EB");
      doc.text(p.tags.join("  ·  "), L, y, { width: CW });
      y = doc.y + 3;

      // Row 3 – description (full, not truncated)
      doc.font("Helvetica").fontSize(8).fillColor("#475569");
      doc.text(esc(p.desc), L, y, { width: CW });
      y = doc.y + 8;
    }

    // ── TECHNICAL SKILLS ──────────────────────────────────────────────────────

    drawSection("TECHNICAL SKILLS");

    const COL_LABEL_W = 160; // fixed width for the label column
    const COL_SKILLS_X = L + COL_LABEL_W + 8;
    const COL_SKILLS_W = R - COL_SKILLS_X;

    for (const cat of SKILL_CARDS) {
      const label = cat.head.replace(/_/g, " ");
      const skills = cat.items.map((s) => s.name).join(", ");

      // Measure heights for both columns
      doc.font("Helvetica-Bold").fontSize(8.5);
      const labelH = doc.heightOfString(label, { width: COL_LABEL_W });
      doc.font("Helvetica").fontSize(8);
      const skillsH = doc.heightOfString(esc(skills), { width: COL_SKILLS_W });
      const rowH = Math.max(labelH, skillsH);

      needPage(rowH + 5);

      doc.font("Helvetica-Bold").fontSize(8.5).fillColor("#0F172A");
      doc.text(label, L, y, { width: COL_LABEL_W, lineBreak: false });

      doc.font("Helvetica").fontSize(8).fillColor("#475569");
      doc.text(esc(skills), COL_SKILLS_X, y, { width: COL_SKILLS_W });

      // advance y by the taller column
      y += rowH + 5;
    }

    // ── CERTIFICATIONS ────────────────────────────────────────────────────────

    drawSection("CERTIFICATIONS");

    for (const c of CERTS) {
      needPage(50);

      // Name + issuer on one line – if issuer fits
      const name = esc(c.name);
      const issuerStr = `  —  ${c.issuer}`;

      doc.font("Helvetica-Bold").fontSize(9).fillColor("#0F172A");
      doc.text(name, L, y, { continued: false, width: CW });
      y = doc.y;

      doc.font("Helvetica-Oblique").fontSize(8).fillColor("#2563EB");
      doc.text(c.issuer, L, y, { width: CW });
      y = doc.y + 1;

      // Status badge
      doc.font("Helvetica").fontSize(7.5).fillColor(
        c.status === "EARNED"
          ? "#16A34A"
          : c.status === "IN_PROGRESS"
          ? "#D97706"
          : "#475569"
      );
      doc.text(`[ ${c.status} ]`, L, y, { width: CW });
      y = doc.y + 2;

      // Description
      doc.font("Helvetica").fontSize(8).fillColor("#64748B");
      doc.text(esc(c.description), L, y, { width: CW });
      y = doc.y + 8;
    }

    // ── FOOTER ───────────────────────────────────────────────────────────────

    // Always put footer on the last page near the bottom
    const footerY = PAGE_H - MARGIN + 5;
    doc.font("Helvetica").fontSize(7).fillColor("#94A3B8");
    doc.text("Generated from portfolio · hashini-gayathri-suraweera", L, footerY, {
      width: CW,
      align: "center",
    });

    doc.end();
  });
}
