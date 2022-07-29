import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import Item from "./Item/Item.js";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const { userInfo, isAuthenticated } = useContext(AuthContext);

    const createOrderHandler = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) {
            navigate('/auth/login');
        }

        try {
            if(cart.cartItems.length === 0) {
                alert('Нямате продукти в количката!');
                return;
            }
            navigate('/cart/order-info');           
        }
        catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="cart-wrapper">
            {userInfo.hasOrder ?
                <p>Вашата поръчка се обработва</p>
                :
                <article>
                    <table className="cart-items-table">
                        <thead className="items-list">
                            <tr>
                                <td>Снимка</td>
                                <td>Име на продукта</td>
                                <td>Kоличество</td>
                                <td>Единична цена</td>
                                <td>Общо</td>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.cartItems.map(x => <Item item={x} key={x._id} />)}
                        </tbody>
                    </table>
                    <p className="item">Обща сума: {(cart.totalPrice).toFixed(2)}лв</p>
                    <button className="button" onClick={createOrderHandler}>Завърши поръчката</button>
                </article>
            }

        </section>
    )
}

export default Cart;