describe('Тестирование сайта testqastudio.me', function () {

    it('тест', function () {
       cy.visit('https://testqastudio.me/');
       cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait(5000);
       cy.get('#cart-modal > .off-modal-layer').click();
       cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
       cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
       cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
       cy.wait(5000);
       cy.get('.checkout').click();
       cy.get('#billing_first_name').type('Denis');
       cy.get('#billing_last_name').type('Mig');
       cy.get('#billing_address_1').type('18 Lenin.st');
       cy.get('#billing_city').type('SPb');
       cy.get('#billing_state').type('SPb');
       cy.get('#billing_postcode').type('123213');
       cy.get('#billing_phone').type('+79999999999');
       cy.get('#billing_email').type('Denis@mi.com');
       cy.get('#place_order').click();
       cy.wait(5000);
       cy.contains('Ваш заказ принят. Благодарим вас.');



    })
})    