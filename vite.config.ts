import { defineConfig } from 'vitest/config'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
   server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ['./tests/setup.ts'],
    include: ['**/*.test.*']
  }
})
