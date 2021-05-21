let cart = new Map();
const cartKey = "cart";

const initialLoadCart = () => {
  const cartString = localStorage.getItem(cartKey);
  if (cartString) cart = new Map(JSON.parse(cartString));
  updateNumCartElement(cart.size);
};

const addToCart = (id) => {
  const product = cart.get(id);

  if (product) {
    cart.set(id, product + 1);
  } else {
    cart.set(id, 1);
    updateNumCartElement(cart.size);
  }

  localStorage.setItem(cartKey, JSON.stringify(Array.from(cart.entries())));
};

const removeFromCart = (id) => {
  const product = cart.get(id);

  if (product) {
    cart.set(id, product - 1);
  } else {
    cart.delete(id);
    updateNumCartElement(cart.size);
  }

  localStorage.setItem(cartKey, JSON.stringify(Array.from(cart.entries())));
};

const clearCart = () => {
  cart.clear();
  localStorage.removeItem(cartKey);
  updateNumCartElement(0);
};

const updateNumCartElement = (num) => {
  if (num) {
    document.getElementById("cart-num").innerText = num;
  } else {
    document.getElementById("cart-num").innerText = "";
  }
};

