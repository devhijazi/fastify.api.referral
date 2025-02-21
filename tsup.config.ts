import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./src/**/*.ts'], // File Sources (onde estão os arquivos)
  format: 'esm', // formato da build
  outDir: 'dist', // diretório de saida
  clean: true,
})
