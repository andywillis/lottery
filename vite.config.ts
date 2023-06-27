import { defineConfig } from 'vite'
import postcssNesting from 'postcss-nesting';
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    open: true,
    port: 3000
  },
  root: 'src',
  css: {
    postcss: {
      plugins: [
        postcssNesting
      ]
    }
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    outDir: '../build',
    sourcemap: true
  },
})
