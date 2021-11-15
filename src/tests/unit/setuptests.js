import '@testing-library/jest-dom/extend-expect';

const localStorageMock = (function () {
  const store = {
    env: {
      code: 'eiratech',
    },
  };
  return {
    getItem: function (key) {
      return JSON.stringify(store[key]);
    },
    setItem: function (key, value) {
      store[key] = value;
    },
    clear: function () {
      store = {};
    },
    removeItem: function (key) {
      delete store[key];
    }
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

process.env.REACT_APP_WMS = "eiratech"
process.env.REACT_APP_PROD_MODE = "false"
process.env.REACT_APP_APP_MODE = "test"

//console.log and console.warn are ignored in tests
jest.spyOn(console, 'log').mockImplementation(() => { });
jest.spyOn(console, 'warn').mockImplementation(() => { });
