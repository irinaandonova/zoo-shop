import {  useState } from "react"
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
        <li className="items-list">
            <article className="item-info">
                <p className="item">{item.productName}</p>
                <span>{item.quantity} x {item.price} = {(item.quantity * item.price).toFixed(2)}</span>
            </article>
            <article className="quantity-wrapper">
                <article className="quantity-buttons">
                <button onClick={() => quantityHander('decrease')}>{minus}</button>
                <span className="quantity">{newQuantity}</span>
                <button onClick={() => quantityHander('increase')}>{plus}</button>
                </article>
                <button className="bigger button" onClick={() => dispatch(changeQuantity({...item, newQuantity}))}>Прoмени количество</button>
            </article>
        </li>
    )
}

export default Item;