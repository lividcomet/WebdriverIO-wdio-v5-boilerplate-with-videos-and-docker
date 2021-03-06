const base = require('./base.conf.js');

const config = {
  specs: [
    './src/**/*.gui.js'
  ],

  capabilities: [
    {
      maxInstances: 1,
      browserName: 'firefox',
    },
    {
      maxInstances: 1,
      browserName: 'chrome',
      "goog:chromeOptions": {
        prefs: {
          'profile.managed_default_content_settings.popups' : 2,
          'profile.managed_default_content_settings.notifications' : 2,
        }
      }
    },
  ],

  // Setup the browser window
  before: (capabilities, specs) => {
    browser.setWindowPosition(0, 0);
    browser.setWindowSize(1600, 1024);
  },
};

module.exports = {
  config: {
    ...base.config,
    ...config,
  },
};