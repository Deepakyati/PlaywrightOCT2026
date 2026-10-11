import { test, expect } from '../fixtures/pomFixtures';
import orderData from '../test-data/orderData.json';

test.describe('GreenKart Data-Driven E2E Suite', () => {
  for (const data of orderData) {
    test(`Verify purchase flow for ${data.productName} [${data.testId}]`, async ({
      productsPage,
      checkoutPage,
    }) => {
      // 1. Navigate and search
      await productsPage.navigate();
      await productsPage.searchProduct(data.searchQuery);

      // 2. Add product to cart and proceed
      await productsPage.addProductToCart(data.productName);
      await productsPage.proceedToCheckout();

      // 3. Apply promo code
      await checkoutPage.applyPromoCode(data.promoCode);
      await expect(checkoutPage.promoInfoText).toHaveText('Code applied ..!', {
        timeout: 10000,
      });

      // 4. Complete order
      await checkoutPage.completeOrder(data.country);

      // 5. Validate success message
      await expect(checkoutPage.successMessage).toContainText(
        'Thank you, your order has been placed successfully'
      );
    });
  }
});

