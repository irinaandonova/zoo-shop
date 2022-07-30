import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as productService from "../../services/productService.js";
import Product from "../Product/Product.js";

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [filter, setFilter] = useState('alphabetical');
    const [ subtype, setSubtype ] = useState('all');

    const location = useLocation();
    const animal = location.pathname.split('/')[1];
    
    useEffect(() => {
        productService.getProducts(animal, filter, subtype)
            .then(result => setProducts(result))
            .catch(err => console.log(err))
    }, [animal, filter, subtype]);

    const subtypeHandler = async(e) => {
        await setSubtype(e.target.value);
        
    }
    return (
        <section className="home-page" >
            <article className="filter-article">
                <label htmlFor="filter" className="filter-label">Sort by:</label>
                <select id="filter" onChange={(e) => setFilter(e.currentTarget.value)} defaultValue={filter}>
                    <option value="alphabetical">Alphabetical(A-Z)</option>
                    <option value="alphabetical-reversed">Alphabetical(Z-A)</option>
                    <option value="price-higher">Price(decending)</option>
                    <option value="price-lower">Price(acending)</option>
                </select>
            </article>
            <article className="subtype-article">
                    <p className="subtype-p">Type product: </p>
                    <button className="subtype profile" onClick={subtypeHandler} value="all">All</button>
                    <button className="subtype profile" onClick={subtypeHandler} value="dry">Dry food</button>
                    <button className="subtype profile" onClick={subtypeHandler} value="canned">Canned food</button>
                    <button className="subtype profile" onClick={subtypeHandler} value="accessory">Accessory</button>
                </article>
            <article className="products">
                <ul className="all-products">
                    {products.length > 0 ?
                        products.map(x => <Product product={x} key={x._id} />)
                        :
                        <li className="no-products">There is no <span>{animal} </span>items at the moment</li>}
                </ul>
            </article>
        </section >
    )
}

export default Dashboard;