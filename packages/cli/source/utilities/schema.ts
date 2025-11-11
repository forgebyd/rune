import type { ArgSchema } from '@gunshi/bone';

export const defineSchema = <T extends ArgSchema>(schema: T): T => ({
  ...schema,
  short: schema.short?.toUpperCase() ?? undefined,
  default: schema.required ? undefined : schema.default,
  required: schema.default !== undefined ? undefined : schema.required,
  toKebab: true,
});
