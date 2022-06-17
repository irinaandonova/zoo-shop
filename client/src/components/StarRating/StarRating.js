import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect, useState } from 'react';
import * as productService from '../../services/productService.js';
import AuthContext from '../../context/AuthContext.js';
const StarRating = ({ _id }) => {
    const [rating, setRating] = useState();
    const { userInfo } = useContext(AuthContext);

    	useEffect(() => {
            productService.getProduct(_id)
                        .then(response => {
                            let finalRating = response.rating / response.rating.length;
                            console.log(response.rating);
                            setRating(finalRating)
                        })
                        .catch(err => console.log(err))
        }, [_id]);

        const onVoteHandler = async(e) => {
            console.log(e.value);
            let rating = { user: userInfo._id, value: e.value };
            try {
            let response = await productService.rateProduct(_id, rating);
            if(response.status === 'ok') {
                setRating(response.status);
            }
            }
            catch(err) {
                console.log(err);
            }
        }
    return (
        <article className="stars-article">
            {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                index < rating ?
                    star =
                    <label className="star-label">
                        <input type="radio" className="star-btn" value={ratingValue} onClick={(value) => onVoteHandler}/>
                        <FontAwesomeIcon icon={faStar} />
                    </label>
                    :
                    star =
                    <label className="star-label">
                        <input type="radio" className="star-btn white" value={ratingValue} />
                        <FontAwesomeIcon icon={faStar} color={'#cac6c6'}/>
                    </label>
                return star;
            })}
        </article>

    )
}

export default StarRating;