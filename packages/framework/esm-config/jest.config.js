module.exports = {
  transform: {
    "^.+\\.tsx?$": ["@swc/jest"],
  },
  setupFiles: ["<rootDir>/src/setup-tests.js"],
  moduleNameMapper: {
    "lodash-es/(.*)": "lodash/$1",
    "@openmrs/esm-context": "<rootDir>/__mocks__/openmrs-esm-context.mock.tsx",
    "@openmrs/esm-globals": "<rootDir>/__mocks__/openmrs-esm-globals.mock.tsx",
    "@openmrs/esm-state": "<rootDir>/__mocks__/openmrs-esm-state.mock.tsx",
  },
};
