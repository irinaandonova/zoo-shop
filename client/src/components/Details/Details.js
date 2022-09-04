import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import * as productService from "../../services/productService.js";

import { addToCart } from '../../features/cartSlice.js';
import AddComment from '../Comment/AddComment.js';
import Comment from '../Comment/Comment.js';
import AuthContext from '../../context/AuthContext.js';
import { getComments } from '../../features/commentsSlice.js';
import StarRating from '../StarRating/StarRating.js';
import { getRating } from '../../features/ratingSlice.js';

const Details = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const { productId } = useParams();
    const { userInfo } = useContext(AuthContext);

    const dispatch = useDispatch();

    const comments = useSelector(state => state.comments.comments);

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
            .then(response => {
                dispatch(getRating({ productId: response._id, rating: response.rating }))
                dispatch(getComments({ productId, comments: response.comments }));
                setProduct(response);
            })
            .catch(err => console.log(err))
    }, [productId, dispatch]);

    const addToCartHandler = () => {
        if (userInfo._id) {
            if (userInfo.hasOrder === true) {
                alert('Вече имате направена поръчка, която се обработва!');
                return;
            }

            dispatch(addToCart({ ...product, quantity }));
            alert('Успешно закупуване!');
        }
        else {
            navigate('/auth/login')
        }
    }

    return (
        <section className="product-details">
            <h1>{product.productName}</h1>
            <article className="product-info">
                <img className="detail-img" src={window.location.origin + "/" + product.imageUrl} alt="product" />
                <div className="details">
                    <p>{product.description}</p>
                    <p>PriceL: {product.price}lv</p>
                    <article className="buy-article">
                        <article className="quantity-wrapper">
                            <button onClick={() => quantityHander('decrease')}>{minus}</button>
                            <span className="quantity">{quantity}</span>
                            <button onClick={() => quantityHander('increase')}>{plus}</button>
                        </article>
                        <button className="button" id='buy-btn' onClick={addToCartHandler}>Купи</button>
                    </article>
                    <StarRating product={product} />
                </div>
            </article>
            <article className="comments-wrapper">
                {userInfo.email ? <AddComment productId={productId} /> : null}
                {comments.length > 0 ? comments.map(x => <Comment key={x._id} comment={x} productId={product._id} />)
                    :
                    <p>No comments</p>}
            </article>
        </section>
    )
}

export default Details;

