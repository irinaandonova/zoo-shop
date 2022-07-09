const baseUrl = 'http://localhost:4000/product';
const sortProducts = (filter, products) => {
    if(filter === 'price-higher') {
        return products.sort((a,b) => Number(b.price) - Number(a.price));
    }
    else if(filter === 'price-lower') {
        return products.sort((a,b) => Number(a.price) - Number(b.price));
    }
    else if(filter === 'alphabetical'){
        return products.sort((a, b) => a.productName.localeCompare(b.productName));
    }  
    else if(filter === 'alphabetical-reversed') {
        return products.sort((a, b) => b.productName.localeCompare(a.productName));
    }
}
exports.getProducts = async (animal, filter, subtype) => {
    if(!animal) {
        animal = 'all';
    }
        try {
            let response = await fetch(`${baseUrl}/${animal}/${subtype}`);
            let result = await response.json();
            let products = result.products;
            return sortProducts(filter, products);
        }
        catch (err) {
            console.log(err);
        }
    }
    


exports.getProduct = async(id) => {

    try {
        let response = await fetch(`${baseUrl}/details/${id}`);
        let result = await response.json();
        return  JSON.parse(result);
    }
    catch(err) {
        throw new Error(err);
    }
}

exports.rateProduct = async({ _id, rating, userId }) => {
    try {
        let response = await fetch(`${baseUrl}/${_id}/rate`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ rating, userId })
        });

        let result = await response.json();
        return result;
    }
    catch(err) {
        console.log(err);
        return { status: 'err' };
    }
}

