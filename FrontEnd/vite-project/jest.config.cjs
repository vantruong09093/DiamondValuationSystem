// jest.config.cjs
module.exports = {
  testEnvironment: 'node',
  // No need to specify a transformer for JS files; babel-jest is used by default
};
    // jest.config.js
// jest.config.js
module.exports = {
  
  setupFilesAfterEnv: ["<rootDir>/firebaseSetup.js"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/firebaseSetup.js"],
};
