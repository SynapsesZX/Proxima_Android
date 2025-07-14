import BasePageAndroid from '../pageobjects/base.page';

const login_locators = {
  android: {
    emailInputField: '//android.widget.EditText',
  },
};

describe('Instagram Login Screen ', () => {
  const loginpage = new BasePageAndroid();
  it('[@regression] Check login with invalid credentials', async function () {
    await loginpage.clickElement(login_locators.android.emailInputField);
    await loginpage.enterData(login_locators.android.emailInputField, 'bla bla');
  });
});
