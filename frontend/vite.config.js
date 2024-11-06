import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {port:5173},
  build: {
    rollupOptions: {
      external: [
        'react-toastify', 
        'react-router-dom',
        'react-toastify/dist/ReactToastify.css' // Add the CSS file as external
      ]
    }
  }
})
