import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import Item from "./Item/Item.js";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const { userInfo, isAuthenticated } = useContext(AuthContext);
    
    const createOrderHandler = (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/auth/login');
        }        
            if(cart.cartItems.length === 0) {
                alert('No products in cart!');
                return;
            }

            navigate('/cart/order-info');           
    }

    return (
        <section className="cart-wrapper">
            {userInfo.hasOrder ?
                <p>Your order is being processed</p>
                :
                <article>
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
                    <button className="button" onClick={createOrderHandler}>Finalize order</button>
                </article>
            }

        </section>
    )
}

export default Cart;