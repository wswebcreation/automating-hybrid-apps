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
  it('should be able to go directly to the Checkout Overview', async () => {
    // Wait for the screen to be loaded
    await $('#login_button_container').waitForDisplayed();

    // Delete the cookie and clear the local storage
    // @TODO: Check which cookie needs to be removed.
    // @TODO: Replace `{cookie-name}` and `{cookie-value}` with the correct data
    await browser.execute(
      'document.cookie = "{cookie-name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"'
    );
    await browser.execute('localStorage.clear();');

    // Now set the cookie with the user details
    // @TODO: Check which cookie and which value needs to be set.
    // @TODO: Replace `{cookie-name}` and `{cookie-value}` with the correct data
    await browser.execute('document.cookie="{cookie-name}={cookie-value}";');
    // Now set the local storage with the product we want to have
    // @TODO: Check which localStorage and which value needs to be set.
    // @TODO: Replace `{localStorage-name}` and `{localStorage-value}` with the correct data
    await browser.execute(
      'localStorage.setItem("{localStorage-name}", "{localStorage-value}");'
    );

    // @TODO: Check which url we need to load to get to the checkout overview
    // @TODO: Replace `{correct-url}` with the correct data
    // Now go to the correct url
    await browser.url('{correct-url}');

    // Verify that we are on the Checkout Overview page
    await $('#checkout_summary_container').waitForDisplayed();

    // Do all you verification magic here
  });
});
