import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- CHANGE THIS LINE BACK ---
  base: '/', // Set base path back to root for the custom domain
  // --- END CHANGE ---
  build: {
    outDir: 'docs', // Keep output directory as docs
  },
});