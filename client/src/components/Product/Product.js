import { Link } from "react-router-dom";
const Product = ({ product }) => {
    return (
        <li className="product">
            <p className="product-name">Product: {product.productName}</p>
            <p className="product-price">Price: {product.price}</p>
            <p className="img"><img src={product.imageUrl} alt="product" /></p>
            <Link className="button details-btn" to={`/details/${product._id}`}>Details</Link>
        </li>
    );
}
export default Product;