import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import Item from "./Item/Item.js";
import { useSelector } from "react-redux";
import Alerts from "../Common/Alerts/Alerts.js";

const Cart = () => {
    const [showAlert, setShowAlert] = useState(false);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const { userInfo, isAuthenticated } = useContext(AuthContext);

    const createOrderHandler = (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/auth/login');
        }
        if (cart.cartItems.length === 0) {
            setShowAlert(true);
            return;
        }
        navigate('/cart/order-info');
    }

    return (
        <section>
            {userInfo.hasOrder ?
                <section className="card-wrapper processing">
                    <p>Your order is being processed</p>
                </section>
                :
                <section className="cart-wrapper" >
                    <article onClick={() => setShowAlert(false)}>
                        <table className="cart-items-table">
                            <thead className="items-list">
                                <tr>
                                    <td>Image</td>
                                    <td>Product Name</td>
                                    <td>Quantity</td>
                                    <td>Unit price</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.cartItems.map(x => <Item item={x} key={x._id} />)}
                            </tbody>
                        </table>
                        <p className="item">Total price: {(cart.totalPrice).toFixed(2)}lv</p>

                    </article>
                    <button className="button" onClick={createOrderHandler}>Finalize order</button>
                    {
                        showAlert ?
                            <Alerts message={'No products in cart!'} />
                            :
                            null
                    }
                </section>
            }
        </section>
    );
}

export default Cart;