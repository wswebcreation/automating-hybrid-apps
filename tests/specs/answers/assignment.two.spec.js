/**
 * Assignment 2:  The Full Potential of WebViews
 *         Goal:  Learn the full potential of WebViews
 *
 * 1. Check the 'TODO'
 * 2. Op a browser, enter this url
 *
 *      https://www.saucedemo.com
 *
 *    and use the DevTools and monitor the Application tab. There you will find the Cookies and the local storage.
 * 3. Now login with username "standard_user" and password "secret_sauce". Check the Cookies
 * 4. Add a product and check the localStorage
 * 5. Check the url of the Checkout Overview page
 *
 * When you walked through all steps then run the following commands in the terminal, make sure:
 * - you are in the root of the project
 * - you installed all dependencies with `npm install`
 *
 *    Android:
 *      npm run android.assignment.two
 *    iOS (if you have a Mac):
 *      npm run ios.assignment.two
 *
 */
describe('Checkout Overview', () => {
  // This is the code of the test that you would normally run to verify the checkout overview
  // You don't need to do anything here
  // `it.skip` means that it will skip this test, if you want to run this test then change `it.skip` to it.only` or `it
  it.skip('should be able verify the checkout overview', async () => {
    // Wait for the screen to be loaded
    await $('#login_button_container').waitForDisplayed();

    // Submit the form
    await $('#user-name').setValue('standard_user');
    await $('#password').setValue('secret_sauce');
    await $('.btn_action').click();

    // Wait for the next screen
    await $('.inventory_list').waitForDisplayed();

    // Select a product, to make it easier we select the first product of all products
    // and click on the add button
    await $$('.inventory_item')[0].$('.btn_primary.btn_inventory').click();

    // Go to the cart and verify that we are on the cart page
    await $('.shopping_cart_link').click();
    await $('#cart_contents_container').waitForDisplayed();

    // Go to the Personal info page and verify that we are there
    await $('.checkout_button').click();
    await $('#checkout_info_container').waitForDisplayed();

    // Submit personal information
    await $('[data-test="firstName"]').setValue('Sauce');
    await $('[data-test="lastName"]').setValue('Bot');
    await $('[data-test="postalCode"]').setValue('1234AB');
    await $('.cart_button').click();

    // Verify that we are on the Checkout Overview page
    await $('#checkout_summary_container').waitForDisplayed();

    // Do all you verification magic here
  });

  // `it.only` means that this test has focus, it you want to remove the focus then change `it.only` to `it`
  it.only('should be able to go directly to the Checkout Overview', async () => {
    // Wait for the screen to be loaded
    await $('#login_button_container').waitForDisplayed();

    // Delete the cookie and clear the local storage
    await browser.execute(
      'document.cookie = "session-username=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"'
    );
    await browser.execute('localStorage.clear();');

    // Now set the cookie with the user details
    // @TODO: Check which cookie and which value needs to be set.
    // @TODO: Replace `{cookie-name}` and `{cookie-value}` with the correct data
    await browser.execute('document.cookie="session-username=standard_user";');
    // Now set the local storage with the product we want to have
    // @TODO: Check which localStorage and which value needs to be set.
    // @TODO: Replace `{localStorage-name}` and `{localStorage-value}` with the correct data
    await browser.execute('localStorage.setItem("cart-contents", "[4]");');

    // @TODO: Check which url we need to load to get to the checkout overview
    // @TODO: Replace `{correct-url}` with the correct data
    // Now go to the correct url
    await browser.url('https://www.saucedemo.com/checkout-step-two.html');

    // Verify that we are on the Checkout Overview page
    await $('#checkout_summary_container').waitForDisplayed();

    // Do all you verification magic here
  });
});

// ------------------------------------------------------------------
// [emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /~/apps/Android.SauceLabs.Hybrid.app.1.0.0.apk
// [emulator-5554 Android 10 #0-0] Session ID: 01fedce5-17ab-40af-b4d4-ba3c847c5110
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] » /tests/specs/answers/assignment.two.js
// [emulator-5554 Android 10 #0-0] Checkout Overview
// [emulator-5554 Android 10 #0-0]    ✓ should be able verify the checkout overview
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] 1 passing (3.9s)
// ------------------------------------------------------------------
// [emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /~/apps/Android.SauceLabs.Hybrid.app.1.0.0.apk
// [emulator-5554 Android 10 #0-0] Session ID: 857c3152-8389-4c61-8b41-4c40314c026e
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] » /tests/specs/answers/assignment.two.js
// [emulator-5554 Android 10 #0-0] Checkout Overview
// [emulator-5554 Android 10 #0-0]    ✓ should be able to go directly to the Checkout Overview
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] 1 passing (1.1ms)
// ------------------------------------------------------------------
// [iPhone 13 iOS 15.4 #0-0] Running: iPhone 13 on iOS 15.4 executing /~/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip
// [iPhone 13 iOS 15.4 #0-0] Session ID: a481f95b-f022-4353-8a08-44fe4c80b763
// [iPhone 13 iOS 15.4 #0-0]
// [iPhone 13 iOS 15.4 #0-0] » /tests/specs/answers/assignment.two.js
// [iPhone 13 iOS 15.4 #0-0] Checkout Overview
// [iPhone 13 iOS 15.4 #0-0]    ✓ should be able verify the checkout overview
// [iPhone 13 iOS 15.4 #0-0]
// [iPhone 13 iOS 15.4 #0-0] 1 passing (3.1s)
// ------------------------------------------------------------------
// [iPhone 13 iOS 15.4 #0-0] Running: iPhone 13 on iOS 15.4 executing /~/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip
// [iPhone 13 iOS 15.4 #0-0] Session ID: e8608aa5-8bed-4b44-b05d-e45c0526f70a
// [iPhone 13 iOS 15.4 #0-0]
// [iPhone 13 iOS 15.4 #0-0] » /tests/specs/answers/assignment.two.js
// [iPhone 13 iOS 15.4 #0-0] Checkout Overview
// [iPhone 13 iOS 15.4 #0-0]    ✓ should be able to go directly to the Checkout Overview
// [iPhone 13 iOS 15.4 #0-0]
// [iPhone 13 iOS 15.4 #0-0] 1 passing (2.7s)
