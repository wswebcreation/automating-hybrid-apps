describe('Android HybridApp', () => {
  it('should be able to login with native selectors', async () => {
    // Wait for the screen to be loaded
    await $('*//*[@resource-id="user-name"]').waitForDisplayed();

    // Submit the form
    await $('*//*[@resource-id="user-name"]').setValue('standard_user');
    await $('*//*[@resource-id="password"]').setValue('secret_sauce');
    await $('*//*[@resource-id="login-button"]').click();

    // Wait for the next screen
    await $('*//*[@text="PRODUCTS"]').waitForDisplayed();
  });
});

// ------------------------------------------------------------------
// [emulator-5554 Android 10 #0-0] Running: emulator-5554 on Android 10 executing /~/apps/Android.SauceLabs.Hybrid.app.1.0.0.apk
// [emulator-5554 Android 10 #0-0] Session ID: 25d3c5a8-b26b-4578-bde4-1c3fc933d070
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] » /tests/specs/android.native.spec.js
// [emulator-5554 Android 10 #0-0] Android HybridApp
// [emulator-5554 Android 10 #0-0]    ✓ should be able to login with native selectors
// [emulator-5554 Android 10 #0-0]
// [emulator-5554 Android 10 #0-0] 1 passing (6.3s)
