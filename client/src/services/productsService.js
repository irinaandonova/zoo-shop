const baseUrl = 'http://localhost:4000/product';

exports.getProducts = async (path) => {
    if (path) {
        try {
            let response = await fetch(`${baseUrl}/${path}`);
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
            console.log(err);
        }
    }
}

