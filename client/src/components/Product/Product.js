import { Link } from "react-router-dom";
const Product = ( {product} ) => {
    return (
        <li className="product">
            <p className="product-name">Продукт: {product.productName}</p>
            <p className="product-price">Цена: {product.price}</p>
            <p className="img"><img src={product.imageUrl} alt="product" /></p>
            <Link className="button details" to={`/details/${product._id}`}>Детайли</Link>
        </li>
    );
}
export default Product;