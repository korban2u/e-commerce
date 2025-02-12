class Cart {
    constructor() {
        this.products = [];
    }

    addToCart(product) {
        let productInCart = this.products.find(item => item.product.ref === product.ref);

        if (productInCart) {
            productInCart.qty++;
        } else {
            this.products.push({ product: product, qty: 1 });
        }
    }

    emptyCart(){
        this.products = [];
    }

    // Fonction générique de calcul
    genericCalc(callback) {
        return this.products.reduce(callback, 0);
    }


}

export default {
    Cart: new Cart()
};
