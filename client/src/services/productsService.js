const baseUrl = 'http://localhost:4000/product';

const getProducts = async() => {
    console.log('here');
    try{
        let response = await fetch(`${baseUrl}`);
        return response;       
    }
    catch(err) {
        console.log(err);
    }   
}


const productService = {
    getProducts
}

export default productService;