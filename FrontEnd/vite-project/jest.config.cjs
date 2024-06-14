// jest.config.cjs
module.exports = {
  testEnvironment: 'node',
  // No need to specify a transformer for JS files; babel-jest is used by default
};
    // jest.config.js
// jest.config.js
module.exports = {
  setupFiles: ["<rootDir>/firebaseSetup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/firebaseSetup.js"],
};
