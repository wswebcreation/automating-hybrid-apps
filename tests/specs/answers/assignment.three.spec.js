/**
 * Assignment 3:  (Complex) WebView Use Cases
 *         Goal:  Learn how to handle selecting (complex) WebViews
 *
 * There are 5 test cases in this test file. Every testcases starts with `it.skip('test-case-name')`. This means that
 * no test case will be executed.
 *
 * 1. We are going to run the first testcase called
 *    `should fail on Android to switch to the correct active Sauce Labs context when we try to verify page titles`,
 *    change the `it.skip` to `it.only` and run the following command in your terminal.
 *
 *    Android:
 *      npm run android.assignment.three
 *    iOS (if you have a Mac):
 *      npm run ios.assignment.three
 *
 *    You should get an error when you run the test because we didn't select the active window in the Android WebView.
 *    When done, change `it.only` back to `it.skip`
 *
 * 2. We are now going to look how Android (and or iOS) provide the WebView contexts by running a testcase that will
 *    print the WebViews to the console. Change the `it` of the testcase `should be able to log all the WebViews`
 *    from `it.skip` to `it.only` and run the following command in your terminal.
 *
 *    Android:
 *      npm run android.assignment.three
 *    iOS (if you have a Mac):
 *      npm run ios.assignment.three
 *
 *    You should now see that testcase `should be able to log all the WebViews` is running and will log how Android will
 *    see the WebViews.
 *    When done, change `it.only` back to `it.skip`
 *
 * 3. To make life a little bit easier for selecting the right WebView for AND Android AND iOS I've created a helper
 *    function which is called `switchToWebView()`. You can find the details in this file
 *      `{project-root}/tests/helpers/WebView.js`
 *    It is a cross platform way of selecting a WebView that will always work. The helper will accept or a (partial)
 *    title or url of the WebView you want to select.
 *    The assignment is to find the title or url you want to use for the following testcases and add the method to one
 *    of the following tests (or all three if you have the time)
 *
 *    - `should be able to switch to the Sauce Demo context and verify an error message`
 *    - `should be able to switch to the Sauce Labs context to see if we can verify a menu item`
 *    - `should be able to switch to the Open Source context to verify a menu item`
 *
 *    Change the `it` of the testcase that you want to run from `it.skip` to `it.only` and run the following command in
 *    your terminal.
 *
 *    Android:
 *      npm run android.assignment.three
 *    iOS (if you have a Mac):
 *      npm run ios.assignment.three
 *
 *    You should now see that the testcase(s) are running and will log and execute the test(s) in the correct context.
 *    When done, change `it.only` back to `it.skip`
 */
import {logWebViews, switchToWebView} from '../helpers/WebView';

describe('A hybrid app with multiple webviews', () => {
  beforeEach(() => {
    // We always need to start in the native context to be able to press the tab bar buttons
    driver.switchContext('NATIVE_APP');
  });

  // @TODO: as mentioned above, change `it.skip` to `it.only` if you only want to run this test
  it.skip('should fail on Android to switch to the correct active Sauce Labs context when we try to verify page titles', () => {
    /**
     * BAD PRACTICE!!!! We need to make sure the WebView is loaded and I don't
     * want to make it too complex for this testcase
     */
    driver.pause(5000);

    // This method will wait until a condition becomes true. In our case we want
    // See https://webdriver.io/docs/api/browser/waitUntil/
    driver.waitUntil(
      // Wait until we have at least 2 context, so at least a native and a WebView context
      () => driver.getContexts().length > 1,
      {
        timeout: 15000,
        timeoutMsg: 'Not more than one context was loaded in the expected time.'
      }
    );

    // Now switch to the WebView context, we will take the last because as
    // mentioned for iOS we can have multiple webviews
    driver.switchContext(driver.getContexts().pop());

    // Now expect that the first menu item will contain the text Swag Labs from the Swag Labs Webview
    expect(driver.getTitle()).toContain('Swag Labs');

    /// Switch back to the native context to be able to go to a new WebView
    driver.switchContext('NATIVE_APP');
    $('~test-sauce-labs').click();

    /**
     * BAD PRACTICE!!!! We need to make sure the WebView is loaded and I don't
     * want to make it too complex for this testcase
     */
    driver.pause(5000);

    // This method will wait until a condition becomes true. In our case we want
    // See https://webdriver.io/docs/api/browser/waitUntil/
    driver.waitUntil(
      // Wait until we have at least 2 context, so at least a native and a WebView context
      () => driver.getContexts().length > 1,
      {
        timeout: 15000,
        timeoutMsg: 'Not more than one context was loaded in the expected time.'
      }
    );

    // Now switch to the WebView context, we will take the last because as
    // mentioned for iOS we can have multiple webviews
    driver.switchContext(driver.getContexts().pop());

    // Now expect that the first menu item will contain the text `Cross Browser Testing` from the Sauce Labs Webview
    expect(driver.getTitle()).toContain('Cross Browser Testing');

    // For Android you will get an error like this
    // [emulator-5554 Android 10 #0-0] 1) A hybrid app with multiple webviews should fail to switch to the Sauce Labs context when we try to verify a menu item
    // [emulator-5554 Android 10 #0-0] expect(received).toContain(expected) // indexOf
    //
    // Expected substring: "Cross Browser Testing"
    // Received string:    "Swag Labs"
  });

  // @TODO: as mentioned above, change `it.skip` to `it.only` if you only want to run this test
  it.skip('should be able to log all the WebViews', () => {
    /**
     * NOTE:
     * The `$('~selector')` used below is a simplified way for WebdriverIO to
     * find elements by accessibilityId on Android and iOS in the
     * native context
     */
    logWebViews('Swag Labs');

    // Now open the Sauce Labs WebView
    $('~test-sauce-labs').click();
    logWebViews('Sauce Labs');

    // Now open the Open Source WebView
    $('~test-open-source').click();
    logWebViews('Open Source');
  });

  // @TODO: as mentioned above, change `it.skip` to `it.only` if you only want to run this test
  it.only('should be able to switch to the Sauce Demo context and verify an error message', () => {
    // Make sure that we open the Sauce Labs WebView
    $('~test-swag-labs').click();

    // @TODO: Add or the title or the url here as a property and run this testcase
    // @TODO: By using the title of the page
    // @TODO:    switchToWebView({title:'(partial) title of the page'});
    // @TODO: By using the url of the page
    // @TODO:    switchToWebView({url:'https://www.example.com'});
    switchToWebView({title: 'Swag Labs'});

    // Wait for the login button to appear and click on it
    $('.btn_action').waitForDisplayed();
    $('.btn_action').click();

    // Wait for the error text and verify it
    $('[data-test="error"]').waitForDisplayed();
    expect($('[data-test="error"]').getText()).toContain('Username is required');
  });

  // @TODO: as mentioned above, change `it.skip` to `it.only` if you only want to run this test
  it.skip('should be able to switch to the Sauce Labs context to see if we can verify a menu item', () => {
    // Open the Sauce Labs WebView
    $('~test-sauce-labs').click();

    // @TODO: Add or the title or the url here as a property and run this testcase
    // @TODO: By using the title of the page
    // @TODO:    switchToWebView({title:'(partial) title of the page'});
    // @TODO: By using the url of the page
    // @TODO:    switchToWebView({url:'https://www.example.com'});
    switchToWebView({title: 'Cross Browser Testing'});

    // Wait for the menu to appear and open it
    $('.nav-burger').waitForDisplayed();
    $('.nav-burger').click();
    $$('.nav-menu-list-item')[0].waitForDisplayed();

    // Now expect that the first menu item will contain the text Solutions
    expect($$('.nav-menu-list-item')[0].getText()).toEqual('Solutions');
  });

  // @TODO: as mentioned above, change `it.skip` to `it.only` if you only want to run this test
  it.skip('should be able to switch to the Open Source context to verify a menu item', () => {
    // Open the Open Source WebView
    $('~test-open-source').click();

    // @TODO: Add or the title or the url here as a property and run this testcase
    // @TODO: By using the title of the page
    // @TODO:    switchToWebView({title:'(partial) title of the page'});
    // @TODO: By using the url of the page
    // @TODO:    switchToWebView({url:'https://www.example.com'});
    switchToWebView({title: 'Open Source'});

    // Wait for the menu to appear and open it
    $('.navbar-toggler').waitForDisplayed();
    $('.navbar-toggler').click();
    $$('.nav-item')[0].waitForDisplayed();

    // Now expect that the first menu item will contain the text Solutions
    expect($$('.nav-item')[0].getText()).toEqual('Home');
  });
});
