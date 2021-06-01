import { addToCart, removeFromCart, inCart } from './cart';

export const populateProducts = (element, products, click) => {
	products.forEach((product) => {
		const selected = inCart(String(product.id));
		const productElement = createProductElement(product, selected, click);
		element.appendChild(productElement);
	});
};

export const createProductElement = (
	product,
	selected = false,
	click = handleProductClick
) => {
	const element = document.createElement('div');
	element.classList.add('product');

	const image = document.createElement('div');
	image.classList.add('product__image');
	image.style.backgroundImage = `url(${product.image})`;
	element.appendChild(image);

	const button = document.createElement('i');
	button.className += `material-icons product__button ${
		selected ? 'product__button--selected' : ''
	}`;
	button.innerHTML = selected ? 'remove' : 'add_shopping_cart';
	button.addEventListener('click', click(product));
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

export const handleProductClick = (product) => (event) => {
	const button = event.target;

	if (!button.classList.contains('product__button--selected')) {
		button.innerHTML = 'remove';
		addToCart(product);
	} else {
		button.innerHTML = 'add_shopping_cart';
		removeFromCart(product);
	}

	button.classList.toggle('product__button--selected');
};
