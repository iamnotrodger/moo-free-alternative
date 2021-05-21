const populateProducts = (id, products) => {
  const element = document.getElementById(id);
  element.innerHTML = "";
  products.forEach((product) => {
    element.innerHTML += `
          <div class="product"> 
            <div class='product__image' style="background-image: url(${
              product.image
            })">
                <i class="material-icons product__button ${
                  product.selected ? "product__button--selected" : ""
                }" key=${product.id}>${
      product.selected ? "remove" : "add_shopping_cart"
    }</i>
            </div>
            <div class="product__info">
                <h3 class="product__name">${product.name}</h3> 
                <p class="product__price"'>$${product.price}</p> 
          </div>
          </div>`;
  });
};

const bindProductClick = () => {
  Array.from(document.getElementsByClassName("product__button")).forEach(
    (product) => {
      product.addEventListener("click", () => {
        const id = product.getAttribute("key");

        if (!product.classList.contains("product__button--selected")) {
          product.classList.add("product__button--selected");
          product.innerHTML = "remove";
          addToCart(Number(id));
        } else {
          product.classList.remove("product__button--selected");
          product.innerHTML = "add_shopping_cart";
          removeFromCart(Number(id));
        }
      });
    }
  );
};
