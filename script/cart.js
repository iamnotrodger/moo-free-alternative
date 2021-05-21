let cart = new Map();
const cartKey = "cart";

const addToCart = (id) => {
  cart.set(id, true);
  updateNumCartElement(cart.size);
};

const removeFromCart = (id) => {
  cart.delete(id);
  updateNumCartElement(cart.size);
};

const clearCart = () => {
  cart.clear();
  updateNumCartElement(0);
};

const updateNumCartElement = (num) => {
  if (num) {
    document.getElementById("cart-num").innerText = num;
  } else {
    document.getElementById("cart-num").innerText = "";
  }
};
