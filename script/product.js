const products = [
  {
    id: 1,
    name: "Not Nut",
    nutFree: true,
    glutenFree: true,
    price: 1.99,
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/chestnut-nut-nuts-peanuts-pistachio-cashew-1296x728-header-1296x728.jpg?w=1155&h=1528",
  },
  {
    id: 2,
    name: "Not Milk",
    nutFree: true,
    glutenFree: false,
    price: 2.35,
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/chestnut-nut-nuts-peanuts-pistachio-cashew-1296x728-header-1296x728.jpg?w=1155&h=1528",
  },
  {
    id: 3,
    name: "Not Milk",
    nutFree: false,
    glutenFree: true,
    price: 10.0,
    image:
      "https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/11/chestnut-nut-nuts-peanuts-pistachio-cashew-1296x728-header-1296x728.jpg?w=1155&h=1528",
  },
];

const populateProducts = (id, products, disabled = false) => {
  let element = document.getElementById(id);
  element.innerHTML = "";
  products.forEach((product) => {
    element.innerHTML += `<div class="product" disabled=${disabled}> 
          <div class="product__modal"> 
          <i class="material-icons product__button" key=${product.id}>add</i>
          </div> 
          <img class="product__image" src="${product.image}"> 
          <div class="product__info">
          <h3 class="product__name">${product.name}</h3> 
          <p class="product__price"'>${product.price}</p> 
          </div>
          </div>`;
  });
};

const bindClickOnProduct = () => {
  Array.from(document.getElementsByClassName("product__button")).forEach(
    (product) => {
      product.addEventListener("click", () => {
        const id = product.getAttribute("key");
        addToCart(Number(id));
      });
    }
  );
};
