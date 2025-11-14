import type { QualifiedConfig } from './seeker.js';

export type Context = {
  cwd: string;
  env: {
    name: string;
    description: string;
    version: string;
  };
  commandName: string;
  commandArgument: {
    flags: {
      config: string;
      dry: boolean;
      force: boolean;
      verbose: boolean;
    };
    positionals: Record<string, string | boolean | number | string[]>;
  };
  config: QualifiedConfig;
};
