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
  it('should be able to login with web selectors', async () => {
    // Wait for the screen to be loaded
    // @TODO: find the correct selector of an element that can tell us that the page is loaded
    await $('replace-with-unique-selector').waitForDisplayed();

    // Submit the form
    // @TODO: find the correct selector to interact with the username field
    await $('replace-with-unique-selector').setValue('standard_user');
    // @TODO: find the correct selector to interact with the password field
    await $('replace-with-unique-selector').setValue('secret_sauce');
    // @TODO: find the correct selector to interact with the login button
    await $('replace-with-unique-selector').click();

    // Wait for the next screen
    // @TODO: find the correct selector of an element that can tell us that the new page is loaded
    await $('replace-with-unique-selector').waitForDisplayed();
  });
});
