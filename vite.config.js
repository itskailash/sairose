import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/sairose/', // The repository name
  plugins: [react()],
  build: {
    outDir: 'dist' // Specify the output directory
  }
});
