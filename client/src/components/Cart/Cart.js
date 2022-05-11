import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthContext from "../../context/AuthContext.js";
import cartService from "../../services/cartService.js";
import Item from "./Item/Item.js";
const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const { userInfo, isAuthenticated } = useContext(AuthContext);

    const createOrderHandler = async (e) => {
        e.preventDefault();
        if(!isAuthenticated) {
            navigate('/auth/login');
        }
        try {
            let response = await cartService.createOrder({ order: cart, user: userInfo._id });
            console.log(response)
            if (response.status === 'ok') {
                navigate('/');
            }
            else {
                console.log(userInfo);
                if(!userInfo._id) {
                    navigate('/auth/login')
                }
            }
        }
        catch(err) {
            
            console.log('error');
        }
    }

    return (
        <section className="cart-wrapper">
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
                    {cart.cartItems.map(x => <Item item={x} key={x._id}/>)}
                </tbody>
            </table>
            <p className="item">Обща сума: {(cart.totalPrice).toFixed(2)}лв</p>
             <button className="button" onClick={createOrderHandler}>Завърши поръчката</button>
        </section>
    )
}

export default Cart;