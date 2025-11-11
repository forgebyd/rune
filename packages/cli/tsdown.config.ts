import { defineConfig } from 'tsdown';

export default defineConfig({
  name: '@rune/cli',

  entry: {
    cli: 'bin/cli.ts',
    index: 'source/index.ts',
  },
  outputOptions: {
    dir: 'dist',
    chunkFileNames: 'shared/[name].[hash].mjs',
    entryFileNames: '[name].mjs',
  },
});
