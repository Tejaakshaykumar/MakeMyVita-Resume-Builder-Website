import React from "react";

function Howitworks() {
  return (
    <div className="container">
      <div className="page-header">
        <h1 id="timeline" style={{textAlign:'center',fontFamily:'sans-serif'}}>How to build a resume</h1>
        <p style={{textAlign:'center',fontSize:'1.2rem'}}>The resume building process is simple and intuitive:few easy steps
            is all it takes to get from start to finish.Resume writing can be time-consuming.
            so our resume tool and guides are designed to save as much of your time as possible.
        </p>
      </div>
      <ul className="timeline">
        <li>
          <div className="timeline-badge">
            <i className="bi bi-file-earmark-person-fill"></i>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Begin with choosing a template</h4>
            </div>
            <div className="timeline-body">
              <p>
                Find one of our eligent,expertly crafted templates that suits
                your taste, profession and employer's image. Choose an accent
                color to grab the reader's attention. We have serveral resume
                templates to choose from, depending on your sensibility ,visual
                demands and industry.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-badge warning">
          <i class="bi bi-info-circle-fill"></i>
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Add your personal info</h4>
            </div>
            <div className="timeline-body">
              <p>
                Fill in your contact information so that your resume performs as
                you rpersonal ambassador. Never worry about about it getting
                lost among other candidates .we provide encrypted data
                protection to ensure your privacy and the safty of your
                information.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge danger">
            <i className="glyphicon glyphicon-credit-card" />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
            <i class="bi bi-sign-intersection-fill"></i>
              <h4 className="timeline-title">Fill in the sections</h4>
            </div>
            <div className="timeline-body">
              <p>
                Fill in your professional summary Add your work experience,
                education, and skills. Enhance your resume by including
                additional sections such as certifications, awards, projects,
                and volunteer work. This helps showcase your full range of
                qualifications.
              </p>
            </div>
          </div>
        </li>
        <li className="timeline-inverted">
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">Customize</h4>
            </div>
            <div className="timeline-body">
              <p>
                Your resume is not just a document; it's a reflection of your
                personality and professionalism. With our resume builder
                MakeMyVita, you have full control over the design to ensure your
                resume stands out. Customize fonts, colors, and layouts to
                create a document that truly represents you.
              </p>
            </div>
          </div>
        </li>
        <li>
          <div className="timeline-badge info">
            <i className="glyphicon glyphicon-floppy-disk" />
          </div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <h4 className="timeline-title">
                Download in multiple file formats
              </h4>
            </div>
            <div className="timeline-body">
              <p>
                MakeMyVita provides you with the flexibility to download your
                resume in multiple formats to suit your needs. Whether you need
                a high-quality print version, a plain text file for easy
                editing, or an image for online use, we've got you covered.
                Available Export Formats: PDF: Perfect for professional
                presentations and high-quality prints. TXT: Simple text file for
                easy editing and customization. PNG: High-resolution image for
                use in online portfolios or applications. JPG: Widely supported
                image format suitable for various digital platforms.
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Howitworks;
