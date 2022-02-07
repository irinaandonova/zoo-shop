import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as productService from "../../services/productsService.js";
import Product from "../Product/Product.js";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    
    const path = location.pathname.split('/')[1];
    console.log(path);

    useEffect(() => {
        productService.getProducts(path)
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [path]);

    return (
        <section className="home-page">
            <article className="products">
                <ul className="all-products">
                    {products.length > 0 ? 
                    products.map(x => <Product product={x} key={x._id} />)
                    :
                    <li>There is no <span>{path} </span>items at the moment</li>}
                </ul>
            </article>
        </section>
    )
}

export default Dashboard;