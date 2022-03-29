/**
 * Log the webview data for a specific page
 *
 * @param {string} webview
 */
export async function logWebViews(webview) {
  // For demo purpose we wait 5 seconds for the page to be loaded before we
  // get the contexts. This is normally a bad practice, but we will dive into
  // this in the next test
  await driver.pause(5000);
  console.log(
    `${driver.isAndroid ? 'Android' : 'iOS'} contexts for ${webview}: `,
    JSON.stringify(await driver.execute('mobile:getContexts'), null, 2)
  );
}

/**
 * Switch to a webview that includes or the title or the url.
 * If both are provided the title will be leading.
 * The provided title/url is case sensitive!
 *
 * @example
 *    // By using the title of the page
 *    switchToWebView({title:'(partial) title of the page'});
 *    // By using the url of the page
 *    switchToWebView({url:'https://www.example.com'});
 *
 * @param {object} data
 * @param {string} data?.title
 * @param {string} data?.url
 */
export async function switchToWebView({ title, url }) {
  // This method will wait until a condition becomes true. In our case we want
  // to wait until we have a webview that contains our title or url
  // See https://webdriver.io/docs/api/browser/waitUntil/
  await driver.waitUntil(
    async () => {
      // Get all the current contexts
      const contexts = await getCurrentContexts();
      const webview = contexts
        // first filter out the `NATIVE_APP` context
        .filter((context) => context.id !== 'NATIVE_APP')
        // Now find a matching title,url
        .find((context) => {
          // Check if the title or url includes our expectation. If so, then return it
          return title
            ? context.title.includes(title)
            : context.url.includes(url);
        });

      // If we found a matching webview above we will get back an object containing the following
      // {
      //    id: {string}
      //    title?: {string}
      //    url?: {string}
      //    // For Android
      //    webviewName?: {string}
      //    // For iOS
      //    bundleId?: {string}
      // }

      // If we didn't find a matching webview then retry,
      if (!webview) {
        return false;
      }

      // For iOS we can just switch to the webview based on it's webviewId
      if (driver.isIOS) {
        await driver.switchContext(webview.id);

        // Now tell the function that we are done by returning true
        return true;
      }

      // Android will only have 1 webview for the app, but that webview will contain multiple "tabs/windows"
      // We first need to switch to the webview
      await driver.switchContext(webview.webviewName);
      // and now switch to the "tab/window".
      await driver.switchToWindow(webview.id);

      // Now tell the function that we are done by returning true
      return true;
    },
    {
      timeout: 15000,
      timeoutMsg: `The webview containing ${title ? 'title' : 'url'}: "${
        title ? title : url
      }" was not found.`,
    }
  );
}

/**
 * Get the current contexts
 *
 * @returns {
 *  {
 *    id: {string}
 *    title: {string}
 *    url: {string}
 *    bundleId?: {string}
 *    webviewName?: {string}
 *  }[]
 * }
 */
async function getCurrentContexts() {
  // Instead of using the method `driver.getContexts` we are going to use this
  // because it will return more data, see also
  // http://appium.io/docs/en/commands/context/get-contexts/
  const contexts = await driver.execute('mobile: getContexts');

  // Now return the data
  return driver.isIOS ? contexts : parsedAndroidContexts(contexts);
}

/**
 * Parse the Android array and return the same object as iOS
 * @param {object} contexts
 *
 * Android will return something like this
 *
 * [
 *  {
 *    "proc": "@webview_devtools_remote_24408",
 *    "webview": "WEBVIEW_24408",
 *    "info": {
 *      "Android-Package": "com.saucelabshybridapp",
 *      "Browser": "Chrome/74.0.3729.185",
 *      "Protocol-Version": "1.3",
 *      "User-Agent": "Mozilla/5.0 (Linux; Android 10; Android SDK built for x86 Build/QSR1.200403.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/74.0.3729.185 Mobile Safari/537.36",
 *      "V8-Version": "7.4.288.28",
 *      "WebKit-Version": "537.36 (@22955682f94ce09336197bfb8dffea991fa32f0d)",
 *      "webSocketDebuggerUrl": "ws://127.0.0.1:10900/devtools/browser"
 *    },
 *    "pages": [
 *      {
 *        "description": "{\"attached\":true,\"empty\":false,\"height\":1827,\"screenX\":0,\"screenY\":66,\"visible\":true,\"width\":1080}",
 *        "devtoolsFrontendUrl": "http://chrome-devtools-frontend.appspot.com/serve_rev/@22955682f94ce09336197bfb8dffea991fa32f0d/inspector.html?ws=127.0.0.1:10900/devtools/page/F12DEA4C43DEE2BA6A1B7DF25A9960D4",
 *        "faviconUrl": "https://saucelabs.com/images/favicon.png",
 *        "id": "F12DEA4C43DEE2BA6A1B7DF25A9960D4",
 *        "title": "Cross Browser Testing, Selenium Testing, Mobile Testing | Sauce Labs",
 *        "type": "page",
 *        "url": "https://saucelabs.com/",
 *        "webSocketDebuggerUrl": "ws://127.0.0.1:10900/devtools/page/F12DEA4C43DEE2BA6A1B7DF25A9960D4"
 *      },
 *      {
 *        "description": "{\"attached\":false,\"empty\":false,\"height\":1827,\"screenX\":0,\"screenY\":0,\"visible\":true,\"width\":1080}",
 *        "devtoolsFrontendUrl": "http://chrome-devtools-frontend.appspot.com/serve_rev/@22955682f94ce09336197bfb8dffea991fa32f0d/inspector.html?ws=127.0.0.1:10900/devtools/page/59487B4462BDBAC07550CE9DCFA4A55D",
 *        "faviconUrl": "https://www.saucedemo.com/favicon.ico",
 *        "id": "59487B4462BDBAC07550CE9DCFA4A55D",
 *        "title": "Swag Labs",
 *        "type": "page",
 *        "url": "https://www.saucedemo.com/",
 *        "webSocketDebuggerUrl": "ws://127.0.0.1:10900/devtools/page/59487B4462BDBAC07550CE9DCFA4A55D"
 *      },
 *      {
 *        "description": "",
 *        "devtoolsFrontendUrl": "http://chrome-devtools-frontend.appspot.com/serve_rev/@22955682f94ce09336197bfb8dffea991fa32f0d/worker_app.html?ws=127.0.0.1:10900/devtools/page/374D4E2AAE28A145E0132A41E3189C34",
 *        "id": "374D4E2AAE28A145E0132A41E3189C34",
 *        "title": "Service Worker https://www.saucedemo.com/service-worker.js",
 *        "type": "service_worker",
 *        "url": "https://www.saucedemo.com/service-worker.js",
 *        "webSocketDebuggerUrl": "ws://127.0.0.1:10900/devtools/page/374D4E2AAE28A145E0132A41E3189C34"
 *      }
 *    ],
 *    "webviewName": "WEBVIEW_com.saucelabshybridapp"
 *  }
 *]
 *
 * @returns {
 *  {
 *    id: {string}
 *    title?: {string}
 *    url?: {string}
 *    webviewName: {string}
 *  }[]
 * }
 */
function parsedAndroidContexts(contexts) {
  // Android can give back multiple apps that support WebViews, so an array of WebView apps.
  // We know that our webview has the name `WEBVIEW_com.saucelabshybridapp` so we are going to
  // search for it and filter all other apps out.
  return (
    contexts
      .filter(
        (webview) => webview.webviewName === 'WEBVIEW_com.saucelabshybridapp'
      )[0]
      .pages // The pages array can contain real web pages, but also other types, like service workers.
      // We only need to have the real web pages, so we filter out all types that are not `type=page`
      .filter((page) => page.type === 'page')
      // Reconstruct the data so it will be equal to iOS WebView object
      .map((page) => ({
        // Keep in mind that all "tabs/windows" consist out of `CDwindow-{webviewId}` so we need to add that string
        id: `CDwindow-${page.id}`,
        title: page.title,
        url: page.url,
        webviewName: contexts[0].webviewName,
      }))
  );
}
