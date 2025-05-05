import React from 'react';
// Import Link if you intend internal links later, otherwise not needed for external links
// import { Link } from 'react-router-dom';

// Actual project data based on your input
const projectsData = [
  {
    id: 'p2p-java',
    title: 'Peer-to-Peer Messaging Application',
    date: 'Apr 2025',
    description: [
      'Developed an end-to-end P2P messaging application entirely in Java, enabling direct peer connections over the Internet.',
      'Implemented UDP hole punching techniques to successfully establish connectivity between nodes behind NAT devices.',
      'Created a Java-based intermediary discovery server for node registration and peer address lookup, facilitating the P2P connection setup.',
      'Built both the backend logic and user interface components in Java to handle connection management and real-time message exchange.',
    ],
    technologies: ['Java', 'UDP Hole Punching', 'Networking'],
    links: {
      github: 'https://github.com/arnabbhowal/p2p-chat-udp', // Note: Shared repo link used
    },
  },
  {
    id: 'legal-ai',
    title: 'Cloud-Native Legal AI Assistant (MLOps)',
    date: 'Apr 2025',
    description: [
      'Contributed to the end-to-end development and deployment of an NLP-based legal AI assistant on Chameleon Cloud infrastructure, managed entirely via Infrastructure-as-Code.',
      'Implemented a Retrieval-Augmented Generation (RAG) system processing thousands of legal documents using PyMuPDF, LLMs, Legal-BERT embeddings, and FAISS vector search.',
      'Developed and optimized the model serving component using FastAPI.',
      'Integrated Prometheus/Grafana for observability, automated offline/online testing procedures, and established a feedback loop for continuous improvement and retraining.',
    ],
    technologies: ['Python', 'FastAPI', 'Prometheus', 'Grafana', 'Legal-BERT', 'FAISS', 'LLMs', 'Docker', 'MLOps', 'Chameleon Cloud'],
    links: {
      github: 'https://github.com/Sanjeevan1998/ml-ops-project',
    },
  },
  {
    id: 'pickle-app',
    title: 'Pickle - AI Lifestyle Mobile App',
    date: 'Feb 2025',
    award: 'Best Use of GenAI @ HackNYU 2025',
    description: [
      'Awarded best use of GenAI at HackNYU 2025 for "Pickle," a mobile app co-developed to combat daily decision stress using AI.',
      'Engineered the application using Flutter/Dart for the cross-platform UI and Flask/Python for the backend.',
      'Leveraged diverse Generative AI APIs to power features like personalized movie/food suggestions, travel ideas, and task prioritization.',
      'Implemented the MVP end-to-end in 36 hours, including troubleshooting third-party API issues (timeouts, suboptimal model outputs) and selecting appropriate AI tools for specific tasks.',
    ],
    technologies: ['Flutter', 'Dart', 'Flask', 'Python', 'Generative AI APIs'],
    links: {
      devpost: 'https://devpost.com/software/pickle-frgobu',
      githubFE: 'https://github.com/Sanjeevan1998/PickleFE',
      githubBE: 'https://github.com/Sanjeevan1998/Pickle',
    },
  },
  {
    id: 'gesture-unlock',
    title: 'Embedded Gesture-Based Unlocking System',
    date: 'Sep 2024',
    description: [
      'Developed an embedded system for gesture-based device locking/unlocking using an STM32F429I-DISCO development board.',
      'Wrote firmware entirely in C to process real-time data from the integrated I3G4250D 3-axis gyroscope.',
      'Implemented gesture recognition algorithms to identify specific user movements for secure authentication.',
    ],
    technologies: ['C', 'Embedded Systems', 'STM32', 'Gyroscope (I3G4250D)', 'Firmware'],
    links: {}, // No links provided
  },
  {
    id: 'p2p-js',
    title: 'JavaScript P2P Network (LAN)',
    date: 'Aug 2020',
    description: [
      'Developed a peer-to-peer (P2P) network system entirely in JavaScript enabling nodes on a Local Area Network (LAN) to directly communicate and transfer files.',
      'Utilized the DAT protocol for decentralized data storage and synchronization between peers.',
      'Implemented local peer discovery using UDP multicast (mDNS) allowing nodes to connect without a central server.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Vue.js', 'DAT Protocol', 'mDNS', 'UDP'],
    links: {}, // No links provided
  },
  {
    id: 'blogging-platform',
    title: 'Blogging Platform with CMS',
    date: 'May 2019',
    award: 'Runner-up @ GIMT Hackathon 2019',
    description: [
      'Developed a functional blogging website prototype using Hugo, HTML, CSS, and JavaScript within a 6-hour hackathon timeframe.',
      'Implemented core features for text and image content management, securing a runner-up position.',
    ],
    technologies: ['Hugo', 'HTML', 'CSS', 'JavaScript'],
    links: {}, // No links provided
  },
];

function ProjectsPage() {
  return (
    <section>
      <h1>Projects & Achievements</h1>
      {/* Optional intro paragraph */}
      <p style={{ marginBottom: '2.5rem', fontSize: '1.05em', color: '#b0b0b0' }}>
        A collection of projects demonstrating my skills across various domains, from backend systems and MLOps to embedded programming and generative AI applications.
      </p>

      <div>
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            {/* Project Title and Date */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <h3 style={{ margin: 0 }}>{project.title}</h3>
              <span style={{ color: '#a0a0a0', fontSize: '0.9em', whiteSpace: 'nowrap', marginLeft: '1rem' }}>{project.date}</span>
            </div>

            {/* Optional Award */}
            {project.award && (
              <p style={{ fontStyle: 'italic', color: '#FFD700', /* Gold color for award */ margin: '0 0 0.75rem 0' }}>
                🏆 {project.award}
              </p>
            )}

            {/* Description Bullet Points */}
            <ul style={{ paddingLeft: '20px', marginBottom: '1.25rem' }}>
              {project.description.map((point, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{point}</li>
              ))}
            </ul>

            {/* Technologies */}
            <p>
              <strong style={{ color: '#c0c0c0' }}>Technologies:</strong> {/* Slightly brighter label */}
              {' '} {/* Add space */}
              {project.technologies.join(', ')}
            </p>

            {/* Links */}
            {Object.keys(project.links).length > 0 && (
              <div style={{ marginTop: '1rem' }}>
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                )}
                {project.links.githubFE && (
                  <a href={project.links.githubFE} target="_blank" rel="noopener noreferrer" style={{ marginLeft: project.links.github ? '1rem' : '0' }}>Frontend Code</a>
                )}
                {project.links.githubBE && (
                  <a href={project.links.githubBE} target="_blank" rel="noopener noreferrer" style={{ marginLeft: (project.links.github || project.links.githubFE) ? '1rem' : '0' }}>Backend Code</a>
                )}
                {project.links.devpost && (
                  <a href={project.links.devpost} target="_blank" rel="noopener noreferrer" style={{ marginLeft: (project.links.github || project.links.githubFE || project.links.githubBE) ? '1rem' : '0' }}>Devpost</a>
                )}
                {/* Add other link types like 'liveLink' here if needed */}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;