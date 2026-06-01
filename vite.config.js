import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [react()],
	css: {
		minify: false,
	},
	build: {
		outDir: 'dist',
		assetsDir: 'assets',
		target: 'es2015',
		cssTarget: 'chrome61',
	},
})
