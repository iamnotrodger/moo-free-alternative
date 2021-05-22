const shopProducts = document.getElementById('shop-products');
const filter = document.getElementById('filter');
const tabs = document.querySelectorAll('.tab__link');
const shopTab = document.getElementById('shop-tab');
const checkoutTab = document.getElementById('checkout-tab');
const checkoutButton = document.getElementById('checkout-button');

const addSelectedProperty = (products) => {
    return products.map((product) => ({
        ...product,
        selected: cart.has(product.id),
    }));
};

const applyFilter = (form) => {
    const filterData = new FormData(form);
    const categories = filterData.getAll('category');
    const price = filterData.get('price');
    shopProducts.innerHTML = '';

    if (categories.length > 0 || price) {
        const filteredProducts = filterProducts(products, categories, price);
        populateProducts(shopProducts, addSelectedProperty(filteredProducts));
    } else {
        populateProducts(shopProducts, addSelectedProperty(products));
    }
};

const filterProducts = (products, categories, price) => {
    const fileteredProducts = products.filter((product) => {
        for (category of categories) {
            if (category == 'lactose-free' && !product.lactoseFree) {
                return false;
            } else if (category == 'nut-free' && !product.nutFree) {
                return false;
            }
        }
        return true;
    });

    if (price == 'low-to-high') {
        fileteredProducts.sort((a, b) => a.price - b.price);
    } else if (price == 'high-to-low') {
        fileteredProducts.sort((a, b) => b.price - a.price);
    }

    return fileteredProducts;
};

const handleFilterSubmit = (event) => {
    event.preventDefault();
    applyFilter(event.target);
};

const handleTabClick = (event) => {
    const activeTab = document.querySelector('.active-tab');
    const selectedTab = document.getElementById(event.target.value);

    if (activeTab.id !== selectedTab.id) {
        activeTab.classList.remove('active-tab');
        activeTab.classList.add('inactive-tab');
        selectedTab.classList.add('active-tab');
        selectedTab.classList.remove('inactive-tab');
    }
};

const handleShopTabClick = () => {
    applyFilter(filter);
};

initialLoadCart();
populateProducts(shopProducts, addSelectedProperty(products));

filter.addEventListener('submit', handleFilterSubmit);
shopTab.addEventListener('click', handleShopTabClick);
checkoutTab.addEventListener('click', handleCheckoutTabClick);
tabs.forEach((tab) => tab.addEventListener('click', handleTabClick));
checkoutButton.addEventListener('click', handleCheckout);
