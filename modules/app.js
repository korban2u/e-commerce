import product from './product.js';
import displayProduct from './ui.js';
import cart from "./cart.js";

function init(){
    displayProduct.buildProductsList(product.products);
    document.getElementById("product-search").addEventListener("keyup", (e) => {
        document.getElementById("product-list").innerHTML = "";
        let keywords = e.target.value;
        let results = product.search(keywords);
        displayProduct.buildProductsList(results);
    });

    document.getElementById("empty-cart").addEventListener("click", () => {
        cart.Cart.emptyCart();
        displayProduct.displayCart();
    });

}

export default {
    init : init
}
