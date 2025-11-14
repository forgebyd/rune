import { defineConfig } from 'tsdown';

export default defineConfig({
  name: '@rune/essence',

  entry: {
    index: 'source/index.ts',
  },
  outputOptions: {
    dir: 'dist',
    chunkFileNames: 'shared/[name].[hash].mjs',
    entryFileNames: '[name].mjs',
  },
});
