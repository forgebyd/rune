import type {
  GunshiParams,
  PluginContext,
  PluginWithExtension,
  PluginWithoutExtension,
} from '@gunshi/plugin';

/**
 * Plugin Definition - Type Definition
 *
 * Defines a type definition for plugin definitions
 * used in the Gunshi CLI framework.
 *
 * @template E - Extension Context
 */
export type PluginDefinitionType<
  E extends GunshiParams['extensions'] = GunshiParams['extensions'],
> = PluginWithExtension<E> | PluginWithoutExtension<E>;

/**
 * Plugin Context - Type Definition
 *
 * Defines a type definition for plugin contexts
 * used in the Gunshi CLI framework.
 *
 * @template P - Gunshi Parameters
 */
export type PluginContextType<P extends GunshiParams = GunshiParams> =
  PluginContext<P>;
