const shopProducts = document.getElementById('shop-products');
const filter = document.getElementById('filter');
const tabs = document.querySelectorAll('.tab__link');

const addSelectedProperty = (products) => {
    return products.map((product) => ({
        ...product,
        selected: cart.has(product.id),
    }));
};

const applyFilter = (event) => {
    event.preventDefault();

    const filterData = new FormData(event.target);
    const categories = filterData.getAll('category');
    const price = filterData.get('price');

    if (categories.length > 0 || price) {
        const filteredProducts = filterProducts(products, categories, price);
        shopProducts.innerHTML = '';
        populateProducts(shopProducts, addSelectedProperty(filteredProducts));
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

const onTabClick = (event) => {
    const activeTab = document.querySelector('.active-tab');
    const selectedTab = document.getElementById(event.target.value);

    if (activeTab.id !== selectedTab.id) {
        activeTab.classList.remove('active-tab');
        activeTab.classList.add('inactive-tab');

        activeTab.addEventListener(
            'transitionend',
            () => {
                selectedTab.classList.add('active-tab');
                selectedTab.classList.remove('inactive-tab');
                //activeTab.classList.remove('inactive-tab');
            },
            { once: true }
        );
    }
};

initialLoadCart();
populateProducts(shopProducts, addSelectedProperty(products));

filter.addEventListener('submit', applyFilter);
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
