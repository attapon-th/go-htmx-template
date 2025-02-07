// vite.config.js
/** @type {import('vite').UserConfig} */
export default {
  base: 'dfic/v4/assets/dist',
  build: {
    outDir: '../static/dist',
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        entryFileNames: 'index.js',
        assetFileNames: '[name].[ext]',
      }
    },
  },
  plugins: [],
}