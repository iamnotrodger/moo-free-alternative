const shopProducts = document.getElementById('shop-products');
const filter = document.getElementById('filter');

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
        populateProducts(shopProducts, addSelectedProperty(filteredProducts));
        bindProductClick();
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

initialLoadCart();
populateProducts(shopProducts, addSelectedProperty(products));
bindProductClick();

filter.addEventListener('submit', applyFilter);
