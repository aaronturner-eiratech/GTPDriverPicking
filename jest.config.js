module.exports = {
  rootDir: 'src/tests/unit',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.svg": "<rootDir>/__mocks__/svgrMock.js",
  },
  "setupFilesAfterEnv": [
    "<rootDir>/setuptests.js"
  ]
};
