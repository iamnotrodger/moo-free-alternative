const checkoutProducts = document.getElementById('checkout-products');
const checkoutReciept = document.getElementById('checkout-reciept');

let selectedProducts = [];

const handleCheckoutTabClick = () => {
    selectedProducts = filterSelectedProducts(products, cart);
    checkoutProducts.innerHTML = '';
    populateProducts(
        checkoutProducts,
        selectedProducts,
        handleCheckoutProductClick
    );
    populateRecipet(selectedProducts);
};

const filterSelectedProducts = (products, cart) => {
    const selectedProducts = [];

    products.forEach((product) => {
        if (cart.has(product.id)) {
            product.selected = true;
            selectedProducts.push(product);
        }
    });

    return selectedProducts;
};

const populateRecipet = (products) => {
    checkoutReciept.innerHTML = '';
    let total = 0;

    products.forEach((product) => {
        checkoutReciept.innerHTML += `
            <div class="purchase-item">
                <h3 class="purchase-item__name">${product.name}</h3>
                <p class="purchase-item__price">$${product.price.toFixed(2)}</p>
            </div>
            `;
        total += product.price;
    });

    checkoutReciept.innerHTML += `<h2 class="checkout-reciept__total">$${total.toFixed(
        2
    )}</h2>`;
};

const handleCheckoutProductClick = (id) => (event) => {
    handleProductClick(id)(event);

    const product = event.target.parentElement.parentElement;
    product.classList.add('product-remove');

    product.addEventListener(
        'transitionend',
        () => {
            product.remove();
        },
        { once: true }
    );

    selectedProducts = selectedProducts.filter((product) => product.id !== id);
    populateRecipet(selectedProducts);
};

const handleCheckout = () => {
    clearCart();
    selectedProducts = [];
    checkoutProducts.innerHTML = '';
    populateRecipet(selectedProducts);
};
