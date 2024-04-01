const { faker } = require('@faker-js/faker');

class Products {

    constructor(limit){
        this.products = [];
        this.emulate(limit);
    }

    emulate(limit){
        for(let i = 0; i < limit; i++){
            this.products.push({
                name: faker.commerce.productName(),
                price: faker.commerce.price()
            });
        }
    }

    create(){

    }

    find(){
        return this.products;
    }

    findOne(){

    }

    delete(){

    }

}

module.exports = Products;
