import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import AuthContext from "../../context/AuthContext.js";
import cartService from "../../services/cartService.js";
import Item from "./Item/Item.js";
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
            let response = await cartService.createOrder({ order: cart, userId: userInfo._id });

            let timestamp = new Date(response.cart.createdAt);
            timestamp.setDate(timestamp.getDate() + 2);

            let deliveryDate = timestamp.toLocaleDateString('bg-BG', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            });

            let template_params = { to_name: userInfo.firstName, orderId: response.cart._id, deliveryDate, to_email: userInfo.email }
            if (response.status === 'ok') {
                emailjs.send('service_2v0jqnu', 'template_uhrspdh', template_params, 'KoIx4k6LBbfML5ZXa')
                    .then((result) => {
                        userInfo.hasOrder = true;
                        navigate('/cart')
                    }, (error) => {
                        console.log(error.text);
                    });
            }
            else {
                if (!userInfo._id) {
                    navigate('/auth/login')
                }
            }
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