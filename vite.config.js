import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    modulePreload: false,
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    federation({
      name: 'portfolio',
      filename: 'remoteEntry.js',
      remotes: {
        portfolioBlog: "https://kaung-minkhant.github.io/portfolio-blog/assets/remoteEntry.js"
        // portfolioBlog: "http://localhost:4001/assets/remoteEntry.js"
      },
      // Modules to expose
      exposes: {
        // './app': './src/App.jsx',
      },
      shared: ['react', 'react-dom']
    })
  ],
  base: "./",
})
