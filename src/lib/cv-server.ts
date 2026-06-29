import { createServerFn } from "@tanstack/react-start";
import { generatePdf } from "./cv-pdf-generator";

export const fetchCv = createServerFn({ method: "POST" })
  .handler(async () => {
    const pdf = await generatePdf();

    return {
      type: "pdf" as const,
      data: pdf.toString("base64"),
      filename: "Hashini_Gayathri_CV.pdf",
    };
  });
