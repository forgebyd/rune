import pluginGlobal from '@gunshi/plugin-global';
import pluginRenderer from '@gunshi/plugin-renderer';

import { castCommand } from './commands/cast.js';
import { craftCommand } from './commands/craft.js';
import { tomeCommand } from './commands/tome.js';
import { addGlobalPlugin } from './plugins/add-global.js';
import type { CommandHandlerType, CommandNameType } from './types/command.js';
import type { PluginDefinitionType } from './types/plugin.js';

export type BootstrapContextType = {
  commands: Map<CommandNameType, CommandHandlerType>;
  plugins: PluginDefinitionType[];
};

export type BootstrapCallbackType = (
  context: BootstrapContextType
) => void | Promise<void>;

const loadCommands = (): BootstrapContextType['commands'] => {
  const registry = new Map<CommandNameType, CommandHandlerType>();

  registry.set(castCommand.name, castCommand.handler);
  registry.set(craftCommand.name, craftCommand.handler);
  registry.set(tomeCommand.name, tomeCommand.handler);

  return registry;
};

const loadPlugins = (): BootstrapContextType['plugins'] => {
  const registry: PluginDefinitionType[] = [];

  registry.push(pluginGlobal());
  registry.push(pluginRenderer());
  registry.push(addGlobalPlugin());

  return registry;
};

export const bootstrap = async (
  callback: BootstrapCallbackType
): Promise<void> => {
  const context: BootstrapContextType = {
    commands: loadCommands(),
    plugins: loadPlugins(),
  };

  await callback(context);
};
