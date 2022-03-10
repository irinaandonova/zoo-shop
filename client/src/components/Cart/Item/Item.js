import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../../features/cartSlice.js";
const Item = ({ item }) => {
    const plus = <FontAwesomeIcon icon={faPlus} />;
    const minus = <FontAwesomeIcon icon={faMinus} />;

    const dispatch = useDispatch();

    const [newQuantity, setNewQuantity] = useState(item.quantity);

    const quantityHander = (type) => {
        if (type === "decrease") {
            newQuantity > 0 && setNewQuantity(newQuantity - 1);
        } else {
            setNewQuantity(newQuantity + 1);
        }
    }


    return (
        <tr className="items-list">
            <td className="product-picture"><img className="item-image" src={item.imageUrl} alt="product"/></td>
            <td className="item">{item.productName}</td>
            <td>
                <article className="quantity-wrapper">
                    <article className="quantity-buttons">
                        <button onClick={() => quantityHander('decrease')}>{minus}</button>
                        <span className="quantity">{newQuantity}</span>
                        <button onClick={() => quantityHander('increase')}>{plus}</button>
                    </article>
                    <button className="bigger button checkout" onClick={() => dispatch(changeQuantity({ ...item, newQuantity }))}>Прoмени количество</button>
                </article>
            </td>
            <td>
            {item.price}
            </td>
            <td>{item.price * newQuantity}</td>
        </tr>
    )
}

export default Item;