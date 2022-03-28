const baseUrl = 'http://localhost:4000/product';

exports.getProducts = async (animal, filter) => {
    if (animal) {
        try {
            let response = await fetch(`${baseUrl}/${animal}`);
            let result = await response.json();
            if(filter === 'price-higher') {
                let check = result.sort((a,b) => Number(b.price) - Number(a.price));
                console.log(check);
                return check;
            }
            else if(filter === 'price-lower') {
                let sorted =  result.sort((a,b) => Number(a.price) - Number(b.price));
                return sorted;
            }
            else if(filter === 'alphabetical'){
                let check = result.sort((a, b) => a.productName.localeCompare(b.productName));
                return check;
            }  
            else if(filter === 'alphabetical-reversed') {
                let check = result.sort((a, b) => b.productName.localeCompare(a.productName));
                return check;
            } 
        }
        catch (err) {
            console.log(err);
        }
    }
    else{
        try {
            let response = await fetch(`${baseUrl}`);
            let result = await response.json();
            if(filter === 'price-higher') {
                let check = result.sort((a,b) => Number(b.price) - Number(a.price));
                console.log(check);
                return check;
            }
            else if(filter === 'price-lower') {
                return result.sort((a,b) => Number(a.price) - Number(b.price));
            }
            else if(filter === 'alphabetical'){
                let check = result.sort((a, b) => a.productName.localeCompare(b.productName));
                return check;
            }  
            else if(filter === 'alphabetical-reversed') {
                let check = result.sort((a, b) => b.productName.localeCompare(a.productName));
                return check;
            }
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


