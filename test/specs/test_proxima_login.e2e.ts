import BasePageAndroid from '../pageobjects/base.page';

const login_locators = {
  android: {
    emailInputField: '//android.widget.EditText',
    continueButton: '~Continue',
    loadingDataBasePopUp:
      '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View',
    notAllow: '~No, Thanks',
    notAllowPermissions:
      '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_button"]',
    proximaSwitchWidget: '//android.widget.Switch[@resource-id="android:id/switch_widget"]',
    alarmNavigateBack: '~Navigate up',
    dontAskGain:
      '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_deny_and_dont_ask_again_button"]',
    createTaskButton: '~Створити',
    createNewVisitButton: '~Новий візит',
    ustanovaEmpty: '~Установа*\nНе вказано',
    ustanovaApteka:
      '~121212\n, Аптека, Kirovogradska, Ємилівка, дорога ffff fff, -, company_id: 349686',
    saveButton: '~Зберегти',
  },
};
/*
describe('firstLaunchSetup', () => {
  const loginpage = new BasePageAndroid();
  const email = 'igorzyabrov2090@gmail.com';

  it('[@regression] Handle popup after login', async function () {
    this.timeout(12 * 60 * 1000);

    await loginpage.clickElement(login_locators.android.emailInputField);
    await loginpage.enterData(login_locators.android.emailInputField, email);

    await loginpage.clickElement(login_locators.android.continueButton, 30000);
    console.log('Continue button tapped, checking for loading popup...');
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
        await loginpage.clickElement(login_locators.android.notAllow);
        await loginpage.clickElement(login_locators.android.notAllow);
        await loginpage.clickElement(login_locators.android.notAllowPermissions);
        await browser.pause(1000);
      } else {
        console.log('Popup did not appear, skipping this test...');
        this.skip();
      }
    } catch (error: any) {
      console.log('Popup did not appear, skipping this test...');
    }
  });

  it('[@regression] Setup notifications and permissions', async function () {
    await loginpage.clickElement(login_locators.android.dontAskGain, 2000);
    await browser.pause(3000);
    const switchesArray = await $$(login_locators.android.proximaSwitchWidget);
    const switches = Array.from(switchesArray);

    const switchesCount = switches.length;

    if (switchesCount >= 8) {
      await switches[7].waitForDisplayed({ timeout: 5000 });
      await switches[7].click();
      console.log('8-th Switch clicked ');
    } else {
      console.log(`No Switch elements ${switchesCount}`);
    }
    await browser.pause(3000);
    const denyButton = await $(login_locators.android.notAllowPermissions);
    if (await denyButton.isDisplayed()) {
      await denyButton.click();
    }

    await browser.pause(3000);

    const backButton = await $(login_locators.android.alarmNavigateBack);
    if (await backButton.isDisplayed()) {
      await backButton.click();
    }
  });

  it('[@regression] Setup notifications and permissions step 2', async function () {
    await browser.pause(3000);
    await loginpage.clickElement(login_locators.android.dontAskGain);
  });

  it('[@regression] Setup notifications and permissions step 3', async function () {
    await browser.pause(3000);
  });
});
*/

describe('Smoke automation tests', () => {
  const loginpage = new BasePageAndroid();

  it('[@regression] Create the visit with valid data ( Planning )', async function () {
    await loginpage.clickElement(login_locators.android.createTaskButton);
    await loginpage.clickElement(login_locators.android.createNewVisitButton);
    await loginpage.clickElement(login_locators.android.ustanovaEmpty);
    await loginpage.clickElement(login_locators.android.ustanovaApteka);
    await loginpage.clickElement(login_locators.android.saveButton);
    await browser.pause(3000);
  });
});
