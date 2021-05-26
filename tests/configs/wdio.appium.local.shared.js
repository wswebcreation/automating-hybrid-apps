const {config} = require('./wdio.shared.conf');

// ======
// Appium
// ======
config.services = config.services.concat([
  [
    'appium',
    {
      // To use your own installation of Appium, e.g. globally installed,
      // specify the command which should be started.
      command: 'appium',
      //
      // Map of arguments for the Appium server, passed directly to appium.
      args: {
        // This will let us automatically download the needed ChromeDriver
        relaxedSecurity: true,
        //
        // Uncomment this if you want to write the Appium logs to a file
        // log: './appium.log',
        //
        // Tell Appium which port to use
        port: 4724
      },
    },
  ],
]);

exports.config = config;
