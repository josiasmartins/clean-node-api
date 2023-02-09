/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  root: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  preset: '@shelf/jest-mongodb',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}

// import type {Config} from 'jest';
// import {defaults} from 'jest-config';

// const config: Config = {
//   moduleFileExtensions: [...defaults.moduleFileExtensions, 'mts'],
// };

// export default config;
