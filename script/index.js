import '../style/main.scss';

import { initialLoadCart } from './cart';
import {
	handleCheckout,
	populateCheckoutProducts,
	populateReceipt,
} from './checkout';
import products from './data';
import { applyFilter } from './filter';
import { populateProducts } from './product';
import { handleTabClick } from './tab';

const checkoutTab = document.getElementById('checkout-tab');
const checkoutButton = document.getElementById('checkout-button');
const filter = document.getElementById('filter');
const shopProducts = document.getElementById('shop-products');
const shopTab = document.getElementById('shop-tab');
const tabs = document.querySelectorAll('.tab__link');

const handleFilterSubmit = (event) => {
	event.preventDefault();
	applyFilter(event.target, shopProducts);
};

const handleShopTabClick = () => {
	applyFilter(filter, shopProducts);
};

const handleCheckoutTabClick = () => {
	populateCheckoutProducts();
	populateReceipt();
};

//Initial load actions
initialLoadCart();
populateProducts(shopProducts, products);

//Event listeners
filter.addEventListener('submit', handleFilterSubmit);
shopTab.addEventListener('click', handleShopTabClick);
checkoutTab.addEventListener('click', handleCheckoutTabClick);
checkoutButton.addEventListener('click', handleCheckout);
tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));
