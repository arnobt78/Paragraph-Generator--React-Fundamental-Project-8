import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// React plugin enables Fast Refresh and JSX/TSX handling
export default defineConfig({
  plugins: [react()],
})
