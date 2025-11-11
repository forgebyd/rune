import { type CommandContext, plugin } from '@gunshi/plugin';

import type {
  PluginContextType,
  PluginDefinitionType,
} from '../types/plugin.js';

export const trackRuntimePlugin = (): PluginDefinitionType => {
  return plugin({
    id: 'g:track-runtime',
    name: 'Track Runtime Plugin',
    setup: (ctx: PluginContextType) => {
      ctx.decorateCommand((runner) => async (ctx: CommandContext) => {
        const startTime = Date.now();
        await runner(ctx);
        const endTime = Date.now();

        ctx.log(`\nCommand executed in ${endTime - startTime}ms`);
      });
    },
  });
};
