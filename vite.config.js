import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: 'dist', // Указываем папку для сборки
    publicPath: '/' // Устанавливаем публичный путь в корень
  }
})
