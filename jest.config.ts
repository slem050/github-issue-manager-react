import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/client/', // Add this line to ignore the client directory
  ],
  // Add other configurations as needed
};

export default config;
