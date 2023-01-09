import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '',
  build:{
    outDir: 'extension/popup/',
    assetsDir:'./',

    rollupOptions: {
      output:{
        entryFileNames: "[name].js",
      }
    }
  }
})
