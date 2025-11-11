import { define, lazy } from '@gunshi/definition';

import type {
  CommandContextType,
  CommandDefinitionType,
  CommandExportType,
  CommandLoaderType,
  CommandParamsType,
} from '../types/command.js';
import { defineSchema } from '../utilities/schema.js';

export type CastCommandParams = CommandParamsType<'generator'>;

const commandDefinition: CommandDefinitionType<CastCommandParams> = define({
  name: 'cast',
  description: 'Run a generator or predefined action',
  args: {
    generator: defineSchema({
      type: 'positional',
      description: 'The generator or action to run',
      required: true,
    }),
  },
});

const commandLoader: CommandLoaderType<CastCommandParams> = () => {
  return (ctx: CommandContextType<CastCommandParams>): void => {
    console.log(ctx.name);
  };
};

export const castCommand: CommandExportType<CastCommandParams> = {
  name: 'cast',
  handler: lazy(commandLoader, commandDefinition),
};
