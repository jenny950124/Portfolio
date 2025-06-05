import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ 루트 도메인에서는 '/' 로 설정
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})
