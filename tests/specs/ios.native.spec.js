describe('iOS HybridApp', () => {
  it('should be able to login with native selectors', () => {
    // Wait for the screen to be loaded
    $(
      '*//XCUIElementTypeOther[@name="Swag Labs"]/*/XCUIElementTypeTextField'
    ).waitForDisplayed();

    // Submit the form
    $(
      '*//XCUIElementTypeOther[@name="Swag Labs"]/*/XCUIElementTypeTextField'
    ).setValue('standard_user');
    $(
      '*//XCUIElementTypeOther[@name="Swag Labs"]/*/XCUIElementTypeSecureTextField'
    ).setValue('secret_sauce');
    $('*//XCUIElementTypeButton[@name="Login"]').click();

    // Wait for the next screen
    $('*//XCUIElementTypeStaticText[@name="PRODUCTS"]').waitForDisplayed();
  });
});

// ------------------------------------------------------------------
// [iPhone 13 iOS 15.4 #0-0] Running: iPhone 13 on iOS 15.4 executing /~/apps/iOS.Simulator.SauceLabs.Hybrid.app.1.0.0.zip
// [iPhone 13 iOS 15.4 #0-0] Session ID: fac792bf-36a7-47ab-9c33-a7e9607d836f
// [iPhone 13 iOS 15.4 #0-0]
// [iPhone 13 iOS 15.4 #0-0] » /tests/specs/ios.native.spec.js
// [iPhone 13 iOS 15.4 #0-0] iOS HybridApp
// [iPhone 13 iOS 15.4 #0-0]    ✓ should be able to login with native selectors
// [iPhone 13 iOS 15.4 #0-0]
// [iPhone 13 iOS 15.4 #0-0] 1 passing (7.9s)
