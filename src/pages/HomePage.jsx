import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '2.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
        <h1 style={{ marginBottom: '0.25rem' }}>Sanjeevan Adhikari</h1>
        <p style={{ fontSize: '1.25em', color: '#b0b0b0', fontStyle: 'italic', marginTop: '0' }}>
          Versatile Technologist | Bridging Code, Creativity & Curiosity
        </p>
      </header>
      <section style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
          As an MS Computer Engineering student at NYU and creative technologist with 4 years of SWE experience, I thrive on tackling diverse challenges. From developing backend systems to winning 'Best Use of GenAI' at HackNYU 2025, I love exploring how technology can create novel solutions. I'm passionate about building impactful experiences at the edge of what's possible.
        </p>
      </section>
      <section>
        <h2 style={{ textAlign: 'center', borderBottom: 'none', marginBottom: '1.5rem' }}>Featured Projects</h2>
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <div className="project-card" style={{ flex: 1, minWidth: '280px', maxWidth: '48%' }}>
            <h3>Pickle App 🏆</h3>
            <p>An award-winning mobile app using GenAI to simplify daily decisions, built from scratch in a 36-hour hackathon.</p>
          </div>
          <div className="project-card" style={{ flex: 1, minWidth: '280px', maxWidth: '48%' }}>
            <h3>LegalAI Assistant</h3>
            <p>A cloud-native NLP assistant using RAG and LLMs to streamline legal case research, developed with end-to-end MLOps practices.</p>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
           {/* --- ADDED CLASS HERE --- */}
           <Link to="/projects" className="button-style" /* style={viewAllButtonStyle} REMOVED INLINE */ >
             View All Projects
           </Link>
        </div>
      </section>
    </div>
  );
}
// const viewAllButtonStyle = { ... }; // REMOVED - Styles handled by .button-style class

export default HomePage;