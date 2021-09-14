const jestConfig = {
  clearMocks: true,
  rootDir: './src',
  setupFiles: [
    '<rootDir>/jest-setup.js',
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  verbose: true,
}

module.exports = jestConfig
