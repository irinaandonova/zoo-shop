import authService from '../services/authService.js';
import { createContext, useState } from 'react';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const login = async ({ email, password }) => {
        try {
            const response = await authService.login({ email, password });
            const { token, user } = response;
            localStorage.setItem('user', user);
            localStorage.setItem('token', token);
            setUserInfo(user);
            return { status: 'ok' }
        }
        catch (err) {
            console.log(err);
            return { status: 'err' }
        }

    }
    const register = async ({ firstName, lastName, email, phoneNumber, address, town, password }) => {
        try {
            const response = await authService.register({ firstName, lastName, email, phoneNumber, address, town, password });
            return response.status;
        }
        catch (err) {
            console.log(err);
        }
    }
    const logout = () => {
        localStorage.clear('token');
        localStorage.clear('user');

        setUserInfo('');
        return;
    }

    return (
        <AuthContext.Provider value={{ login, logout, userInfo, register, isAuthenticated: userInfo.email }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;