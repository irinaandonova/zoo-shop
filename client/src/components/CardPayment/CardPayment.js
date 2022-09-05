import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import orderService from "../../services/orderService";

const CardPayment = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart);
    const { userInfo } = useContext(AuthContext);

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
        try {
            const response = await orderService.createOrder({ user: userInfo, cart, paymentMethod: 'card', cardInfo });
            if (response.status === 'ok') {
                navigate('/cart');
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
    )
}

export default CardPayment;