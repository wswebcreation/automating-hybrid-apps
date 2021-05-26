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
    automationName: 'UiAutomator2',
    // This is the name of the emulator that you configured in Android Studio
    // If you want to run it on a different device then change this name
    deviceName: 'Pixel_3_10.0',
    platformName: 'Android',
    // This is the OS version, if you have a different OS version then please change it here
    platformVersion: '10.0',
    orientation: 'PORTRAIT',
    app: join(
      process.cwd(),
      './apps/Android.SauceLabs.Hybrid.app.1.0.0.apk',
    ),
    appWaitActivity: 'com.saucelabshybridapp.MainActivity',
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
    nativeWebScreenshot: true,
  },
];

exports.config = config;
