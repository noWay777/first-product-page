const searchInput = document.getElementById('search-input');
const products = document.querySelectorAll('.product-item');
const buttons = document.querySelectorAll('.filter');
const priceBtn = document.getElementById('btn-price');



const searchHandler = (event) => {
    const searchValue = event.target.value.toLowerCase().trim();
    products.forEach((product) => {
        const productName = product.children[1].innerText.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block'
        } else {
            product.style.display = 'none'
        }
    })
}

const filterHandler = (event) => {
    const filter = event.target.dataset.filter;
    products.forEach((product) => {
        const category = product.dataset.category;
        if (filter === 'all') {
            product.style.display = 'block'
        } else {
            if (filter === category) {
                product.style.display = 'block'
            } else {
                product.style.display = 'none'
            }
        }
    })

};

const searchPriceHandler = (event) => {
    const searchPrice = +event.target.parentElement.children[0].value;
    products.forEach((product) => {
        const productPrice = product.children[2].innerText;
        const price = +productPrice.split(" ")[1];
        console.log(price);

        if (!searchPrice) {
            product.style.display = 'block'
        } else {
            if (price === searchPrice) {
                product.style.display = 'block'
            } else {
                product.style.display = 'none'
            }
        }

    })
};
buttons.forEach((button) => {
    button.addEventListener('click', filterHandler);
});

priceBtn.addEventListener('click', searchPriceHandler);
