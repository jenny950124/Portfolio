import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Portfolio/', // ✅ 꼭 넣어야 함
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
