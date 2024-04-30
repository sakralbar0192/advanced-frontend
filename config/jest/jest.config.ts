import path from "path";

export default {
    globals: {
        __IS_DEV__: true
    },
    rootDir: '../../',
    roots: [
        "<rootDir>src",
    ],
    clearMocks: true,
    modulePaths: ['<rootDir>src'],
    moduleDirectories: ["node_modules", "src"],
    setupFilesAfterEnv: ['<rootDir>/config/jest/setupTest.ts'],
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
        '^config/(.*)': path.resolve(__dirname, '..', '..', 'config', '$1'),
        "entities/(.*)": "<rootDir>src/entities/$1"
    },
    testEnvironment: 'jsdom'
}
