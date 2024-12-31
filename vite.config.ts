import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs/promises';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  base: './',
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    // loader: "tsx",
    // include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: 'load-js-files-as-jsx',
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: 'jsx',
              contents: await fs.readFile(args.path, 'utf8'),
            }));
          },
        },
      ],
    },
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Resolve both .js and .jsx files
  },
  server: {
    open: true, // automatically open the app in the browser
    port: 3000,
  },
  build: {
    ssr: true,
    rollupOptions: {
      input: '/src/entry-server.js', // Specify the SSR entry point
    },
    outDir: 'build',
    commonjsOptions: { transformMixedEsModules: true }, // Change
  },
});
