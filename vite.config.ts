import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: './index.d.ts',
      name: 'UXUY',
      fileName: 'uxuy'
    }
  }
})
