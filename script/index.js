initialLoadCart();

const addSelectedProperty = () => {
  const something = products.map((product) => ({
    ...product,
    selected: cart.has(product.id),
  }));

  console.log(something);
  return something;
};

const filterSelected = () => {
  const filteredProducts = [];
  return filteredProducts;
};

populateProducts("shop-products", addSelectedProperty());
bindProductClick();
