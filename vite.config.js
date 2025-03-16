import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Assamese-Heritage-and-Handloom-E-Commerce-1/', // Replace with your repo name
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
});