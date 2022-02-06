import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import productService from "../../services/productsService.js";
import Product from "../Product/Product.js";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
       
    useEffect(() => {
        productService.getProducts()
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [location]);

    return (
        <section className="home-page">
            <article className="products">
                <ul className="all-products">
                {products.map(x => <Product product={x} key={x._id}/>)}
                </ul>
            </article>
        </section>
    )
}

export default Dashboard;