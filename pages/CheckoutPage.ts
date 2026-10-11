import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  page: Page;
  promoCodeInput: Locator;
  applyPromoButton: Locator;
  promoInfoText: Locator;
  placeOrderButton: Locator;
  countryDropdown: Locator;
  termsCheckbox: Locator;
  proceedOrderButton: Locator;
  successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.promoCodeInput = page.locator('.promoCode');
    this.applyPromoButton = page.locator('.promoBtn');
    this.promoInfoText = page.locator('.promoInfo');
    this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    this.countryDropdown = page.locator('select');
    this.termsCheckbox = page.locator('.chkAgree');
    this.proceedOrderButton = page.getByRole('button', { name: 'Proceed' });
    this.successMessage = page.locator('.wrapperTwo');
  }

  async applyPromoCode(code: string): Promise<void> {
    await this.promoCodeInput.fill(code);
    await this.applyPromoButton.click();
  }

  async completeOrder(countryName: string): Promise<void> {
    await this.placeOrderButton.click();
    await this.countryDropdown.selectOption(countryName);
    await this.termsCheckbox.check();
    await this.proceedOrderButton.click();
  }
}