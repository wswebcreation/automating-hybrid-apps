/**
 * Assignment 1:  Native vs. WebView automation
 *         Goal:  Learn the ease of selecting elements in a WebView
 *
 * Open a browser, enter this url
 *
 *    https://www.saucedemo.com
 *
 * and use the DevTools to find the CSS selectors for the elements we want to interact with.
 *
 * When you found all elements you can run the following commands in the terminal
 *
 *    Android:
 *      npm run android.assignment.one
 *    iOS (if you have a Mac):
 *      npm run ios.assignment.one
 *
 * Now also compare the times by running the same steps, but then with native scripts.
 * Enter the following commands in the terminal
 *
 *    Android:
 *      npm run android.native
 *    iOS (if you have a Mac):
 *      npm run ios.native
 *
 */
describe('A HybridApp with `autoWebview: true`', () => {
  it('should be able to login with web selectors', () => {
    // Wait for the screen to be loaded
    // @TODO: find the correct selector of an element that can tell us that the page is loaded
    $('#login_button_container').waitForDisplayed();

    // Submit the form
    // @TODO: find the correct selector to interact with the username field
    $('#user-name').setValue('standard_user');
    // @TODO: find the correct selector to interact with the password field
    $('#password').setValue('secret_sauce');
    // @TODO: find the correct selector to interact with the login button
    $('.btn_action').click();

    // Wait for the next screen
    // @TODO: find the correct selector of an element that can tell us that the new page is loaded
    $('.inventory_list').waitForDisplayed();
  });
});

// ------------------------------------------------------------------
// [emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /~/apps/Android.SauceLabs.Hybrid.app.1.0.0.apk
// [emulator-5554 Android 10 #0-0] Session ID: eade4f1d-4a8d-437c-9cb7-b1dfa438271d
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] » /tests/specs/assignment.one.spec.js
// [emulator-5554 Android 10 #0-0] HybridApp with `autoWebview: true`
// [emulator-5554 Android 10 #0-0]    ✓ should be able to login with native selectors
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] 1 passing (1.7s)
// ------------------------------------------------------------------
// [iPhone 12 iOS 14.5 #0-0] Running: iPhone 12 on iOS 14.5 executing /~/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip
// [iPhone 12 iOS 14.5 #0-0] Session ID: e8eef83f-156e-43a9-8f77-0ed38df0fdef
// [iPhone 12 iOS 14.5 #0-0]
// [iPhone 12 iOS 14.5 #0-0] » /tests/specs/assignment.one.spec.js
// [iPhone 12 iOS 14.5 #0-0] HybridApp with `autoWebview: true`
// [iPhone 12 iOS 14.5 #0-0]    ✓ should be able to login with native selectors
// [iPhone 12 iOS 14.5 #0-0]
// [iPhone 12 iOS 14.5 #0-0] 1 passing (1.5s)
