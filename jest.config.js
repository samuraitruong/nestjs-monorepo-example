module.exports = {
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
      // tsConfig: 'tsconfig.test.json',
    },
  },

  moduleFileExtensions: [
    'js',
    'json',
    'ts',
    'tsx',
  ],
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  transform: {
    '^.+\\.t(s|sx)$': 'ts-jest',
  },
  collectCoverageFrom: [
    '**/*.t(s|sx)',
  ],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
  modulePathIgnorePatterns: ['<rootDir>/dist/', '<rootDir>/node_modules/'],
  moduleNameMapper: {
    '@samuraitruong/share-lib': '<rootDir>../../../libraries/share-lib/src',
  },
};
