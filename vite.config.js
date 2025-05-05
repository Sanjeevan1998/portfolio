import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // --- CHANGE THIS LINE ---
  base: '/portfolio/', // Set base path for username.github.io/repository-name/ URL
  // --- END CHANGE ---
});