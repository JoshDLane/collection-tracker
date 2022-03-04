module.exports = {
  testEnvironment: "jsdom",
  preset: "jest-expo",
  globals: {
    "ts-jest": {
      tsconfig: {
        jsx: "react",
      },
    },
  },
  //   transform: {
  //     "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
  //     "^.+\\.tsx?$": "ts-jest",
  //   },
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!**/babel.config.js",
    "!**/jest.setup.js",
  ],
  moduleFileExtensions: ["js", "ts", "tsx"],
  transformIgnorePatterns: ["node_modules/(?!@react-native|react-native)"],
  coverageReporters: ["json-summary", "text", "lcov"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/assetsTransformer.js",
  },
};
