const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './', // path to your Next.js project root
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);
