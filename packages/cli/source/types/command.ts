import type { CommandContext } from '@gunshi/bone';
import type {
  Command,
  CommandLoader,
  GunshiParams,
  LazyCommand,
} from '@gunshi/definition';

/**
 * Command Parameters - Type Alias
 *
 * Defines a type alias for command parameters
 * used in the Gunshi CLI framework.
 *
 * @template N - Argument Names
 * @template E - Extension Context
 */
export type CommandParamsType<
  N extends string = string,
  E extends GunshiParams['extensions'] = GunshiParams['extensions'],
> = GunshiParams<{
  args: GunshiParams['args'] & {
    [K in N]: GunshiParams['args'][K];
  };
  extensions: E;
}>;

/**
 * Command Definitions - Type Alias
 *
 * Defines a type alias for command definitions
 * used in the Gunshi CLI framework.
 *
 * @template P - Command Parameters extending CommandParamsType
 */
export type CommandDefinitionType<P extends CommandParamsType> = Command<P>;

/**
 * Command Loader - Type Alias
 *
 * Defines a type alias for command loaders
 * used in the Gunshi CLI framework.
 *
 * @template P - Command Parameters extending CommandParamsType
 */
export type CommandLoaderType<P extends CommandParamsType> = CommandLoader<P>;

/**
 * Command Context - Readonly Type Alias
 *
 * Defines a readonly type alias for command contexts
 * used in the Gunshi CLI framework.
 *
 * @template P - Command Parameters extending CommandParamsType
 */
export type CommandContextType<P extends CommandParamsType> = Readonly<
  CommandContext<P>
>;

export type CommandNameType = string;
export type CommandHandlerType<P extends CommandParamsType = GunshiParams> =
  | Command<P>
  | LazyCommand<P>;

/**
 * Command Export - Type Definition
 *
 * Defines a type for exporting commands
 * in the Gunshi CLI framework.
 *
 * @template P - Command Parameters extending CommandParamsType
 */
export type CommandExportType<P extends CommandParamsType> = {
  name: string;
  handler: Command<P> | LazyCommand<P>;
};
