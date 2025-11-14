export type UserConfig = {
  cwd?: string;
  dry?: boolean;
  force?: boolean;
  verbose?: boolean;
};

export type QualifiedConfig = {
  [K in keyof UserConfig]-?: Required<UserConfig[K]>;
};
