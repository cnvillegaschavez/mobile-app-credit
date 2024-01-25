module.exports = {
  verbose: true,
  preset: 'react-native',
  resetMocks: true,
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootDir>/src/components$1',
    '^@constants(.*)$': '<rootDir>/src/constants$1',
    '^@navigation(.*)$': '<rootDir>/src/navigation$1',
    '^@screens(.*)$': '<rootDir>/src/screens$1',
    '^@store(.*)$': '<rootDir>/src/store$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-native-reanimated||@gluestack-ui/themed|@gluestack-ui/config|@gluestack-style/react)',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    '<rootDir>/jest.setup.tsx',
  ],
};
