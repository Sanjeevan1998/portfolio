import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Import the main Layout

// Import Page Components
import HomePage from './pages/HomePage';
// --- MODIFIED HERE: Import new ProjectsPage ---
import ProjectsPage from './pages/ProjectsPage';
// --- END MODIFICATION ---
import AboutPage from './pages/AboutPage';
import WritingPage from './pages/WritingPage';
import ResumePage from './pages/ResumePage';
import ContactPage from './pages/ContactPage';
// Optional: Import a NotFoundPage component if you create one
// import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    // Define all application routes
    <Routes>
      {/* All routes will use the Layout component as their parent */}
      <Route path="/" element={<Layout />}>
        {/* The default page loaded at "/" */}
        <Route index element={<HomePage />} />

        {/* Specific page routes */}
        {/* --- MODIFIED HERE: Route for consolidated Projects page --- */}
        <Route path="projects" element={<ProjectsPage />} />
        {/* --- Route definitions for individual projects removed --- */}
        {/* --- END MODIFICATION --- */}
        <Route path="about" element={<AboutPage />} />
        <Route path="writing" element={<WritingPage />} />
        <Route path="resume" element={<ResumePage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* Optional: A catch-all route for 404 Not Found pages */}
        {/* Create NotFoundPage.jsx if you uncomment this */}
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;