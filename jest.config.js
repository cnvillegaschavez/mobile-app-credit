module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['./jest.setup.js'],
  testMatch: ['<rootDir>/src/**/__tests__/**/*.tsx'],
  testPathIgnorePatterns: ['./node_modules/'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  collectCoverageFrom: [
    '**/src/**/*.(js|jsx)',
    '!**/src/(assets|config|constants|navigation)/**',
    '!**/src/**/*.styles.js',
    '!**/.history/**/*.[jt]s?(x)',
  ],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
  },
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
  setupFiles: ['./node_modules/react-native-gesture-handler/jestSetup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation/.*|react-native-svg|@gluestack-ui|@gluestack-ui/.*)',
  ],
};
