import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import * as productService from "../../services/productsService.js";

import { addToCart } from '../../features/cartSlice.js';
import AddComment from '../Comment/AddComment.js';
import Comment from '../Comment/Comment.js';
import AuthContext from '../../context/AuthContext.js';
import { getComments } from '../../features/commentsSlice.js';

const Details = () => {
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();
    const { productId } = useParams();
    const { userInfo } = useContext(AuthContext);

    const dispatch = useDispatch();
    const commentsArr = useSelector(state => state.comments.commentsArr);

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
                setProduct(response);
                dispatch(getComments({productId, commentsArr: response.comments}))
            })
            .catch(err => console.log(err))
    }, [productId,dispatch]);


    const addToCartHandler = () => {
        if (userInfo._id) {
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
                    </article>
                </div>
            </article>
            <article className="comments-wrapper">
                {userInfo.email ? <AddComment  productId={productId}/> : null}
                
                {commentsArr.length > 0 ? commentsArr.map(x => <Comment key={x._id}comment={x} productId={product._id}/>)
                :
                <p>Няма коментари</p>}
            </article>
        </section>
    )
}

export default Details;

