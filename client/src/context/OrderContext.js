import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderContextProvider = ({ children }) => {
    const defaultValue = { userInfo: '', paymentMethod: '' };
    const [orderInfo, setOrderInfo] = useState(defaultValue);

    const getOrderInfo = (userInfo, paymentMethod) => {
        setOrderInfo({ userInfo, paymentMethod });
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