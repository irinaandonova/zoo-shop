import { Link } from "react-router-dom";
const Product = ( {product} ) => {
    console.log(product)
    return (
        <li className="product">
            <p>Продукт: {product.productName}</p>
            <p>Цена: {product.price}</p>
            <p className="img"><img src={product.imageUrl} alt="product" /></p>
            <Link className="button" to={`/details/${product._id}`}>Детайли</Link>
        </li>
    );
}
export default Product;