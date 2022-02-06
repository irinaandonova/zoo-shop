const Product = require("../models/Product.js")

const getAll = async() => {
    try{
    let result  = await Product.find({}).lean();
        return result;
    }
    catch(err) {
        console.log(err);
        return {status: 'error'}
    }
}

const getOne = async(id) => {
    let product =  await Product.findById(id).lean();
    
    return product;
}

const getByType = async (animal) => {
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
    getByType,
    getOne
}

module.exports = productService;