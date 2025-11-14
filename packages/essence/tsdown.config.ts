import { defineConfig } from 'tsdown';

export default defineConfig({
  name: '@rune/essence',

  entry: {
    index: 'source/index.ts',
    consts: 'source/consts/index.ts',
    types: 'source/types/index.ts',
    utilities: 'source/utilities/index.ts',
  },
  outputOptions: {
    dir: 'dist',
    chunkFileNames: 'shared/[name].[hash].mjs',
    entryFileNames: '[name].mjs',
  },
});
