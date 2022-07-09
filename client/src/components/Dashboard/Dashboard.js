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
                <label htmlFor="filter" className="filter-label">Подраждане по:</label>
                <select id="filter" onChange={(e) => setFilter(e.currentTarget.value)} defaultValue={filter}>
                    <option value="alphabetical">Име(А-Я)</option>
                    <option value="alphabetical-reversed">Име(Я-А)</option>
                    <option value="price-higher">Цена(Низходящо)</option>
                    <option value="price-lower">Цена(Възходящо)</option>
                </select>
            </article>
            <article className="subtype-article">
                    <p className="subtype-p">Вид продукти: </p>
                    <button className="subtype profile" onClick={subtypeHandler} value="all">Всички</button>
                    <button className="subtype profile" onClick={subtypeHandler} value="dry">Суха храна</button>
                    <button className="subtype profile" onClick={subtypeHandler} value="canned">Консервирана храна</button>
                    <button className="subtype profile" onClick={subtypeHandler} value="accessory">Аксесоари</button>
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