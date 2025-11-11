#!/usr/bin/env node

import { run } from '../source/index.js';

run(process.argv.slice(2)).catch((error) => {
  if (error instanceof Error) {
    // TODO : implement proper error handling
    console.error(error.message);
  }

  // TODO : improve error handling with handling unknown error
  console.error(error);

  // TODO : set proper exit code based on error type
  // currently do graceful exit
  process.exit(0);
});
