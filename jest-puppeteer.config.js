// See https://github.com/smooth-code/jest-puppeteer for more information about these options
module.exports = {
  launch: {
    executablePath: '/usr/bin/chromium-browser',
    args: ['--disable-web-security', '--window-size=1080,1920'],
    defaultViewport: {
      width: 1080,
      height: 1920,
    },
    // headless: false,
    // slowMo: 50
  },
  server: {
    command: 'yarn start:test',
    port: 9022,
    launchTimeout: 300000,
  },
};
