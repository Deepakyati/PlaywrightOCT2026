import {Page, Locator} from '@playwright/test';

export class ProductsPage{

    page:Page;
    searchInput:Locator;
    productCards:Locator;
    cartIcon:Locator;
    cartCheckoutButton:Locator;

    constructor(page:Page){
        this.page = page;
        this.searchInput = page.getByPlaceholder('Search for Vegetables and Fruits');
        this.productCards = page.locator('.product');
        this.cartIcon = page.locator('.cart-icon');
        this.cartCheckoutButton = page.getByRole('button', {name: 'PROCEED TO CHECKOUT'});

    }


    async navigate(): Promise<void> {
        await this.page.goto('/seleniumPractise/#/');
    }

    async searchProduct(productName: string): Promise<void> {
        await this.searchInput.fill(productName);
    }

    async addProductToCart(productName: string): Promise<void> {
        const product = this.productCards.filter({ hasText: productName });
        await product.locator('button').click();
    }   

    async proceedToCheckout(): Promise<void> {
        await this.cartIcon.click();
        await this.cartCheckoutButton.click();
    }

    






    

}