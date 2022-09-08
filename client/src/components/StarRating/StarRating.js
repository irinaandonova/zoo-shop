import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import * as productService from '../../services/productService.js';
import AuthContext from '../../context/AuthContext.js';
import { useDispatch, useSelector } from 'react-redux';
import { addRating } from '../../features/ratingSlice.js';

const StarRating = ({ product, handleModal }) => {
    const rating = useSelector(state => state.rating.finalRating);
    const usersVoted = useSelector(state => state.rating.rating).length;

    const dispatch = useDispatch();

    const { userInfo } = useContext(AuthContext);

    const onVoteHandler = async (e) => {
        if (!userInfo._id) {
            handleModal('You need to sign in to rate a product!')
        }
        
        try {
            let response = await productService.rateProduct({ _id: product._id, userId: userInfo._id, rating: e.target.value });
            if (response.status === 'ok') {
                dispatch(addRating({ rating: e.target.value, userId: userInfo._id }));
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <article className='stars-info-article'>
            <article className="stars-article">
                {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    index < rating ?
                        star =
                        <label className="star-label" key={index}>
                            <input type="radio" className="star-btn" value={ratingValue} onClick={onVoteHandler} />
                            <FontAwesomeIcon icon={faStar} color={'#020202;'} />
                        </label>
                        :
                        star =
                        <label className="star-label">
                            <input type="radio" className="star-btn white" value={ratingValue} onClick={onVoteHandler} />
                            <FontAwesomeIcon icon={faStar} color={'#cac6c6'} />
                        </label>
                    return star;
                })}
            </article>
            {rating ?
                <p className='rating-info'>Rating {rating} of {usersVoted} votes</p>
                :
                <p className='rating-info'>Be the first one to vote</p>
            }
        </article>
    )
}

export default StarRating;