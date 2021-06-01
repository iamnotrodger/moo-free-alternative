import { clearCart, getCart } from './cart';
import { createProductElement, handleProductClick } from './product';

const checkoutReceipt = document.getElementById('checkout-receipt');
const checkoutProducts = document.getElementById('checkout-products');

export const handleCheckout = () => {
	clearCart();
	checkoutReceipt.innerHTML = '';
	populateReceipt();
};

export const populateCheckoutProducts = () => {
	const cart = getCart();

	checkoutProducts.innerHTML = '';

	cart.forEach((product) => {
		const productElement = createProductElement(
			product,
			true,
			handleCheckoutProductClick
		);
		checkoutProducts.appendChild(productElement);
	});
};

export const populateReceipt = () => {
	checkoutReceipt.innerHTML = '';
	const cart = getCart();
	let total = 0;

	cart.forEach((product) => {
		checkoutReceipt.innerHTML += `
            <div class="purchase-item">
                <h3 class="purchase-item__name">${product.name}</h3>
                <p class="purchase-item__price">$${product.price.toFixed(2)}</p>
            </div>
            `;
		total += product.price;
	});

	checkoutReceipt.innerHTML += `<h2 class="checkout-receipt__total">$${total.toFixed(
		2
	)}</h2>`;
};

const handleCheckoutProductClick = (product) => (event) => {
	handleProductClick(product)(event);

	const productElement = event.target.parentElement.parentElement;
	productElement.classList.add('product-remove');

	productElement.addEventListener(
		'transitionend',
		() => {
			productElement.remove();
		},
		{ once: true }
	);

	populateReceipt();
};
