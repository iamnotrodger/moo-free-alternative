let cart = new Set();
const cartKey = 'cart';

const initialLoadCart = () => {
    const cartString = localStorage.getItem(cartKey);
    if (cartString) cart = new Set(JSON.parse(cartString));
    updateNumCartElement(cart.size);
};

const addToCart = (id) => {
    cart.add(id);
    updateNumCartElement(cart.size);
    localStorage.setItem(cartKey, JSON.stringify([...cart]));
};

const removeFromCart = (id) => {
    cart.delete(id);
    updateNumCartElement(cart.size);
    localStorage.setItem(cartKey, JSON.stringify([...cart]));
};

const clearCart = () => {
    cart.clear();
    localStorage.removeItem(cartKey);
    updateNumCartElement(0);
};

const updateNumCartElement = (num) => {
    if (num) {
        document.getElementById('cart-num').innerText = num;
    } else {
        document.getElementById('cart-num').innerText = '';
    }
};
