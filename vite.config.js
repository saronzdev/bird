import {defineConfig} from 'vite'
import {config} from 'dotenv'
import react from '@vitejs/plugin-react-swc'

config()

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
  define: {
    'process.env': process.env
  }
})
