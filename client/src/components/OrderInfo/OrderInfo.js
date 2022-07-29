import { useContext } from "react"
import AuthContext from "../../context/AuthContext.js"
import { useNavigate } from "react-router-dom";
import cartService from "../../services/cartService.js";
import { useSelector } from "react-redux";
import { convertTime } from "../../services/timeService.js";

const OrderInfo = () => {
    const { userInfo } = useContext(AuthContext);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const onPayHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const address = formData.get('address');
        const phoneNumber = formData.get('phone-number');
        const payment = formData.get('payment');
        const userDetails = {
            name,
            address,
            phoneNumber
        }
        if (payment === 'cash') {
            let response = await cartService.createOrder({ order: cart, userId: userInfo._id, userDetails });
            if (response.status === 'ok') {
                const deliveryDate = convertTime(response.createdAt);
                const template_params = { to_name: userInfo.firstName, orderId: response.cart._id, deliveryDate, to_email: userInfo.email }
                const emailSent = await cartService.sendEmail(template_params);
                if (emailSent) {
                    userInfo.hasOrder = true;
                    navigate('/cart');
                }
                

            }


        }
    }
    return (
        <article className="order-info-article">
            <form className="order-info-form">
                <label htmlFor="name">Name:</label>
                <input className="order-info" name="name" type="string" defaultValue={userInfo.firstName + userInfo.lastName} />
                <label htmlFor="address">Address</label>
                <input className="order-info" name="address" type="string" defaultValue={userInfo.address} />
                <label htmlFor="phone-number">Phone Number:</label>
                <input className="order-info" name="phone-number" type="string" defaultValue={userInfo.phoneNumber} />
                <label htmlFor="payment-method">Payment method:</label>
                <select className="payment-method" name="payment">
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>
                <button className="btn" onClick={onPayHandler}>Pay</button>
            </form>
        </article>
    )
}

export default OrderInfo;