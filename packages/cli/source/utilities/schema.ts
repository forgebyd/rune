import type { ArgSchema } from '@gunshi/bone';

export const defineSchema = <T extends ArgSchema>(schema: T): T => ({
  ...schema,
  // Auto-convert short flags to uppercase for consistency.
  // This allows defining short flags in lowercase (e.g., 'g', 'd', 'v')
  // while ensuring they're always uppercase in the CLI (e.g., '-G', '-D', '-V').
  short: schema.short?.toUpperCase() ?? undefined,
  default: schema.required ? undefined : schema.default,
  required: schema.default !== undefined ? undefined : schema.required,
  toKebab: true,
});
