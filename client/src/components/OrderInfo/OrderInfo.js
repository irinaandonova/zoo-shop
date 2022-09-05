import { useContext } from "react"
import AuthContext from "../../context/AuthContext.js"
import { useNavigate } from "react-router-dom";
import orderService from "../../services/orderService.js";
import { useSelector } from "react-redux";
import { convertTime } from "../../helpers/timeHelper.js";
import sendEmail from "../../helpers/emailHelper";

const OrderInfo = () => {
    const { userInfo, editProfile } = useContext(AuthContext);
    console.log(userInfo);
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();

    const onPayHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const town = formData.get('town');
        const address = formData.get('address');
        const phoneNumber = formData.get('phoneNumber');
        const paymentMethod = formData.get('payment');

        const userDetails = {
            userId: userInfo._id,
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            username: userInfo.username,
            email: userInfo.email,
            hasOrder: false,
            address,
            phoneNumber,
            town
        }


        if (paymentMethod === 'cash') {
            console.log('here');
            let response = await orderService.createOrder({ cart, userDetails, paymentMethod: 'cash' });

            if (response.status === 'ok') {
                const deliveryDate = convertTime(response.createdAt, 2);
                const template_params = { to_name: userInfo.firstName, orderId: response.cart._id, deliveryDate, to_email: userInfo.email }

                await sendEmail(template_params);

                userInfo.hasOrder = true;
                navigate('/cart');
            }
            else {
                alert('Unsuccessful purchase!')
            }
        }
        else {
            editProfile(userDetails);
            navigate('/cart/card-payment');
        }
    }
    return (
        <article className="order-info-article">
            <form className="order-info-form" onSubmit={onPayHandler}>
                <label htmlFor="town">Town:</label>
                <input className="order-info" name="town" type="string" defaultValue={userInfo.town} />
                <label htmlFor="address">Address</label>
                <input className="order-info" name="address" type="string" defaultValue={userInfo.address} />
                <label htmlFor="phone-number">Phone Number:</label>
                <input className="order-info" name="phoneNumber" type="string" defaultValue={userInfo.phoneNumber} />
                <label htmlFor="payment-method">Payment method:</label>
                <select className="payment-method" name="payment">
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>
                <button className="btn" type="submit">Pay</button>
            </form>
        </article>
    )
}

export default OrderInfo;