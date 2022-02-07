const Product = require("../models/Product.js")

const getAll = async () => {
    try {
        let result = await Product.find({}).lean();
        res.status(201).json({ result });
    }
    catch (err) {
        console.log(err);
        res.status(501).json('Connot fetch data!');
    }
}

const getOne = async (id) => {
    try {
        let product = await Product.findById(id).lean();
        res.status(201).json({ product })

    }
    catch (err) {
        console.log(err);
        res.status(501).json('Connot fetch data!');
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
    }
    catch (err) {
        console.log(err);
        res.status(501).json('Connot fetch data!');
    }
}
const productService = {
    getAll,
    getByType,
    getOne
}

module.exports = productService;