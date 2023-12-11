
const productsContainer = document.getElementById("list-items");

function updateListCount() {
    const listCount = document.querySelector(".list-count");
    listCount.innerHTML = "(" + myShoppingList.length + ")";
}

function loadShoppingList (products){

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
                <div id="product-name" class="single-product-title">
                    ${productName}
                </div>
                </div>
                <div class="single-product-pricing-add">
                <div class="single-product-pricing">
                    <span class="price">${productPrice}</span>/<span class="weight">${productSize}</span>
                </div>
                <div class="single-product-add remove">
                    <button>
                        <div class="single-product-add-button-before"></div>
                        <div class="single-product-add-button">
                        <svg class="Icon_icon__1UNFx" width="22" height="22" viewBox="0 0 22 22" fill="#AF0006" xmlns="http://www.w3.org/2000/svg"><path fill="#AF0006" d="M13 6V10.999L18 11V13L13 12.999V18H11V12.999L6 13V11L11 10.999V6H13Z"></path></svg> 
                        <span>Remove</span>
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

function removeFromShoppingList() {
    let addButton = document.querySelectorAll(".single-product-add button");
    addButton.forEach((button) => {
        button.addEventListener("click", () => {
            console.log("remove from list");
            let productName = button.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerHTML.trim();
            console.log(productName);
            let foundProductIndex = myShoppingList.findIndex((product) => product.name === productName);
            if (foundProductIndex !== -1) {
                myShoppingList.splice(foundProductIndex, 1);
                saveShoppingListToStorage();
                location.reload();
            }
        });
    });
}

function loadShoppingListFromStorage() {
    const storedShoppingList = localStorage.getItem("myShoppingList");
    if (storedShoppingList) {
        const myShoppingList = JSON.parse(storedShoppingList);
        loadShoppingList(myShoppingList);
        removeFromShoppingList();
    }
}

updateListCount();

document.addEventListener("DOMContentLoaded", () => {
    loadShoppingListFromStorage();
});