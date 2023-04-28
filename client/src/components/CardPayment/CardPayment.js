import { useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import orderService from "../../services/orderService";
import convertTime from "../../helpers/timeHelper";
import sendEmail from "../../helpers/emailHelper";

const CardPayment = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { userInfo } = useContext(AuthContext);
    const stripe = useStripe();

    const onResetHandler = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const cardNumber = formData.get('card-payment');
        const name = formData.get('name');
        const validThru = formData.get('valid-thru');
        const CVC = formData.get('CVC');
        const cardInfo = {
            cardNumber,
            name,
            validThru,
            CVC
        }
        const line_items = cart.cartItems.map(item => {
            return {
                price_data: {
                    currency: 'bgn',
                    product_data: {
                        name: item.productName,
                    },
                    unit_amount: item.price * 100
                },
                quantity: item.quantity
            }
        })
        try {
            const response = await orderService.createOrder({ user: userInfo, cart, paymentMethod: 'card', cardInfo, line_items });
            if (response.status === 'ok') {
                const deliveryDate = convertTime(response.createdAt, 2);
                const template_params = { to_name: userInfo.firstName, orderId: response.cart._id, deliveryDate, to_email: userInfo.email }

                await sendEmail(template_params);

                userInfo.hasOrder = true;
                navigate('/cart');
            }
            else {
                await stripe.redirectToCheckout({ sessionId: response.sessionId })
            }
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <article className="card-payment">
            <form className="card-payment-form" onSubmit={onSubmitHandler}>
                <label htmlFor="card-number">Номер на картата:</label>
                <input name="cardNumber" className="payment-fiels" />
                <label htmlFor="name">Имена:</label>
                <input name="name" className="payment-fiels" />
                <label htmlFor="valid-thru">Валидна до:</label>
                <input name="validThru" className="payment-fiels" />
                <label htmlFor="CVC">CVC</label>
                <input name="CVC" className="payment-fiels" />
                <article className="payment-form-btn">
                    <button type="submit" className="submit-btn">Предаване</button>
                    <button className="reset-btn" type="submit" onSubmit={onResetHandler}>Изчистване на полетата</button>
                </article>
            </form>
        </article>
    );
}

export default CardPayment;