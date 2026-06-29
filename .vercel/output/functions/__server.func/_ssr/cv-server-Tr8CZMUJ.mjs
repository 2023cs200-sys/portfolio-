import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import { a as EXPERIENCE, c as PERSONAL, i as CV_SUMMARY, n as CERTS, s as LANGUAGES, t as ACADEMIC } from "./data-oqjrdtCh.mjs";
import { t as PDFDocument } from "../_libs/pdfkit+png-js.mjs";
import * as fs$1 from "fs";
import * as path from "path";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-server-Tr8CZMUJ.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var PAGE_W = 595.28;
var PAGE_H = 841.89;
var ML = 36;
var CW = PAGE_W - ML - 36;
var COL_L = .33;
var COL_GAP = 22;
var LEFT_W = CW * COL_L;
var RIGHT_W = CW - LEFT_W - COL_GAP;
var LEFT_X = ML;
var RIGHT_X = 230.6824;
var ORANGE = "#D88A1F";
var BLACK = "#222222";
var DARK = "#333333";
var GRAY = "#555555";
var LIGHT = "#666666";
function wrap(doc, text, x, y, w, size, color, font = "Times-Roman") {
	doc.font(font).fontSize(size).fillColor(color);
	doc.text(text, x, y, {
		width: w,
		lineBreak: true
	});
	return doc.y;
}
function drawSectionLine(doc, x, y, w) {
	doc.moveTo(x, y).lineTo(x + w, y).strokeColor(ORANGE).lineWidth(2).stroke();
}
function drawBullet(doc, x, y) {
	doc.circle(x, y - 2, 1.5).fill(BLACK);
}
function drawDocIcon(d, x, y) {
	d.save();
	d.translate(x - 1, y - 4);
	d.rect(.5, 0, 7, 9).strokeColor(BLACK).lineWidth(.9).stroke();
	d.moveTo(2, 3).lineTo(6, 3).strokeColor(BLACK).lineWidth(.7).stroke();
	d.moveTo(2, 5.5).lineTo(6, 5.5).strokeColor(BLACK).lineWidth(.7).stroke();
	d.moveTo(2, 8).lineTo(5, 8).strokeColor(BLACK).lineWidth(.7).stroke();
	d.restore();
}
function drawGearIcon(d, x, y) {
	d.save();
	d.translate(x - 1, y - 4);
	d.circle(4, 4.5, 3.2).strokeColor(BLACK).lineWidth(.9).stroke();
	d.circle(4, 4.5, 1.3).fill(BLACK);
	d.restore();
}
function drawGlobeSmallIcon(d, x, y) {
	d.save();
	d.translate(x - 1, y - 4);
	d.circle(4, 4.5, 3.5).strokeColor(BLACK).lineWidth(.8).stroke();
	d.moveTo(4, 1).lineTo(4, 8).strokeColor(BLACK).lineWidth(.7).stroke();
	d.moveTo(.5, 4.5).lineTo(7.5, 4.5).strokeColor(BLACK).lineWidth(.7).stroke();
	d.restore();
}
function drawDiplomaIcon(d, x, y) {
	d.save();
	d.translate(x - 1, y - 4);
	d.rect(.5, 1.5, 7, 5.5).strokeColor(BLACK).lineWidth(.9).stroke();
	d.moveTo(.5, 1.5).lineTo(8, 5.5).lineTo(.5, 7).strokeColor(BLACK).lineWidth(.9).stroke();
	d.moveTo(1.5, 3).lineTo(6, 3).strokeColor(BLACK).lineWidth(.6).stroke();
	d.moveTo(1.5, 4.5).lineTo(5.5, 4.5).strokeColor(BLACK).lineWidth(.6).stroke();
	d.restore();
}
function drawRibbonIcon(d, x, y) {
	d.save();
	d.translate(x - 1, y - 4);
	d.moveTo(.5, .5).lineTo(7.5, .5).lineTo(7.5, 6).lineTo(4, 4.5).lineTo(.5, 6).closePath().strokeColor(BLACK).lineWidth(.9).stroke();
	d.moveTo(2.5, 2.3).lineTo(5.5, 2.3).strokeColor(BLACK).lineWidth(.7).stroke();
	d.moveTo(2.5, 3.5).lineTo(5, 3.5).strokeColor(BLACK).lineWidth(.7).stroke();
	d.restore();
}
function drawFolderIcon(d, x, y) {
	d.save();
	d.translate(x - 1, y - 4);
	d.moveTo(.5, 1.5).lineTo(3, 1.5).lineTo(3.5, 3.5).lineTo(7.5, 3.5).lineTo(7.5, 8).lineTo(.5, 8).closePath().strokeColor(BLACK).lineWidth(.9).stroke();
	d.restore();
}
function drawSectionIcon(type, d, x, y) {
	switch (type) {
		case "summary":
			drawDocIcon(d, x, y);
			break;
		case "skills":
			drawGearIcon(d, x, y);
			break;
		case "languages":
			drawGlobeSmallIcon(d, x, y);
			break;
		case "education":
			drawDiplomaIcon(d, x, y);
			break;
		case "certificates":
			drawRibbonIcon(d, x, y);
			break;
		case "projects":
			drawFolderIcon(d, x, y);
			break;
		default: {
			const s = 3.5;
			d.rect(x, y - s / 2, s, s).fill(BLACK);
		}
	}
}
function drawEmailIcon(d, x, y) {
	d.save();
	d.translate(x, y);
	d.rect(0, 1, 5, 3.5).strokeColor(ORANGE).lineWidth(.8).stroke();
	d.moveTo(0, 1).lineTo(2.5, 3).lineTo(5, 1).strokeColor(ORANGE).lineWidth(.8).stroke();
	d.restore();
}
function drawPhoneIcon(d, x, y) {
	d.save();
	d.translate(x, y);
	d.rect(1, .5, 3, 4.5).fill(ORANGE);
	d.rect(1.5, 0, 2, .8).fill(ORANGE);
	d.restore();
}
function drawLocationIcon(d, x, y) {
	d.save();
	d.translate(x, y);
	d.circle(2.5, 1.8, 1.8).fill(ORANGE);
	d.restore();
}
function drawLinkedInIcon(d, x, y) {
	d.save();
	d.font("Helvetica-Bold").fontSize(5.5).fillColor(ORANGE);
	d.text("in", x, y + .5);
	d.restore();
}
function drawGlobeIcon(d, x, y) {
	d.save();
	d.translate(x, y);
	d.circle(2.5, 2.5, 2.2).strokeColor(ORANGE).lineWidth(.7).stroke();
	d.moveTo(2.5, .3).lineTo(2.5, 4.7).strokeColor(ORANGE).lineWidth(.7).stroke();
	d.moveTo(.3, 2.5).lineTo(4.7, 2.5).strokeColor(ORANGE).lineWidth(.7).stroke();
	d.restore();
}
function drawCakeIcon(d, x, y) {
	d.save();
	d.translate(x, y);
	d.rect(.5, 1.5, 4.5, 3).fill(ORANGE);
	d.rect(2, .3, 1, 1.2).fill(ORANGE);
	d.restore();
}
function drawIcon(type, d, x, y) {
	switch (type) {
		case "email":
			drawEmailIcon(d, x, y);
			break;
		case "phone":
			drawPhoneIcon(d, x, y);
			break;
		case "location":
			drawLocationIcon(d, x, y);
			break;
		case "linkedin":
			drawLinkedInIcon(d, x, y);
			break;
		case "language":
			drawGlobeIcon(d, x, y);
			break;
		case "birthday":
			drawCakeIcon(d, x, y);
			break;
	}
}
async function generatePdf() {
	return new Promise((resolve, reject) => {
		const doc = new PDFDocument({
			size: "A4",
			margins: {
				top: 0,
				bottom: 0,
				left: 0,
				right: 0
			},
			info: {
				Title: `${PERSONAL.name} - CV`,
				Author: PERSONAL.name
			},
			autoFirstPage: true
		});
		const chunks = [];
		doc.on("data", (c) => chunks.push(c));
		doc.on("end", () => resolve(Buffer.concat(chunks)));
		doc.on("error", reject);
		let y = 28;
		const HS_SIZE = 67;
		const HS_Y = y;
		const HS_CX = 69.5;
		const HS_CY = HS_Y + HS_SIZE / 2;
		const HS_RENDER = HS_SIZE * 1.8;
		const headshotPath = [path.resolve(process.cwd(), "public/portrait.jpg"), path.resolve(process.cwd(), "src/assets/portrait.jpg")].find((p) => {
			try {
				return fs$1.existsSync(p);
			} catch {
				return false;
			}
		});
		if (headshotPath) try {
			doc.save();
			doc.circle(HS_CX, HS_CY, HS_SIZE / 2);
			doc.clip();
			doc.image(headshotPath, HS_CX - HS_RENDER / 2, HS_CY - HS_RENDER * .45, { width: HS_RENDER });
			doc.restore();
		} catch {
			doc.circle(HS_CX, HS_CY, HS_SIZE / 2).fillColor("#E8E8E8").fill();
		}
		else doc.circle(HS_CX, HS_CY, HS_SIZE / 2).fillColor("#E8E8E8").fill();
		const NAME_X = 123;
		const NAME_W = 559.28 - NAME_X;
		doc.font("Times-Roman").fontSize(26.5).fillColor(BLACK);
		doc.text(PERSONAL.name, NAME_X, y + 6, { width: NAME_W });
		const nameBottom = doc.y;
		doc.font("Times-Italic").fontSize(13.5).fillColor(GRAY);
		doc.text(PERSONAL.title, NAME_X, nameBottom + 2, { width: NAME_W });
		const contactRow1Y = doc.y + 8;
		const contactGap = 16;
		const contacts = [{
			type: "email",
			text: PERSONAL.email
		}, {
			type: "linkedin",
			text: "linkedin.com/in/hashini-gayathri"
		}];
		let cx = NAME_X;
		contacts.forEach((item) => {
			drawIcon(item.type, doc, cx, contactRow1Y);
			cx += 7;
			doc.font("Helvetica").fontSize(7.5).fillColor(LIGHT);
			doc.text(item.text, cx, contactRow1Y, { width: 180 });
			const textW = doc.font("Helvetica").fontSize(7.5).widthOfString(item.text);
			if (item.type === "linkedin") doc.link(cx, contactRow1Y - 1, Math.min(textW, 180), 9, PERSONAL.linkedin);
			cx += Math.min(textW, 180) + contactGap + 6;
		});
		const headerBottom = contactRow1Y + 16;
		drawSectionLine(doc, ML, headerBottom, CW);
		y = headerBottom + 14;
		let yL = y;
		let yR = y;
		yL = drawLeftSection(doc, yL, "summary", "SUMMARY");
		yL = wrap(doc, CV_SUMMARY, LEFT_X, yL, LEFT_W, 8.5, DARK, "Times-Roman") + 6;
		yL += 14;
		yL = drawLeftSection(doc, yL, "skills", "SKILLS");
		[
			{
				label: "Languages",
				skills: [
					"Python",
					"JavaScript",
					"C",
					"C++"
				]
			},
			{
				label: "Frontend",
				skills: [
					"React",
					"HTML",
					"CSS"
				]
			},
			{
				label: "Databases",
				skills: ["MySQL", "MongoDB"]
			},
			{
				label: "Machine Learning",
				skills: ["Data Analysis", "Machine Learning"]
			},
			{
				label: "Cloud & DevOps",
				skills: [
					"Docker",
					"Git",
					"GitHub",
					"Cloud Fundamentals"
				]
			},
			{
				label: "Cybersecurity",
				skills: ["Network Security", "Cryptography"]
			},
			{
				label: "Software Engineering",
				skills: ["OOP", "Software Design Principles"]
			},
			{
				label: "Tools",
				skills: ["Linux", "VS Code"]
			}
		].forEach((cat) => {
			doc.font("Helvetica-Bold").fontSize(7.5).fillColor(BLACK);
			doc.text(cat.label + ":", LEFT_X, yL, { width: LEFT_W });
			yL = doc.y + 1;
			doc.font("Times-Roman").fontSize(8).fillColor(DARK);
			doc.text(cat.skills.join(", "), LEFT_X, yL, { width: LEFT_W });
			yL = doc.y + 4;
		});
		yL += 8;
		yL = drawLeftSection(doc, yL, "languages", "LANGUAGES");
		LANGUAGES.forEach((l) => {
			doc.font("Times-Roman").fontSize(8).fillColor(DARK);
			doc.text(l.language, LEFT_X, yL, { width: LEFT_W });
			yL = doc.y + 4;
		});
		yL += 14;
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
		yL = drawLeftSection(doc, yL, "certificates", "CERTIFICATES");
		CERTS.forEach((c) => {
			doc.font("Times-Roman").fontSize(7.5).fillColor(DARK);
			doc.text(c.name, LEFT_X, yL, { width: LEFT_W });
			yL = doc.y + 4;
		});
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
				drawBullet(doc, 233.6824, yR + 3);
				doc.font("Times-Roman").fontSize(8).fillColor(DARK);
				doc.text(b, 242.6824, yR, { width: RIGHT_W - 12 });
				yR = doc.y + 4;
			});
			yR += idx < EXPERIENCE.length - 1 ? 8 : 12;
		});
		drawSectionLine(doc, ML, PAGE_H - 24, 80);
		doc.font("Helvetica").fontSize(7).fillColor("#999999");
		doc.text(`${PERSONAL.name}  -  ${PERSONAL.email}`, ML, 822.89, {
			width: CW,
			align: "center"
		});
		doc.end();
		function drawLeftSection(d, yy, icon, title) {
			drawSectionIcon(icon, d, LEFT_X, yy + 4);
			d.font("Helvetica-Bold").fontSize(9).fillColor(BLACK);
			d.text(title, 50, yy, { width: LEFT_W - 14 });
			yy = d.y + 3;
			drawSectionLine(d, LEFT_X, yy, Math.min(110, LEFT_W));
			yy += 10;
			return yy;
		}
		function drawRightSection(d, yy, icon, title) {
			drawSectionIcon(icon, d, RIGHT_X, yy + 4);
			d.font("Helvetica-Bold").fontSize(9).fillColor(BLACK);
			d.text(title, 244.6824, yy, { width: RIGHT_W - 14 });
			yy = d.y + 3;
			drawSectionLine(d, RIGHT_X, yy, Math.min(160, RIGHT_W));
			yy += 10;
			return yy;
		}
	});
}
var fetchCv_createServerFn_handler = createServerRpc({
	id: "3eb93f6e52ddcffb548a468613de7331dd05109ff389621135071829b9ed3947",
	name: "fetchCv",
	filename: "src/lib/cv-server.ts"
}, (opts) => fetchCv.__executeServer(opts));
var fetchCv = createServerFn({ method: "GET" }).handler(fetchCv_createServerFn_handler, async () => {
	return {
		type: "pdf",
		data: (await generatePdf()).toString("base64"),
		filename: "Hashini_Gayathri_CV.pdf"
	};
});
//#endregion
export { fetchCv_createServerFn_handler };
