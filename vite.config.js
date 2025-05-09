import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/SaadiDukan/", // 👈 GitHub repo name yahi hona chahiye
  plugins: [react(), tailwindcss()],
})


