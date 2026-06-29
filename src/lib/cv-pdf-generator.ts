import PDFDocument from "pdfkit";
import * as fs from "fs";
import * as path from "path";
import { PERSONAL, ACADEMIC, SKILL_CARDS, CERTS, CV_SUMMARY, EXPERIENCE, LANGUAGES } from "./data";

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

function drawSectionIcon(doc: PDFKit.PDFDocument, x: number, y: number) {
  const s = 3.5;
  doc.rect(x, y - s / 2, s, s).fill(BLACK);
}

function drawContactDot(doc: PDFKit.PDFDocument, x: number, y: number) {
  doc.circle(x, y - 2, 1.8).fill(ORANGE);
}

export async function generatePdf(): Promise<Buffer> {
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

    try {
      const imgPath = path.resolve(process.cwd(), "src/assets/portrait.jpg");
      if (fs.existsSync(imgPath)) {
        doc.save();
        doc.circle(HS_X + HS_SIZE / 2, HS_Y + HS_SIZE / 2, HS_SIZE / 2);
        doc.clip();
        doc.image(imgPath, HS_X, HS_Y, { width: HS_SIZE, height: HS_SIZE });
        doc.restore();
      } else {
        doc.circle(HS_X + HS_SIZE / 2, HS_Y + HS_SIZE / 2, HS_SIZE / 2).fillColor("#E8E8E8").fill();
      }
    } catch {
      doc.circle(HS_X + HS_SIZE / 2, HS_Y + HS_SIZE / 2, HS_SIZE / 2).fillColor("#E8E8E8").fill();
    }

    // Name
    const NAME_X = ML + HS_SIZE + 20;
    const NAME_W = ML + CW - NAME_X;

    doc.font("Times-Roman").fontSize(26).fillColor(BLACK);
    doc.text(PERSONAL.name, NAME_X, y + 6, { width: NAME_W });
    const nameBottom = doc.y;

    // Title
    doc.font("Times-Italic").fontSize(13).fillColor(GRAY);
    doc.text(PERSONAL.title, NAME_X, nameBottom + 2, { width: NAME_W });
    const titleBottom = doc.y;

    // Contact rows
    const contactRow1Y = titleBottom + 8;
    const contactRow2Y = contactRow1Y + 11;
    const contactGap = 16;

    const contacts1 = [
      PERSONAL.email,
      PERSONAL.phone,
      PERSONAL.location,
    ];

    const contacts2 = [
      "linkedin.com/in/hashini-gayathri",
      "Sinhala / English",
      PERSONAL.birthday,
    ];

    const renderContactRow = (items: string[], rowY: number) => {
      let cx = NAME_X;
      items.forEach((item, i) => {
        drawContactDot(doc, cx, rowY + 2.5);
        cx += 6;
        doc.font("Helvetica").fontSize(7).fillColor(LIGHT);
        doc.text(item, cx, rowY, { width: 120 });
        const textW = doc.font("Helvetica").fontSize(7).widthOfString(item);
        cx += Math.min(textW, 120) + contactGap;
        if (i < items.length - 1) {
          cx += 2;
        }
      });
    };

    renderContactRow(contacts1, contactRow1Y);
    renderContactRow(contacts2, contactRow2Y);

    const headerBottom = contactRow2Y + 16;

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
    yL = drawLeftSection(doc, yL, "SUMMARY");
    yL = wrap(doc, CV_SUMMARY, LEFT_X, yL, LEFT_W, 8, DARK, "Times-Roman") + 6;
    yL += 14;

    // --- SKILLS ---
    yL = drawLeftSection(doc, yL, "SKILLS");

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
      doc.font("Helvetica-Bold").fontSize(7).fillColor(BLACK);
      doc.text(cat.label + ":", LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 1;
      doc.font("Times-Roman").fontSize(7.5).fillColor(DARK);
      doc.text(cat.skills.join(", "), LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 4;
    });
    yL += 8;

    // --- LANGUAGES ---
    yL = drawLeftSection(doc, yL, "LANGUAGES");

    LANGUAGES.forEach((l) => {
      const label = `${l.language}: `;
      doc.font("Times-Bold").fontSize(7.5).fillColor(BLACK);
      const labelW = doc.widthOfString(label);
      doc.text(label, LEFT_X, yL, { width: LEFT_W, continued: false });
      doc.font("Times-Roman").fontSize(7.5).fillColor(GRAY);
      doc.text(l.level, LEFT_X + labelW, yL, { width: LEFT_W - labelW });
      yL = doc.y + 4;
    });

    yL += 14;

    // --- CERTIFICATES ---
    yL = drawLeftSection(doc, yL, "CERTIFICATES");

    CERTS.forEach((c) => {
      doc.font("Times-Roman").fontSize(7.5).fillColor(DARK);
      doc.text(c.name, LEFT_X, yL, { width: LEFT_W });
      yL = doc.y + 5;
    });

    // ================================================================
    // RIGHT COLUMN
    // ================================================================

    // --- PROJECTS ---
    yR = drawRightSection(doc, yR, "PROJECTS");

    EXPERIENCE.forEach((job, idx) => {
      doc.font("Times-Bold").fontSize(9.5).fillColor(BLACK);
      doc.text(job.title, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y + 1;

      doc.font("Times-Italic").fontSize(8).fillColor("#444444");
      doc.text(job.company, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y;

      yR += 1;

      job.bullets.forEach((b) => {
        drawBullet(doc, RIGHT_X + 3, yR + 3);
        doc.font("Times-Roman").fontSize(7.5).fillColor(DARK);
        doc.text(b, RIGHT_X + 12, yR, { width: RIGHT_W - 12 });
        yR = doc.y + 4;
      });

      yR += idx < EXPERIENCE.length - 1 ? 8 : 12;
    });

    // --- EDUCATION ---
    yR = drawRightSection(doc, yR, "EDUCATION");

    ACADEMIC.forEach((e, idx) => {
      doc.font("Times-Bold").fontSize(9).fillColor(BLACK);
      doc.text(e.topic, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y + 1;

      doc.font("Times-Italic").fontSize(7.5).fillColor("#444444");
      doc.text(e.institution, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y;

      doc.font("Helvetica").fontSize(7).fillColor(LIGHT);
      doc.text(`${e.badge}  |  Colombo, Sri Lanka`, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y + 2;

      doc.font("Times-Roman").fontSize(7.5).fillColor(DARK);
      doc.text(e.description, RIGHT_X, yR, { width: RIGHT_W });
      yR = doc.y + 14;
    });

    // ── FOOTER ───────────────────────────────────────────────────────────────

    const footerY = PAGE_H - 24;
    drawSectionLine(doc, ML, footerY, 80);
    doc.font("Helvetica").fontSize(6.5).fillColor("#999999");
    doc.text(`${PERSONAL.name}  -  ${PERSONAL.email}  -  ${PERSONAL.phone}`, ML, footerY + 5, { width: CW, align: "center" });

    doc.end();

    // ── HELPERS ────────────────────────────────────────────────────────────

    function drawLeftSection(d: PDFKit.PDFDocument, yy: number, title: string): number {
      drawSectionIcon(d, LEFT_X, yy + 4);
      d.font("Helvetica-Bold").fontSize(8.5).fillColor(BLACK);
      d.text(title, LEFT_X + 10, yy, { width: LEFT_W - 10 });
      yy = d.y + 3;
      const lineW = Math.min(110, LEFT_W);
      drawSectionLine(d, LEFT_X, yy, lineW);
      yy += 10;
      return yy;
    }

    function drawRightSection(d: PDFKit.PDFDocument, yy: number, title: string): number {
      drawSectionIcon(d, RIGHT_X, yy + 4);
      d.font("Helvetica-Bold").fontSize(8.5).fillColor(BLACK);
      d.text(title, RIGHT_X + 10, yy, { width: RIGHT_W - 10 });
      yy = d.y + 3;
      const lineW = Math.min(160, RIGHT_W);
      drawSectionLine(d, RIGHT_X, yy, lineW);
      yy += 10;
      return yy;
    }
  });
}
