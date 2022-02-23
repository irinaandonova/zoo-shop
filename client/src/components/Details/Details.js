import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import * as productService from "../../services/productsService.js";
import Comment from '../Comment/Comment.js';
import { addToCart } from '../../features/cartSlice.js';

const Details = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [comments, setComments] = useState([]);

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
            .then(response => setComments(response.comments))
            .catch(err => console.log(err))
    }, [productId])

    const addToCartHandler = () => {
        dispatch(addToCart({...product, quantity}));
        alert('Успешно закупуване!');
    }


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
                {comments.length > 0
                    ?
                    comments.map(x => <Comment comment={x} key={x._id} />)
                    :
                    <p className='no-comments'>No comments for this product yet</p>
                }
            </article>
        </section>
    )
}

export default Details;