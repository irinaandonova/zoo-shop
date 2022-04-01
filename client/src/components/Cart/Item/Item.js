import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { increment, decrement} from "../../../features/cartSlice.js";
import { useState } from 'react';
const Item = ({  item }) => {
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const minus = <FontAwesomeIcon icon={faMinus} />;
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(item.quantity);
    const _id = item._id;

    
    const quantityHander = (type) => {
        if (type === "decrement") {
             dispatch(decrement({ _id }));
            setQuantity(quantity - 1);
            console.log(quantity);
        } else {
             dispatch(increment({_id}));
            setQuantity(quantity + 1);
            console.log(quantity);
        }
    }


    return (
        <tr className="items-list">
            <td className="product-picture"><img className="item-image" src={item.imageUrl} alt="product" /></td>
            <td className="item">{item.productName}</td>
            <td>
                <article className="quantity-wrapper">
                    <article className="quantity-buttons">
                        <button onClick={() => quantityHander('decrement')}>{minus}</button>
                        <span className="quantity">{quantity}</span>
                        <button onClick={() => quantityHander('increment')}>{plus}</button>
                    </article>
                </article>
            </td>
            <td>
                {item.price}
            </td>
            <td>{(item.price * quantity).toFixed(2)}</td>
        </tr>
    )
}

export default Item;