const availableProducts = [
    {
        name: "Beef Bulgogi",
        price: "$12.99",
        size: "16 Oz",
        category: "Entrées & Sides",
        image: "assets/tj-beef-bulgogi.png"
    },
    {
        name: "Cheddar Cheese with Scotch Bonnet Chili Peppers",
        price: "$9.99",
        size: "1 Lb",
        category: "Wedges, Wheels, Loaves, Logs",
        image: "assets/tj-cheddar.png"
    },
    {
        name: "Double Chocolate Croissants",
        price: "$5.49",
        size: "12 Oz",
        category: "Cool Desserts",
        image: "assets/tj-chocolate-croissants.png"
    },
    {
        name: "Cinnamon Coffee Cake",
        price: "$5.99",
        size: "16 Oz",
        category: "Sweet Stuff",
        image: "assets/tj-cinnamon-coffee-cake.png"
    },
    {
        name: "Cold Brew Coffee & Boba Coconut Non-Dairy Dessert",
        price: "$3.49",
        size: "16 Fl Oz",
        category: "Cool Desserts",
        image: "assets/tj-coffee-boba-ice-cream.png"
    },
    {
        name: "Gnocchi Alla Romana",
        price: "$4.49",
        size: "14.1 Oz",
        category: "Appetizers",
        image: "assets/tj-gnocchi-alla-romana.png"
    },
    {
        name: "Baked Pizza Flavored Pillow Crisps",
        price: "$1.99",
        size: "3.5 Oz",
        category: "Chips, Crackers & Crunchy Bites",
        image: "assets/tj-pizza-crisps.png"
    },
    {
        name: "Roasted Garlic & Pesto Pizza with Deep Fried Crust",
        price: "$5.99",
        size: "14.1 Oz",
        category: "Entrées & Sides",
        image: "assets/tj-roasted-garlic-pizza.png"
    },
    {
        name: "Sesame Miso Salad with Salmon",
        price: "$6.99",
        size: "10.25 Oz",
        category: "Salads, Soups & Sides",
        image: "assets/tj-salmon-salad.png"
    },
    {
        name: "Greek Spanakopita",
        price: "$4.49",
        size: "14.1 Oz",
        category: "Appetizers",
        image: "assets/tj-spanakopita.png"
    },
    {
        name: "Sweet Potato Fries",
        price: "$2.49",
        size: "15 Oz",
        category: "Entrées & Sides",
        image: "assets/tj-sweet-potato-fries.png"
    },
    {
        name: "Turkey Burgers",
        price: "$3.79",
        size: "16 Oz",
        category: "Entrées & Sides",
        image: "assets/tj-turkey-burgers.png"
    }
];

function addAvailableProducts (products){
    const productsContainer = document.getElementById("products");

    products.forEach(product => {

        const productName = product.name;
        const productPrice = product.price;
        const productSize = product.size;
        const productCategory = product.category;
        const productImage = product.image;

        productsContainer.insertAdjacentHTML('beforeend',
            `<div class="single-product-container">
            <div style="background-image: url(${productImage});" class="single-product-img"></div>
            <div class="single-product-content">
                <div class="single-product-cat-title"> <div class="single-product-category">
                    ${productCategory}
                </div>
                <div class="single-product-title">
                    ${productName}
                </div>
                </div>
                <div class="single-product-pricing-add">
                <div class="single-product-pricing">
                    <span class="price">${productPrice}</span>/<span class="weight">${productSize}</span>
                </div>
                <div class="single-product-add">
                    <button>
                        <div class="single-product-add-button-before"></div>
                        <div class="single-product-add-button">
                        <svg class="Icon_icon__1UNFx" width="22" height="22" viewBox="0 0 22 22" fill="#AF0006" xmlns="http://www.w3.org/2000/svg"><path fill="#AF0006" d="M13 6V10.999L18 11V13L13 12.999V18H11V12.999L6 13V11L11 10.999V6H13Z"></path></svg> 
                        <span>Add to List</span>
                        </div>
                        <div class="single-product-add-button-after"></div>
                    </button>
                </div>
                </div>
            </div>
            </div>`
        );
        
    });
}

addAvailableProducts(availableProducts);