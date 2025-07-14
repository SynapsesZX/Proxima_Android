import { it } from 'mocha';

export default class BasePage {
  /**
   * Clicks an element on the page
   */
  public async clickElement(locator: string, timeout = 10000): Promise<void> {
    try {
      const element = $(locator);
      await element.waitForDisplayed({ timeout });
      await element.click();
    } catch (error) {
      throw new Error(`Cannot click element: ${locator}. Error: ${error}`);
    }
  }

  /**
   * Enters data into an input field
   */
  public async enterData(locator: string, value: string, timeout = 10000): Promise<void> {
    try {
      const element = $(locator);
      await element.waitForDisplayed({ timeout });
      await element.setValue(value);
    } catch (error) {
      throw new Error(`Cannot enter data in: ${locator}. Error: ${error}`);
    }
  }

  /**
   * Asserts the value of an attribute of an element
   */
  public async assertAttributeValue(
    locator: string,
    expectedValue: string,
    timeout = 20000,
    attribute = 'text',
  ): Promise<void> {
    try {
      const element = $(locator);
      await element.waitForDisplayed({ timeout });
      const actualValue = await element.getAttribute(attribute);
      expect(actualValue).toBe(expectedValue);
    } catch (error) {
      throw new Error(
        `Failed to assert attribute "${attribute}" on element: ${locator}. Expected: "${expectedValue}". Error: ${error}`,
      );
    }
  }

  /**
   * Scrolls to an element on the page
   */
  public async scrollToElement(locator: string, timeout = 10000): Promise<void> {
    try {
      const element = $(locator);
      await element.waitForDisplayed({ timeout });
      await element.scrollIntoView();
    } catch (error) {
      throw new Error(`Failed to scroll to element: ${locator}. Error: ${error}`);
    }
  }

  /**
   * Checks whether an element is displayed on the page
   */
  public async isElementDisplayed(locator: string, timeout = 10000): Promise<boolean> {
    try {
      const element = $(locator);
      await element.waitForDisplayed({ timeout });
      return await element.isDisplayed();
    } catch {
      return false;
    }
  }
}
