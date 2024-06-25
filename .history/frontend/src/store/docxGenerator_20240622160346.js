const { Document, Packer, Paragraph, TextRun } = require("docx");
import { saveAs } from "file-saver";

function generateDocx(resume) {
  const sections = [];

  // Personal Details Section
  if (resume.personalDetails) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Personal Details",
            bold: true,
            size: 24,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Name: ${resume.personalDetails.firstName} ${resume.personalDetails.lastName}`,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Professional Email: ${resume.personalDetails.professionalEmail}`,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Phone: ${resume.personalDetails.phone}`,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `City: ${resume.personalDetails.city}, State: ${resume.personalDetails.state}, Country: ${resume.personalDetails.country}`,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `Website: ${resume.personalDetails.website}`,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `LinkedIn: ${resume.personalDetails.linkedin}`,
          }),
        ],
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: `GitHub: ${resume.personalDetails.github}`,
          }),
        ],
      })
    );
  }

  // Education Details Section
  if (resume.educationDetails && resume.educationDetails.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Education Details",
            bold: true,
            size: 24,
          }),
        ],
      }),
      ...resume.educationDetails.map((edu) => [
        new Paragraph({
          children: [
            new TextRun({
              text: `Institute: ${edu.instituteName}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Degree: ${edu.degree}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Field of Study: ${edu.fieldOfStudy}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Graduation Year: ${edu.graduationYear}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `CGPA: ${edu.cgpa}`,
            }),
          ],
        }),
      ])
    );
  }

  // Experience Section
  if (resume.experienceDetails && resume.experienceDetails.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Experience",
            bold: true,
            size: 24,
          }),
        ],
      }),
      ...resume.experienceDetails.map((exp) => [
        new Paragraph({
          children: [
            new TextRun({
              text: `Company: ${exp.companyName}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Job Title: ${exp.jobTitle}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Job Description: ${exp.jobDescription}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Start Date: ${exp.startDate}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `End Date: ${exp.endDate}`,
            }),
          ],
        }),
      ])
    );
  }

  // Project Details Section
  if (resume.projectDetails && resume.projectDetails.length > 0) {
    sections.push(
      new Paragraph({
        children: [
          new TextRun({
            text: "Projects",
            bold: true,
            size: 24,
          }),
        ],
      }),
      ...resume.projectDetails.map((project) => [
        new Paragraph({
          children: [
            new TextRun({
              text: `Project Name: ${project.projectName}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Project Description: ${project.projectDescription}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Project Link: ${project.projectLink}`,
            }),
          ],
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: `Submit Date: ${project.submitDate}`,
            }),
          ],
        }),
      ])
    );
  }

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: sections.flat(),
      },
    ],
  });
  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "resume.docx");
  });
}

module.exports = generateDocx;
