const { Document, Packer, Paragraph, TextRun } = require("docx");

function generateDocx(resume) {
  const sections = [];

  // Personal Details Section
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

  // skillssections

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: sections.flat(),
      },
    ],
  });

  return Packer.toBlob(doc);
}

module.exports = generateDocx;
