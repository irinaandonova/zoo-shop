const Product = require("../models/Product.js")
const Comment = require("../models/Comment.js");

const getAll = async () => {
    try {
        let result = await Product.find({}).lean();
        return result;
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}

const getOne = async (id) => {
    try {
        let product = await Product.findById(id).lean();
        return product;
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}

const getByType = async (animal) => {
    try {
        const allProducts = await getAll();
        const products = [];
        allProducts.forEach(x => {
            if (x.animal === animal) {
                products.push(x);
            }
        })
        return products;
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}

const addComment = async ( userId, username, text, productId ) => {
    
    try {
        let product = await Product.findById(  productId );
        product.comments.push({userId, username, text, productId});
        await product.save();
        return { status: 'ok' };
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}

const productService = {
    getAll,
    getByType,
    getOne,
    addComment
}

module.exports = productService;