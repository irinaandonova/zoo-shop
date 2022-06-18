const Product = require("../models/Product.js")

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
        let product = await Product.findById(id).lean()
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
        let products = [];

        products = allProducts.filter(x => x.animal === animal)

        return products;
    }
    catch (err) {
        console.log(err);
        return { status: 'err' };
    }
}

const rateProduct = async ({ _id, rating, userId }) => {
    try {
        let product = await Product.findById(_id);
        let index = product.rating.findIndex(x => x.userId.toString() === userId);

        if (index !== -1) {
            product.rating[index].rating = rating;
        }
        else {
            product.rating.push({ userId, rating });
        }

        await product.save();
        return { status: 'ok' };
    }
    catch (err) {
        console.log(err);
        return { status: 'error' }
    }
}
const productService = {
    getAll,
    getByType,
    getOne,
    rateProduct
}

module.exports = productService;