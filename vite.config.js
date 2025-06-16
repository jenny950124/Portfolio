import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // ✅ 루트 도메인 기준
  publicDir: 'public', // ✅ Netlify용 정적 파일 포함
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});
