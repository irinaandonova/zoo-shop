import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as productService from "../../services/productsService.js";
import Product from "../Product/Product.js";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    
    const animal = location.pathname.split('/')[1];

    useEffect(() => {
        productService.getProducts(animal)
            .then(res => res.json())
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [animal]);

    return (
        <section className="home-page">
            <article className="products">
                <ul className="all-products">
                    {products.length > 0 ? 
                    products.map(x => <Product product={x} key={x._id} />)
                    :
                    <li>There is no <span>{animal} </span>items at the moment</li>}
                </ul>
            </article>
        </section>
    )
}

export default Dashboard;