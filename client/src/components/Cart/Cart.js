import { useSelector } from "react-redux";
import Item from "./Item/Item.js";
const Cart = () => {
   const cart = useSelector((state) => state.cart);
      return (
        <section className="cart-wrapper">
            <ul className="cart-items-list">
                {cart.cartItems.map(x => <Item item={x} key={x._id} />)}
            </ul>
            <p className="item">Обща сума: {(cart.totalPrice).toFixed(2)}лв</p>
            <button >Завърши поръчката</button>
        </section>
    )
}

export default Cart;