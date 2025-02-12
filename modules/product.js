class Product {
    constructor(ref, price,description) {
        this.ref = ref;
        this.price = price;
        this.description = description;
    }

    search(keywords){
        return products.filter(product => {
            return product.description.includes(keywords) || product.ref.includes(keywords);
        });
    }
}


let products = [
    new Product('ref1', 10, 'description1'),
    new Product('ref2', 20, 'description2'),
    new Product('ref3', 30, 'description3'),
];



export default {
    products : products,
    search : Product.prototype.search
}
