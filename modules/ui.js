import cart from './cart.js';

// Permet de construire le DOM représentant un produit
let displayProduct = (p) => {
    let productElement = document.createElement('div');
    productElement.classList.add("product");

    productElement.innerHTML = `
    <div class="photo">
        picto
        <a class="product-add2cart">
            <span class="mdi mdi-cart"></span>
        </a>
    </div>
    <div class="details">
        <div class="details-top">
            <strong class="bigger">${p.ref}</strong>
            <strong class="bigger">${p.price} €</strong>
        </div>
        <div class="details-description">
            ${p.description}
        </div>
    </div>
    `;

    productElement.querySelector('.product-add2cart').addEventListener('click', () => {
        cart.Cart.addToCart(p);
        displayCart();
    });

    // Ajout du produit au DOM
    document.getElementById("product-list").appendChild(productElement);
};

let buildProductsList = (products) => {
    products.forEach(product => {
        displayProduct(product);
    });
}

let displayCart = () => {
    let cartContent = document.getElementById('cart-content');
    cartContent.innerHTML = '';

    let cartProducts = cart.Cart.products;

    if (cartProducts.length === 0) {
        document.getElementById("cart-total").innerHTML = `0 €`;
        document.getElementById("total-products").innerHTML = `0`;
        return;
    }

    let tableRows = cartProducts.map(prod =>
        `<tr>
            <td>${prod.product.ref}</td>
            <td>${prod.product.price} €</td>
            <td>${prod.qty}</td>
        </tr>`
    ).join('');

    cartContent.innerHTML = `
        <thead>
            <tr>
                <th>Référence</th>
                <th>Prix</th>
                <th>Quantité</th>
            </tr>
        </thead>
        <tbody>
            ${tableRows}
        </tbody>
    `;

    // Calcul du total avec genericCalc
    let total = cart.Cart.genericCalc((acc, item) => acc + item.product.price * item.qty);
    document.getElementById("cart-total").innerHTML = `${total} €`;

    // Affichage du nombre total de produits
    let nbProducts = cart.Cart.genericCalc((acc, item) => acc + item.qty);
    document.getElementById("total-products").innerHTML = `${nbProducts}`;
};

export default {
    buildProductsList: buildProductsList,
    displayCart: displayCart,
    displayProduct:displayProduct,
};
