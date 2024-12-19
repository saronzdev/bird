import {defineConfig} from 'vite'
import {config} from 'dotenv'
import react from '@vitejs/plugin-react-swc'
import react from '@vitejs/plugin-react'

config()

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  build: {
      outDir: 'dist',
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
        }
      }
    },
  define: {
    'process.env': process.env
  }
})
