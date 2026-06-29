import PDFDocument from "pdfkit";
import * as path from "path";
import { PERSONAL, ACADEMIC, CERTS, CV_SUMMARY, EXPERIENCE, LANGUAGES } from "./data";

const PAGE_W = 595.28;
const PAGE_H = 841.89;
const ML = 36;
const MR = 36;
const CW = PAGE_W - ML - MR;

const COL_L = 0.33;
const COL_GAP = 22;
const LEFT_W = CW * COL_L;
const RIGHT_W = CW - LEFT_W - COL_GAP;
const LEFT_X = ML;
const RIGHT_X = ML + LEFT_W + COL_GAP;

const ORANGE = "#D88A1F";
const BLACK = "#222222";
const DARK = "#333333";
const GRAY = "#555555";
const LIGHT = "#666666";

function wrap(doc: PDFKit.PDFDocument, text: string, x: number, y: number, w: number, size: number, color: string, font: string = "Times-Roman"): number {
  doc.font(font).fontSize(size).fillColor(color);
  doc.text(text, x, y, { width: w, lineBreak: true });
  return doc.y;
}

function drawSectionLine(doc: PDFKit.PDFDocument, x: number, y: number, w: number) {
  doc.moveTo(x, y).lineTo(x + w, y).strokeColor(ORANGE).lineWidth(2).stroke();
}

function drawBullet(doc: PDFKit.PDFDocument, x: number, y: number) {
  doc.circle(x, y - 2, 1.5).fill(BLACK);
}

function drawDocIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save(); d.translate(x - 1, y - 4);
  d.rect(0.5, 0, 7, 9).strokeColor(BLACK).lineWidth(0.9).stroke();
  d.moveTo(2, 3).lineTo(6, 3).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.moveTo(2, 5.5).lineTo(6, 5.5).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.moveTo(2, 8).lineTo(5, 8).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.restore();
}

function drawGearIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save(); d.translate(x - 1, y - 4);
  d.circle(4, 4.5, 3.2).strokeColor(BLACK).lineWidth(0.9).stroke();
  d.circle(4, 4.5, 1.3).fill(BLACK);
  d.restore();
}

function drawGlobeSmallIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save(); d.translate(x - 1, y - 4);
  d.circle(4, 4.5, 3.5).strokeColor(BLACK).lineWidth(0.8).stroke();
  d.moveTo(4, 1).lineTo(4, 8).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.moveTo(0.5, 4.5).lineTo(7.5, 4.5).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.restore();
}

function drawDiplomaIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save(); d.translate(x - 1, y - 4);
  d.rect(0.5, 1.5, 7, 5.5).strokeColor(BLACK).lineWidth(0.9).stroke();
  d.moveTo(0.5, 1.5).lineTo(8, 5.5).lineTo(0.5, 7).strokeColor(BLACK).lineWidth(0.9).stroke();
  d.moveTo(1.5, 3).lineTo(6, 3).strokeColor(BLACK).lineWidth(0.6).stroke();
  d.moveTo(1.5, 4.5).lineTo(5.5, 4.5).strokeColor(BLACK).lineWidth(0.6).stroke();
  d.restore();
}

function drawRibbonIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save(); d.translate(x - 1, y - 4);
  d.moveTo(0.5, 0.5).lineTo(7.5, 0.5).lineTo(7.5, 6).lineTo(4, 4.5).lineTo(0.5, 6).closePath().strokeColor(BLACK).lineWidth(0.9).stroke();
  d.moveTo(2.5, 2.3).lineTo(5.5, 2.3).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.moveTo(2.5, 3.5).lineTo(5, 3.5).strokeColor(BLACK).lineWidth(0.7).stroke();
  d.restore();
}

function drawFolderIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save(); d.translate(x - 1, y - 4);
  d.moveTo(0.5, 1.5).lineTo(3, 1.5).lineTo(3.5, 3.5).lineTo(7.5, 3.5).lineTo(7.5, 8).lineTo(0.5, 8).closePath().strokeColor(BLACK).lineWidth(0.9).stroke();
  d.restore();
}

function drawSectionIcon(type: string, d: PDFKit.PDFDocument, x: number, y: number) {
  switch (type) {
    case "summary": drawDocIcon(d, x, y); break;
    case "skills": drawGearIcon(d, x, y); break;
    case "languages": drawGlobeSmallIcon(d, x, y); break;
    case "education": drawDiplomaIcon(d, x, y); break;
    case "certificates": drawRibbonIcon(d, x, y); break;
    case "projects": drawFolderIcon(d, x, y); break;
    default: { const s = 3.5; d.rect(x, y - s / 2, s, s).fill(BLACK); }
  }
}

function drawEmailIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save();
  d.translate(x, y);
  d.rect(0, 1, 5, 3.5).strokeColor(ORANGE).lineWidth(0.8).stroke();
  d.moveTo(0, 1).lineTo(2.5, 3).lineTo(5, 1).strokeColor(ORANGE).lineWidth(0.8).stroke();
  d.restore();
}

function drawPhoneIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save();
  d.translate(x, y);
  d.rect(1, 0.5, 3, 4.5).fill(ORANGE);
  d.rect(1.5, 0, 2, 0.8).fill(ORANGE);
  d.restore();
}

function drawLocationIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save();
  d.translate(x, y);
  d.circle(2.5, 1.8, 1.8).fill(ORANGE);
  d.restore();
}

function drawLinkedInIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save();
  d.font("Helvetica-Bold").fontSize(5.5).fillColor(ORANGE);
  d.text("in", x, y + 0.5);
  d.restore();
}

function drawGlobeIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save();
  d.translate(x, y);
  d.circle(2.5, 2.5, 2.2).strokeColor(ORANGE).lineWidth(0.7).stroke();
  d.moveTo(2.5, 0.3).lineTo(2.5, 4.7).strokeColor(ORANGE).lineWidth(0.7).stroke();
  d.moveTo(0.3, 2.5).lineTo(4.7, 2.5).strokeColor(ORANGE).lineWidth(0.7).stroke();
  d.restore();
}

function drawCakeIcon(d: PDFKit.PDFDocument, x: number, y: number) {
  d.save();
  d.translate(x, y);
  d.rect(0.5, 1.5, 4.5, 3).fill(ORANGE);
  d.rect(2, 0.3, 1, 1.2).fill(ORANGE);
  d.restore();
}

function drawIcon(type: string, d: PDFKit.PDFDocument, x: number, y: number) {
  switch (type) {
    case "email": drawEmailIcon(d, x, y); break;
    case "phone": drawPhoneIcon(d, x, y); break;
    case "location": drawLocationIcon(d, x, y); break;
    case "linkedin": drawLinkedInIcon(d, x, y); break;
    case "language": drawGlobeIcon(d, x, y); break;
    case "birthday": drawCakeIcon(d, x, y); break;
  }
}

export async function generatePdf(): Promise<Buffer> {
  // Resolve portrait path — works locally, gracefully falls back on Vercel
  let portraitPath: string | null = null;
  try {
    const fs = await import("fs");
    const p = path.resolve(process.cwd(), "src/assets/portrait.jpg");
    if (fs.existsSync(p)) portraitPath = p;
  } catch {}

  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: "A4",
      margins: { top: 0, bottom: 0, left: 0, right: 0 },
      info: { Title: `${PERSONAL.name} - CV`, Author: PERSONAL.name },
      autoFirstPage: true,
    });

    const chunks: Buffer[] = [];
    doc.on("data", (c: Buffer) => chunks.push(c));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // ── HEADER ───────────────────────────────────────────────────────────────

    let y = 28;

    // Headshot
    const HS_X = ML;
    const HS_SIZE = 67;
    const HS_Y = y;
    const HS_CX = HS_X + HS_SIZE / 2;
    const HS_CY = HS_Y + HS_SIZE / 2;
    const HS_ZOOM = 1.8;
    const HS_RENDER = HS_SIZE * HS_ZOOM;

    try {
      if (portraitPath) {
        doc.save();
        doc.circle(HS_CX, HS_CY, HS_SIZE / 2);
        doc.clip();
        doc.image(portraitPath, HS_CX - HS_RENDER / 2, HS_CY - HS_RENDER * 0.45, { width: HS_RENDER });
        doc.restore();
      } else {
        doc.circle(HS_CX, HS_CY, HS_SIZE / 2).fillColor("#E8E8E8").fill();
      }
    } catch {
      try { doc.restore(); } catch {}
      doc.circle(HS_CX, HS_CY, HS_SIZE / 2).fillColor("#E8E8E8").fill();
    }

    // Name
    const NAME_X = ML + HS_SIZE + 20;
    const NAME_W = ML + CW - NAME_X;

    doc.font("Times-Roman").fontSize(26.5).fillColor(BLACK);
    doc.text(PERSONAL.name, NAME_X, y + 6, { width: NAME_W });
    const nameBottom = doc.y;

    // Title
    doc.font("Times-Italic").fontSize(13.5).fillColor(GRAY);
    doc.text(PERSONAL.title, NAME_X, nameBottom + 2, { width: NAME_W });
    const titleBottom = doc.y;

    // Contact rows
    const contactRow1Y = titleBottom + 8;
    const contactGap = 16;

    const contacts: { type: string; text: string }[] = [
      { type: "email", text: PERSONAL.email },
      { type: "linkedin", text: "linkedin.com/in/hashini-gayathri" },
    ];

    let cx = NAME_X;
    contacts.forEach((item) => {
      drawIcon(item.type, doc, cx, contactRow1Y);
      cx += 7;
      doc.font("Helvetica").fontSize(7.5).fillColor(LIGHT);
      doc.text(item.text, cx, contactRow1Y, { width: 180 });
      const textW = doc.font("Helvetica").fontSize(7.5).widthOfString(item.text);
      if (item.type === "linkedin") {
        doc.link(cx, contactRow1Y - 1, Math.min(textW, 180), 9, PERSONAL.linkedin);
      }
      cx += Math.min(textW, 180) + contactGap + 6;
    });

    const headerBottom = contactRow1Y + 16;

    // Orange divider line
    drawSectionLine(doc, ML, headerBottom, CW);

    y = headerBottom + 14;

    // ── TWO COLUMN SECTIONS ──────────────────────────────────────────────────

    let yL = y;
    let yR = y;

    // ================================================================
    // LEFT COLUMN
    // ================================================================

    // --- SUMMARY ---
    yL = drawLeftSection(doc, yL, "summary", "SUMMARY");
    yL = wrap(doc, CV_SUMMARY, LEFT_X, yL, LEFT_W, 8.5, DARK, "Times-Roman") + 6;
    yL += 14;

    // --- SKILLS ---
    yL = drawLeftSection(doc, yL, "skills", "SKILLS");

    const skillCategories: { label: string; skills: string[] }[] = [
      { label: "Languages", skills: ["Python", "JavaScript", "C", "C++"] },
      { label: "Frontend", skills: ["React", "HTML", "CSS"] },
      { label: "Databases", skills: ["MySQL", "MongoDB"] },
      { label: "Machine Learning", skills: ["Data Analysis", "Machine Learning"] },
      { label: "Cloud & DevOps", skills: ["Docker", "Git", "GitHub", "Cloud Fundamentals"] },
      { label: "Cybersecurity", skills: ["Network Security", "Cryptography"] },
      { label: "Software Engineering", skills: ["OOP", "Software Design Principles"] },
      { label: "Tools", skills: ["Linux", "VS Code"] },
    ];

    skillCategories.forEach((cat) => {
      doc.font("Helvetica-Bold").fontSize(7.5).fillColor(BLACK);
      doc.text(cat.label + ":", LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 1;
      doc.font("Times-Roman").fontSize(8).fillColor(DARK);
      doc.text(cat.skills.join(", "), LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 4;
    });
    yL += 8;

    // --- LANGUAGES ---
    yL = drawLeftSection(doc, yL, "languages", "LANGUAGES");

    LANGUAGES.forEach((l) => {
      doc.font("Times-Roman").fontSize(8).fillColor(DARK);
      doc.text(l.language, LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 4;
    });

    yL += 14;

    // --- EDUCATION ---
    yL = drawLeftSection(doc, yL, "education", "EDUCATION");

    ACADEMIC.forEach((e, idx) => {
      doc.font("Times-Bold").fontSize(9).fillColor(BLACK);
      doc.text(e.topic, LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 1;

      doc.font("Times-Italic").fontSize(8).fillColor("#444444");
      doc.text(e.institution, LEFT_X, yL, { width: LEFT_W });
      yL = doc.y;

      doc.font("Helvetica").fontSize(7.5).fillColor(LIGHT);
      doc.text(`${e.badge}  |  Colombo, Sri Lanka`, LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 2;

      yL += idx < ACADEMIC.length - 1 ? 8 : 12;
    });

    // --- CERTIFICATES ---
    yL = drawLeftSection(doc, yL, "certificates", "CERTIFICATES");

    CERTS.forEach((c) => {
      doc.font("Times-Roman").fontSize(7.5).fillColor(DARK);
      doc.text(c.name, LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 4;
    });

    // ================================================================
    // RIGHT COLUMN
    // ================================================================

    // --- PROJECTS ---
    yR = drawRightSection(doc, yR, "projects", "PROJECTS");

    EXPERIENCE.forEach((job, idx) => {
      doc.font("Times-Bold").fontSize(10).fillColor(BLACK);
      doc.text(job.title, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y + 1;

      doc.font("Times-Italic").fontSize(8.5).fillColor("#444444");
      doc.text(job.company, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y;

      yR += 1;

      job.bullets.forEach((b) => {
        drawBullet(doc, RIGHT_X + 3, yR + 3);
        doc.font("Times-Roman").fontSize(8).fillColor(DARK);
        doc.text(b, RIGHT_X + 12, yR, { width: RIGHT_W - 12 });
        yR = doc.y + 4;
      });

      yR += idx < EXPERIENCE.length - 1 ? 8 : 12;
    });

    // ── FOOTER ───────────────────────────────────────────────────────────────

    const footerY = PAGE_H - 24;
    drawSectionLine(doc, ML, footerY, 80);
    doc.font("Helvetica").fontSize(7).fillColor("#999999");
    doc.text(`${PERSONAL.name}  -  ${PERSONAL.email}`, ML, footerY + 5, { width: CW, align: "center" });

    doc.end();

    // ── HELPERS ────────────────────────────────────────────────────────────

    function drawLeftSection(d: PDFKit.PDFDocument, yy: number, icon: string, title: string): number {
      drawSectionIcon(icon, d, LEFT_X, yy + 4);
      d.font("Helvetica-Bold").fontSize(9).fillColor(BLACK);
      d.text(title, LEFT_X + 14, yy, { width: LEFT_W - 14 });
      yy = d.y + 3;
      const lineW = Math.min(110, LEFT_W);
      drawSectionLine(d, LEFT_X, yy, lineW);
      yy += 10;
      return yy;
    }

    function drawRightSection(d: PDFKit.PDFDocument, yy: number, icon: string, title: string): number {
      drawSectionIcon(icon, d, RIGHT_X, yy + 4);
      d.font("Helvetica-Bold").fontSize(9).fillColor(BLACK);
      d.text(title, RIGHT_X + 14, yy, { width: RIGHT_W - 14 });
      yy = d.y + 3;
      const lineW = Math.min(160, RIGHT_W);
      drawSectionLine(d, RIGHT_X, yy, lineW);
      yy += 10;
      return yy;
    }
  });
}
