import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the app from /<repo name>/, so the built files need
// that prefix. Change this if the GitHub repo gets a different name.
const repoName = 'garden_granny'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? `/${repoName}/` : '/',
}))
