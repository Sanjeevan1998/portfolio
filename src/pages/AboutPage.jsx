import React from 'react';

function AboutPage() {
  return (
    <section> {/* Main container for the about page content */}
      <h1>About Me</h1>

      {/* Section 1: Background */}
      <article> {/* Use article for self-contained narrative sections */}
        <h2>Where I Started & How I Got Here</h2>
        <p>
          My interest in technology started quite early while growing up in Guwahati, Assam, in Northeast India. I had a genuine curiosity about computers and electronics. Fortunately, my family was very supportive. A significant moment was when my dad brought home our first PC after seeing my interest at his office; that really set me on my current path. Even if advanced technology was less common there at the time, that initial curiosity kept me exploring and learning.
        </p>
        <p>
          This drive eventually led me to seek opportunities beyond my hometown. I spent valuable time learning and working in Kolkata, and later moved to Bangalore, which is a major technology hub in India. Working there for several years as a software developer was a fantastic experience where I learned a great deal and collaborated with wonderful people. It solidified my technical foundation but also opened my eyes to the scale of the global technology landscape and how much more there was to discover from different perspectives. I felt a strong pull to continue growing, step outside my routine, and contribute to projects with potentially wider impact.
        </p>
        <p>
          That ambition is what brought me to New York City to pursue my Master's in Computer Engineering at NYU. It seemed like the ideal step to genuinely broaden my horizons, acquire new skills, and be part of the vibrant exchange of ideas that happens in such a diverse environment. Plus, the program’s focus on practical application really suits me; I have always learned best by actually building things and working through challenges hands on.
        </p>
      </article>

      {/* Section 2: Philosophy */}
      <article>
        <h2>How I Think About Stuff (My Philosophy, Basically)</h2>
        <p>
          When it comes to tackling problems, I suppose you could say I am a generalist at heart. I find it limiting to stay strictly within one defined role or discipline. My mind naturally tries to connect ideas from different areas. When faced with a challenge, I am not just focused on the technical solution; I am compelled to ask fundamental questions like why this is a problem, who it affects, and if there might be a completely different, perhaps unexpected, way to approach it. I truly believe in questioning the standard way of doing things to see if a better path exists.
        </p>
        <p>
          Experimentation is also a huge part of how I work. Trying things out is essential, right? Sometimes ideas succeed immediately, other times they need refinement after hitting a snag. Either way, valuable insights are gained. I tend to view setbacks not as failures, but as important data points on the journey to figuring out what truly works. Doing this alongside other people is even better. I genuinely believe that bringing together individuals with diverse skills in an environment where everyone is open to sharing and learning leads to far more innovative and robust results than any one person could achieve alone.
        </p>
        <p>
          What fuels all of this? Honestly, I just want to create things that matter, even if it is in small ways. Whether the project involves software, writing, or designing a creative solution, the objective is to produce something that is genuinely useful, understandable, and maybe even makes someone’s day a bit easier. Using technology and creativity purposefully to solve real problems feels like a very rewarding way to apply my energy.
        </p>
      </article>

      {/* Section 3: Skills */}
      <section> {/* Use section for the distinct skills area */}
        <h2>Key Skills</h2>
        <p>
          My capabilities encompass a blend of technical expertise, creative processing, and collaborative strengths:
        </p>

        {/* Skills organized into categories */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '1.5rem' }}> {/* Flex container for columns */}

          {/* Technical Skills Column */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3>Technical</h3>
            <ul>
              <li>Software Engineering & Development (Full-Stack & Backend)</li>
              <li>Artificial Intelligence & Machine Learning (GenAI, NLP, MLOps Concepts)</li>
              <li>System Design & Architecture</li>
              <li>Creative Technology & Prototyping</li>
              <li>Cloud Computing & Deployment Fundamentals</li>
              {/* Add more specific tech like Java, Python, React, etc. if desired */}
            </ul>
          </div>

          {/* Creative & Process Skills Column */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3>Creative & Process</h3>
            <ul>
              <li>Problem Solving & Critical Thinking</li>
              <li>Ideation & Concept Development</li>
              <li>Rapid Prototyping & Iteration</li>
              <li>Experimentation & Research</li>
              <li>Technical & Creative Writing</li>
            </ul>
          </div>

          {/* Collaboration & Personal Skills Column */}
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h3>Collaboration & Personal</h3>
            <ul>
              <li>Cross-functional Teamwork & Communication</li>
              <li>Adaptability & Quick Learning</li>
              <li>Empathy & User-Centric Thinking</li>
              <li>Resilience & Perseverance</li>
            </ul>
          </div>

        </div>
      </section>
    </section>
  );
}

export default AboutPage;