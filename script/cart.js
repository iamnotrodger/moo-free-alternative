let cart = new Map();
const cartKey = 'cart';

export const initialLoadCart = () => {
	const cartLocalStorage = localStorage.getItem(cartKey);
	if (cartLocalStorage) {
		cart = new Map(JSON.parse(cartLocalStorage));
	}

	updateNumCartElement(cart.size);
};

export const addToCart = (product) => {
	product.selected = true;
	cart.set(String(product.id), product);
	updateNumCartElement(cart.size);
	localStorage.setItem(cartKey, JSON.stringify([...cart]));
};

export const removeFromCart = (product) => {
	cart.delete(String(product.id));
	updateNumCartElement(cart.size);
	localStorage.setItem(cartKey, JSON.stringify([...cart]));
};

export const inCart = (id) => {
	return cart.has(id);
};

export const getCart = () => {
	return cart;
};

export const clearCart = () => {
	cart.clear();
	localStorage.removeItem(cartKey);
	updateNumCartElement(0);
};

const updateNumCartElement = (num) => {
	document.getElementById('cart-num').innerText = num || '';
};

export default cart;
