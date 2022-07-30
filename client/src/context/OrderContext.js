import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
    const defaultValue = { userDetails: '', paymentMethod: '', cart: { cartItems: [], totalPrice: 0.00 } };
    const [orderInfo, setOrderInfo] = useState(defaultValue);

    const getOrderInfo = (userDetails, paymentMethod, cart) => {
        setOrderInfo({ userDetails, paymentMethod, cart });
    }
    const clearOrderInfo = () => {
        setOrderInfo(defaultValue);
    }

    return (
        <OrderContext.Provider value={{ orderInfo, getOrderInfo, clearOrderInfo }}>
            {children}
        </OrderContext.Provider>
    )
}

export default OrderContext;