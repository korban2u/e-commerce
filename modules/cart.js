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

        this.saveToStorage();
    }

    emptyCart(){
        this.products = [];

        this.saveToStorage();
    }


    genericCalc(callback) {
        return this.products.reduce(callback, 0);
    }


    saveToStorage() {

        const simpleProducts = this.products.map(item => ({
            product: {
                ref: item.product.ref,
                price: item.product.price,
                description: item.product.description,
                photo: item.product.photo
            },
            qty: item.qty
        }));
        localStorage.setItem('cart', JSON.stringify(simpleProducts));
    }


    loadFromStorage() {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            this.products = JSON.parse(savedCart);
        }
    }
}

export default {
    Cart: new Cart()
};
