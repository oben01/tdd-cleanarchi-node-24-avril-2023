// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  rootDir: '../..',
  globalSetup: '<rootDir>/test/wealride/setup-postgresql-docker.ts',
  globalTeardown: '<rootDir>/test/wealride/teardown-postgresql-docker.ts',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: [
    '<rootDir>**/src/**/*.spec.(ts)',
    '<rootDir>**/src/**/*.it-spec.(ts)',
    '<rootDir>**/src/**/*.e2e-spec.(ts)',
  ],
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.spec.ts',
    '!<rootDir>/src/**/*.it-spec.ts',
    '!<rootDir>/src/**/*.e2e-spec.ts',
  ],
};
