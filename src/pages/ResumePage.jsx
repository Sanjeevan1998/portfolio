import React from 'react';

function ResumePage() {
  const technicalResumeUrl = '/resumes/TechnicalResume.pdf';
  const nonTechnicalResumeUrl = '/resumes/NonTechnicalResume.pdf';

  return (
    <section>
      <h1>Resumes</h1>
      <p style={{ marginBottom: '2.5rem', fontSize: '1.05em', color: '#b0b0b0' }}>
        Choose to view the resume directly in your browser (opens new tab) or download the file.
      </p>

      {/* Technical Resume Section */}
      <div style={resumeSectionStyle}>
        <h2>Technical Resume</h2>
        <p style={resumeDescriptionStyle}>Focuses on detailed technical experience, projects, and software engineering skills.</p>
        <div style={buttonGroupStyle}>
          {/* View Button */}
          <a
            href={technicalResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-style" // ADDED CLASS
            // style={resumeButtonStyle} // REMOVED INLINE STYLE
          >
            View Resume
          </a>
          {/* Download Button */}
          <a
            href={technicalResumeUrl}
            download="TechnicalResume.pdf"
            className="button-style" // ADDED CLASS
            // style={resumeButtonStyle} // REMOVED INLINE STYLE
          >
            Download (PDF)
          </a>
        </div>
      </div>

      {/* Non-Technical Resume Section */}
      <div style={resumeSectionStyle}>
        <h2>Non-Technical Resume</h2>
        <p style={resumeDescriptionStyle}>Highlights skills, philosophy, creative work, and experiences relevant beyond pure coding.</p>
        <div style={buttonGroupStyle}>
          {/* View Button */}
          <a
            href={nonTechnicalResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-style" // ADDED CLASS
            // style={resumeButtonStyle} // REMOVED INLINE STYLE
          >
            View Resume
          </a>
          {/* Download Button */}
          <a
            href={nonTechnicalResumeUrl}
            download="NonTechnicalResume.pdf"
            className="button-style" // ADDED CLASS
            // style={resumeButtonStyle} // REMOVED INLINE STYLE
          >
            Download (PDF)
          </a>
        </div>
      </div>

      <p style={{marginTop: '3rem', fontSize: '0.9em', color: '#888'}}>
        <em>(Ensure PDF files exist at `/public/resumes/TechnicalResume.pdf` and `/public/resumes/NonTechnicalResume.pdf`)</em>
      </p>
    </section>
  );
}

// --- Styles previously defined inline can be kept or moved to CSS ---
const resumeSectionStyle = {
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: '1.5rem',
  marginBottom: '2.5rem',
};
const resumeDescriptionStyle = {
    fontSize: '0.95em',
    color: '#a0a0a0',
    marginBottom: '1.5rem',
};
const buttonGroupStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
};
// const resumeButtonStyle = { ... }; // REMOVED - Styles now handled by .button-style class in CSS

export default ResumePage;