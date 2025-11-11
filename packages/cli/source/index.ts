import { type CliOptions, cli } from '@gunshi/bone';

// biome-ignore lint/correctness/useImportExtensions: package.json
import pkg from '../package.json' with { type: 'json' };
import { bootstrap } from './bootstrap.js';

export const run = async (argv: string[]): Promise<void> => {
  await bootstrap(async (context) => {
    await cli(
      argv,
      {},
      {
        name: 'rune',
        description: pkg.description,
        version: pkg.version,
        plugins: context.plugins as CliOptions['plugins'],
        subCommands: context.commands as CliOptions['subCommands'],
        usageOptionType: true,
        usageOptionValue: true,
      }
    );
  });
};
