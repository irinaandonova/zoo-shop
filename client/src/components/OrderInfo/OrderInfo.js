import { useContext } from "react"
import AuthContext from "../../context/AuthContext.js"

const OrderInfo = () => {
    const { userInfo } = useContext(AuthContext);
    return(
        <article className="order-info-article">
            <form className="order-info-form">
                <label htmlFor="name">Name:</label>
                <input className="order-info" name="name" type="string" defaultValue={userInfo.firstName + userInfo.lastName}/>
                <label htmlFor="address">Address</label>
                <input className="order-info" name="address" type="string" defaultValue={userInfo.address}/>
                <label htmlFor="phone-number">Phone Number:</label>
                <input className="order-info" name="phone-number" type="string" defaultValue={userInfo.phoneNumber}/>
                <label htmlFor="payment-method">Payment method:</label>
                <select className="payment-method">
                    <option value="cash">Cash</option>
                    <option value="card">Card</option>
                </select>
                <button className="btn">Pay</button>
            </form>
        </article>
    )
}