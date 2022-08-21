import { useContext } from "react"
import AuthContext from "../context/AuthContext.js"
import { Navigate } from "react-router-dom";
export const isAuth = (Component) => {
    
    const WrapperComponent = (props) => {
        const { isAuthenticated } = useContext(AuthContext);

        return isAuthenticated ? 
        <Component {...props} />
        :
        <Navigate to="/login" />
    }
    return WrapperComponent;
}

export default isAuth;