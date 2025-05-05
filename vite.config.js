import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Base path for username.github.io/repository-name/ URL
  base: '/portfolio/',
  // --- ADD THIS BUILD SECTION ---
  build: {
    outDir: 'docs', // Output directory changed from 'dist' to 'docs'
  },
  // --- END BUILD SECTION ---
});