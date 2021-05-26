const {join} = require('path');
const {config} = require('./wdio.appium.local.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    automationName: 'XCUITest',
    // This is the name of the simulator your have on your machine
    // If you want to run it on a different device then change this name
    deviceName: 'iPhone 12',
    platformName: 'iOS',
    // This is the OS version, if you have a different OS version then please change it here
    platformVersion: '14.5',
    orientation: 'PORTRAIT',
    // The path to the app
    app: join(
      process.cwd(),
      './apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip',
    ),
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    noReset: true,
    maxInstances: 1,

    /**
     * This will tell Appium that the first screen that it started will
     * be a WebView, so it needs to start with the WebView context
     */
    // Only enable it if it's provided through the command line as an option
    autoWebview: process.env.AUTOWEBVIEW || false,
  },
];

exports.config = config;
