import type { Config } from 'jest';
import path from 'path';

const config: Config = {
  rootDir: '../../',
  testEnvironment: 'jsdom',
  clearMocks: true,
  coveragePathIgnorePatterns: [ '/node_modules/' ],
  moduleDirectories: [ 'node_modules' ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node'
  ],
  testMatch: [ '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)' ],
  modulePaths: [ '<rootDir>src' ],
  setupFilesAfterEnv: [ '<rootDir>config/jest/setupTests.ts' ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^entities/(.*)$': '<rootDir>src/entities/$1',
    '^features/(.*)$': '<rootDir>src/features/$1',
    '^pages/(.*)$': '<rootDir>src/pages/$1',
    '^shared/(.*)$': '<rootDir>src/shared/$1',
    '^widgets/(.*)$': '<rootDir>src/widgets/$1',
    '^app/(.*)$': '<rootDir>src/app/$1',
  },
  globals: {
    __IS_DEV__: true,
    __API__: '',
  },
};

export default config;
