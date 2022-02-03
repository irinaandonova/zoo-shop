const Product = require("../models/Product.js")

const getAll = async() => {
    return await Product.find({}).lean();
}

const getOne = async(id) => {
    let product =  await Product.findById(id).lean();
    
    return product;
}

const getByAnimal = async (animal) => {
    const allProducts = await getAll();  
    const products = [];
    allProducts.forEach(x=> {
        if(x.animal === animal) {
            products.push(x);
        }
    })
    return products;  
   
}
const productService = {
    getAll,
    getByAnimal,
    getOne
}