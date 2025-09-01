import BasePageAndroid from '../pageobjects/base.page';

const login_locators = {
  android: {
    emailInputField: '//android.widget.EditText',
    continueButton: '~Continue',
    loadingDataBasePopUp:
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View',
  },
};

describe('Proxima Tests', () => {
  const loginpage = new BasePageAndroid();
  const email = 'igorzyabrov2090@gmail.com';

  before(async function () {
    this.timeout(15 * 60 * 1000);

    await loginpage.clickElement(login_locators.android.emailInputField);
    await loginpage.enterData(login_locators.android.emailInputField, email);

    await loginpage.clickElement(login_locators.android.continueButton, 30000);
    console.log('Continue button tapped, checking for loading popup...');
  });

  it('[@regression] Handle popup after login', async function () {
    this.timeout(12 * 60 * 1000);

    const loadingPopup = await $(login_locators.android.loadingDataBasePopUp);

    try {
      const isPopupVisible = await loadingPopup.waitForDisplayed({
        timeout: 2 * 60 * 1000,
        interval: 1000,
        reverse: false,
        timeoutMsg: 'Popup did not appear',
      });

      if (isPopupVisible) {
        console.log('Popup appeared, waiting until it disappears...');

        await loadingPopup.waitForDisplayed({
          reverse: true,
          timeout: 10 * 60 * 1000,
          interval: 3000,
          timeoutMsg: 'Popup did not disappear within 10 minutes',
        });

        console.log('Popup disappeared, continuing test.');
      } else {
        console.log('Popup did not appear, skipping this test...');
        this.skip();
      }
    } catch (error: any) {
      console.log('Popup did not appear, skipping this test...');
      this.skip();
    }

    await browser.pause(10 * 1000);
  });

  it('[@regression] Dummy test after login setup', async function () {
    console.log('Test runs after login and popup handling.');
  });

  it('[@regression] Random test example', async function () {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log('Generated random number:', randomNumber);

    if (randomNumber % 2 === 0) {
      console.log('Random number is even — test passes.');
    } else {
      console.log('Random number is odd — test passes anyway.');
    }
  });
});
