import { define, lazy } from '@gunshi/definition';

import type {
  CommandContextType,
  CommandDefinitionType,
  CommandExportType,
  CommandLoaderType,
  CommandParamsType,
} from '../types/command.js';
import { defineSchema } from '../utilities/schema.js';

export type CraftCommandParams = CommandParamsType<'type'>;

const commandDefinition: CommandDefinitionType<CraftCommandParams> = define({
  name: 'craft',
  description: 'Generate generators or predefined actions',
  args: {
    type: defineSchema({
      type: 'positional',
      description: 'The type of item to generate (e.g., generator, action)',
      required: true,
    }),
  },
});

const commandLoader: CommandLoaderType<CraftCommandParams> = () => {
  return (ctx: CommandContextType<CraftCommandParams>): void => {
    console.log(ctx.name);
  };
};

export const craftCommand: CommandExportType<CraftCommandParams> = {
  name: 'craft',
  handler: lazy(commandLoader, commandDefinition),
};
