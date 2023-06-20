import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../types';

const Product = (product: IProduct) => {
    const navigate = useNavigate()
    const detailsHandler = () => {
        navigate(`/details/${product._id}`);
    }

    return (
        <li className="product" onClick={detailsHandler}>
            <p className="product-name">{product.productName}</p>
            <p className="img"><img src={product.imageUrl} alt="product" /></p>
            <p className="product-price">{product.price}</p>
        </li>
    );
}
export default Product;