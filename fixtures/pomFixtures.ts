import { test as baseTest } from '@playwright/test';
import { ProductsPage } from '../pages/ProductsPage';
import { CheckoutPage } from '../pages/CheckoutPage';

// 1. Declare the types of fixtures you are creating
type Pages = {
  productsPage: ProductsPage;
  checkoutPage: CheckoutPage;
};

// 2. Extend the base test runner with custom fixtures
export const test = baseTest.extend<Pages>({
  productsPage: async ({ page }, use) => {
    // Set up: create instance and pass it to the test
    await use(new ProductsPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    // Set up: create instance and pass it to the test
    await use(new CheckoutPage(page));
  },
});

// 3. Re-export expect so test files only need one import source
export { expect } from '@playwright/test';