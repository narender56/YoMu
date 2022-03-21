import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  define: {
    'process.env': import.meta.env
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src')
    }
  }
})
