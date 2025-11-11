import { define, lazy } from '@gunshi/definition';

import type {
  CommandContextType,
  CommandDefinitionType,
  CommandExportType,
  CommandLoaderType,
  CommandParamsType,
} from '../types/command.js';

export type TomeCommandParams = CommandParamsType;

const commandDefinition: CommandDefinitionType<TomeCommandParams> = define({
  name: 'tome',
  description: 'Show available generators, actions, and templates',
});

const commandLoader: CommandLoaderType<TomeCommandParams> = () => {
  return (ctx: CommandContextType<TomeCommandParams>): void => {
    console.log(ctx.name);
  };
};

export const tomeCommand: CommandExportType<TomeCommandParams> = {
  name: 'tome',
  handler: lazy(commandLoader, commandDefinition),
};
