import React from 'react';
import { Outlet } from 'react-router-dom';
// Import the refactored 3D scene component
import SpaceBackgroundCanvas from './SpaceScene';
import Navbar from './Navbar';

function Layout() {
  return (
    // app-container handles the overall centering of the content box
    <div className="app-container">
        {/* Render the persistent 3D background */}
        <SpaceBackgroundCanvas />

      {/* The content box acts as a frame for changing content */}
      <div className="content-box">
        {/* Navigation Bar */}
        <Navbar />

        {/* Page-specific content renders here */}
        <main className="page-content">
             <Outlet /> {/* Child route components render here */}
        </main>
      </div>
    </div>
  );
}

export default Layout;