import authService from '../services/authService.js';

import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    
    const login = async ({ username, password }) => {

        try {
            const response = await authService.login({ username, password });
            if (response.status === 'ok') {
                const { user } = response;
                
                setUserInfo(user);
                return { status: 'ok' }
            }
            else {
                return { status: 'err' }
            }
        }
        catch (err) {
            console.log(err);
            return { status: 'err' }
        }
    }

    const register = async ({ firstName, lastName, email, username, phoneNumber, address, town, password }) => {

        try {
            const response = await authService.register({ firstName, lastName, email, username, phoneNumber, address, town, password });

            if (response.status === 'err') {
                return response.value;
            }

            return response.status;
        }
        catch (err) {
            console.log(err);
        }
    }

    const logout = () => {
        setUserInfo( {} );
        return;
    }

    const editProfile = async ({ user }) => {
        const response = await authService.editProfile( { _id: userInfo._id, user } );
        if (response.status === 'ok') {
            const editUser = {
                _id: userInfo._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                username: user.username,
                town: user.town,
                phoneNumber: user.phoneNumber,
                address: user.address,
                hasOrder: userInfo.hasOrder
            }
            setUserInfo(editUser);

            return { status: 'ok' };
        }
        else {
            return { status: 'err' };
        }
    }
    return (
        <AuthContext.Provider value={{ login, logout, userInfo, register, isAuthenticated: userInfo.email, editProfile }}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;