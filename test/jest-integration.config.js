// eslint-disable-next-line no-undef
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  rootDir: '../..',
  globalSetup: '<rootDir>/test/wealfund/setup-postgresql-docker.ts',
  globalTeardown: '<rootDir>/test/wealfund/teardown-postgresql-docker.ts',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/src/**/*.it-spec.(ts)'],
  testEnvironment: 'node',
  modulePaths: ['<rootDir>'],
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/*.it-spec.ts',
  ],
};
