import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import * as productService from "../../services/productsService.js";
import * as commentService from "../../services/commentService";

import { addToCart } from '../../features/cartSlice.js';
import AddComment from '../Comment/AddComment.js';
import Comment from '../Comment/Comment.js';
import AuthContext from '../../context/AuthContext.js';

const Details = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState(false);
    const [comments, setComments] = useState({});

    const navigate = useNavigate();

    const { productId } = useParams();
    const { userInfo } = useContext(AuthContext);

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
    }, [productId]);

    useEffect(() => {
        commentService.getAll({productId})
            .then(response => setComments(response))
            .catch(err => console.log(err))
    }, [productId])

    const addToCartHandler = () => {
        if(userInfo._id) {
        dispatch(addToCart({ ...product, quantity }));
        alert('Успешно закупуване!');
        }
        else {
            navigate('/auth/login')
        }
    }
    const addComment = () => {
        setComment(true); 
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
                        <button className="button" id='buy-btn' onClick={addToCartHandler}>Купи</button>
                        <button className="button" onClick={addComment}>Добави коментар</button>
                    </article>
                </div>
            </article>
            <article className="comments-wrapper">
            {comment ? <AddComment productId={product._id}/> : null}
            {comments.length > 0 ? 
            comments.map(x => <Comment key={x._id} comment={x}/>)
            :
            <p>Няма коментари</p>}
            </article>
        </section>
    )
}

export default Details;