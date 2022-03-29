const { join } = require('path');
const { config } = require('./wdio.appium.local.shared');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    platformName: 'iOS',
    // All vendor specific, in this case Appium capabilities, should be
    // put in vendor prefixed options, see
    // https://www.w3.org/TR/webdriver1/#dfn-extension-capability
    // All Appium capabilities, see
    // http://appium.io/docs/en/writing-running-appium/caps/
    // should be prefixed with `appium:{capability-name}`
    'appium:automationName': 'XCUITest',
    // This is the name of the simulator your have on your machine
    // If you want to run it on a different device then change this name
    'appium:deviceName': 'iPhone 13',
    // This is the OS version, if you have a different OS version then please change it here
    'appium:platformVersion': '15.4',
    'appium:orientation': 'PORTRAIT',
    // The path to the app
    'appium:app': join(
      process.cwd(),
      './apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip'
    ),

    /**
     * This will tell Appium that the first screen that it started will
     * be a WebView, so it needs to start with the WebView context
     */
    // Only enable it if it's provided through the command line as an option
    'appium:autoWebview': process.env.AUTOWEBVIEW || false,

    maxInstances: 1,
  },
];

exports.config = config;
