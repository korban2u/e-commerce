class Product {
    constructor(ref, price, description, photo) {
        this.ref = ref;
        this.price = price;
        this.description = description;
        this.photo = photo || 'http://placeimg.com/250/250/tech?' + Math.random();
    }

    search(keywords){
        return products.filter(product => {
            return product.description.includes(keywords) || product.ref.includes(keywords);
        });
    }
}

let products = [
    new Product('ref1', 10, 'Iphone 16', 'https://thumb.pccomponentes.com/w-530-530/articles/1085/10855021/1149-apple-iphone-16-128gb-negro.jpg'),
    new Product('ref2', 20, 'Clavier', 'https://www.keyouest.fr/wp-content/uploads/2020/10/clavier-circle-sans-fil.png'),
    new Product('ref3', 30, 'souris', 'https://sanipure.fr/wp-content/uploads/2020/06/souris-grise.jpg'),
];

export default {
    products : products,
    search : Product.prototype.search
}
