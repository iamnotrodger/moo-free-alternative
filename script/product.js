const createProductElement = (product, click = productClick) => {
    const element = document.createElement('div');
    element.classList.add('product');

    const image = document.createElement('div');
    image.classList.add('product__image');
    image.style.backgroundImage = `url(${product.image})`;
    element.appendChild(image);

    const button = document.createElement('i');
    button.className += `material-icons product__button ${
        product.selected ? 'product__button--selected' : ''
    }`;
    button.innerHTML = product.selected ? 'remove' : 'add_shopping_cart';
    button.addEventListener('click', click(product.id));
    image.appendChild(button);

    const info = document.createElement('div');
    info.classList.add('product__info');
    const name = document.createElement('h3');
    name.classList.add('product__name');
    name.innerHTML = product.name;
    const price = document.createElement('p');
    price.classList.add('product__price');
    price.innerHTML = '$' + product.price.toFixed(2);

    info.appendChild(name);
    info.appendChild(price);
    element.appendChild(info);

    return element;
};

const productClick = (id) => (event) => {
    const button = event.target;

    if (!button.classList.contains('product__button--selected')) {
        button.innerHTML = 'remove';
        addToCart(id);
    } else {
        button.innerHTML = 'add_shopping_cart';
        removeFromCart(id);
    }

    button.classList.toggle('product__button--selected');
};

const populateProducts = (element, products, click) => {
    products.forEach((product) => {
        const productElement = createProductElement(product, click);
        element.appendChild(productElement);
    });
};

const bindProductClick = (selector, click) => {
    document.querySelectorAll(selector).forEach((product) => {
        product.addEventListener('click', click);
    });
};
