import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import * as productService from "../../services/productsService.js";
import { addToCart } from '../../features/cartSlice.js';

const Details = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1);

    const { productId } = useParams();
    const dispatch = useDispatch();
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const minus = <FontAwesomeIcon icon={faMinus} />;
    const quantityHander = (type) => {
        if (type === "decrease") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }
    useEffect(() => {
        productService.getProduct(productId)
            .then(response => setProduct(response))
            .catch(err => console.log(err))
    }, [productId])

    const addToCartHandler = () => {
        dispatch(addToCart({ ...product, quantity }));
        alert('Успешно закупуване!');
    }
    console.log(product.comments)

    return (
        <section className="product-details">
            <h1>{product.productName}</h1>
            <article className="product-info">
                <img className="img" src={window.location.origin + "/" + product.imageUrl} alt="product" />
                <div className="details">
                    <p>{product.description}</p>
                    <p>Цена: {product.price}лв</p>
                    <article className="buy-article">
                        <article className="quantity-wrapper">
                            <button onClick={() => quantityHander('decrease')}>{minus}</button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={() => quantityHander('increase')}>{plus}</button>
                        </article>
                        <button className="button" onClick={addToCartHandler}>Купи</button>
                        <button className="button">Добави коментар</button>
                    </article>
                </div>
            </article>
            <article className="comments-wrapper">
            </article>
        </section>
    )
}

export default Details;