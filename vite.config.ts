import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    legacy({
      targets: ['cover 99.5%'], // '> 0.2%, last 2 versions, Firefox ESR, not dead'
    }),
  ],
})
