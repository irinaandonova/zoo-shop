import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContext from "../../context/AuthContext.js";
import cartService from "../../services/cartService.js";
import Item from "./Item/Item.js";
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const { userInfo } = useContext(AuthContext);
    console.log(`cart ${cart}`)
    const createOrderHandler = () => {
        let response = cartService.createOrder({ order: cart, user: userInfo._id });
        if(response === 'ok') {
        navigate('/');
        }
        else {
            console.log(response);
            console.log('error');
        }
    }

    return (
        <section className="cart-wrapper">
            <ul className="cart-items-list">
                {cart.cartItems.map(x => <Item item={x} key={x._id} />)}
            </ul>
            <p className="item">Обща сума: {(cart.totalPrice).toFixed(2)}лв</p>
            <button onClick={createOrderHandler}>Завърши поръчката</button>
        </section>
    )
}

export default Cart;