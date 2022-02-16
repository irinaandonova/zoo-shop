const baseUrl = 'http://localhost:4000/product';

exports.getProducts = async (animal) => {
    if (animal) {
        try {
            let response = await fetch(`${baseUrl}/${animal}`);
            return response;
        }
        catch (err) {
            console.log(err);
        }
    }
    else{
        try {
            let response = await fetch(`${baseUrl}`);
            return response;
        }
        catch (err) {
        throw new Error(err);

        }
    }
}

exports.getProduct = async(id) => {
    try{
        let response = await fetch(`${baseUrl}/details/${id}`);
        let result = await response.json();
        
        return  JSON.parse(result);
    }
    catch(err) {
        throw new Error(err);
    }
}

