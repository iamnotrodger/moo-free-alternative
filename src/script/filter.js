import { inCart } from './cart';
import products from './data';
import { populateProducts } from './product';

export const applyFilter = (form, element) => {
	const filterData = new FormData(form);
	const categories = filterData.getAll('category');
	const price = filterData.get('price');
	element.innerHTML = '';

	if (categories.length > 0 || price) {
		const filteredProducts = filterProducts(products, categories, price);
		populateProducts(element, filteredProducts);
	} else {
		populateProducts(element, products);
	}
};

export const addSelectedProperty = (products) => {
	return products.map((product) => ({
		...product,
		selected: inCart(String(product.id)),
	}));
};

const filterProducts = (products, categories, price) => {
	const filteredProducts = products.filter((product) => {
		for (const category of categories) {
			if (category == 'lactose-free' && !product.lactoseFree) {
				return false;
			} else if (category == 'nut-free' && !product.nutFree) {
				return false;
			}
		}
		return true;
	});

	if (price == 'low-to-high') {
		filteredProducts.sort((a, b) => a.price - b.price);
	} else if (price == 'high-to-low') {
		filteredProducts.sort((a, b) => b.price - a.price);
	}

	return filteredProducts;
};
