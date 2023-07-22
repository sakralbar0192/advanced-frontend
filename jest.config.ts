import path from "path";

export default {
    clearMocks: true,
    modulePaths: ['<rootDir>src'],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.ts'],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'config/jest/jestEmptyComponent.tsx'),
        'config/(.*)': path.resolve(__dirname, 'config', '$1')
    },
    testEnvironment: 'jsdom'
}
