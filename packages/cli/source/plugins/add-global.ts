import { type ArgSchema, plugin } from '@gunshi/plugin';

import type {
  PluginContextType,
  PluginDefinitionType,
} from '../types/plugin.js';
import { defineSchema } from '../utilities/schema.js';

type PredefinedOptionsType = {
  name: string;
  schema: ArgSchema;
}[];

export const addGlobalPlugin = (): PluginDefinitionType => {
  const options: PredefinedOptionsType = [
    {
      name: 'config',
      schema: defineSchema({
        type: 'string',
        short: 'g',
        description: 'Path to the global configuration file',
        default: '',
      }),
    },
    {
      name: 'dry',
      schema: defineSchema({
        type: 'boolean',
        short: 'd',
        description: 'Run in dry mode without making changes',
        default: false,
      }),
    },
    {
      name: 'verbose',
      schema: defineSchema({
        type: 'boolean',
        short: 'v',
        description: 'Enable verbose output for debugging',
        default: false,
      }),
    },
  ];

  return plugin({
    id: 'g:add-global',
    name: 'Add Global Plugin',
    setup: (ctx: PluginContextType) => {
      for (const option of options) {
        ctx.addGlobalOption(option.name, option.schema);
      }
    },
  });
};
