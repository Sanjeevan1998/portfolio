import React from 'react';

function ContactPage() {
  // Your actual contact details
  const userEmail = "sanjeevan.adhikari@gmail.com";
  const userLinkedIn = "https://www.linkedin.com/in/sanjeevan-adhikari/";
  const userGitHub = "https://github.com/Sanjeevan1998"; // Added GitHub URL

  // Function to extract the profile part of the LinkedIn URL for display
  const getLinkedInDisplay = (url) => {
    try {
      const path = new URL(url).pathname;
      return `linkedin.com${path.replace(/\/$/, '')}`; // Remove trailing slash if exists
    } catch (e) {
      return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, ""); // Basic fallback
    }
  };

  // Function to extract the profile part of the GitHub URL for display
  const getGitHubDisplay = (url) => {
     try {
      const path = new URL(url).pathname;
      return `github.com${path.replace(/\/$/, '')}`; // Remove trailing slash if exists
    } catch (e) {
       return url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").replace(/\/$/, ""); // Basic fallback
    }
  }

  return (
    <section>
      <h1>Contact Me</h1>
      <p style={{ marginBottom: '2rem', fontSize: '1.1em', color: '#b0b0b0', textAlign: 'center' }}>
      I'm always open to discussing new projects, creative ideas, or opportunities to be part of ambitious visions. <br></br>Feel free to reach out!
      </p>

      <div style={{
          display: 'flex',
          flexDirection: 'column', // Stack items vertically
          alignItems: 'center', // Center items horizontally
          gap: '1rem', // Space between items
          marginTop: '2rem'
       }}>

        {/* Email */}
        <div style={{ textAlign: 'center' }}>
          <strong style={{ color: '#c0c0c0' }}>Email:</strong><br /> {/* Label */}
          <a
            href={`mailto:${userEmail}`}
            style={{ fontSize: '1.1em', wordBreak: 'break-all' }} // Ensure long emails wrap if needed
          >
            {userEmail}
          </a>
        </div>

        {/* LinkedIn */}
        <div style={{ textAlign: 'center' }}>
           <strong style={{ color: '#c0c0c0' }}>LinkedIn:</strong><br /> {/* Label */}
          <a
            href={userLinkedIn}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            style={{ fontSize: '1.1em' }}
          >
            {getLinkedInDisplay(userLinkedIn)} {/* Display cleaner link text */}
          </a>
        </div>

        {/* GitHub --- ADDED HERE --- */}
        <div style={{ textAlign: 'center' }}>
           <strong style={{ color: '#c0c0c0' }}>GitHub:</strong><br /> {/* Label */}
          <a
            href={userGitHub}
            target="_blank" // Open in new tab
            rel="noopener noreferrer" // Security best practice
            style={{ fontSize: '1.1em' }}
          >
            {getGitHubDisplay(userGitHub)} {/* Display cleaner link text */}
          </a>
        </div>
        {/* --- END ADDITION --- */}

      </div>

      {/* Optional: Add a closing statement or another CTA */}
      <p style={{ marginTop: '3rem', textAlign: 'center', color: '#a0a0a0' }}>
        Looking forward to hearing from you.
      </p>

    </section>
  );
}

export default ContactPage;