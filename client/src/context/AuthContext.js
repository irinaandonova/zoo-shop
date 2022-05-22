import authService from '../services/authService.js';
import { createContext, useState } from 'react';
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});

    const login = async ({ email, password }) => {
        try {
            const response = await authService.login({ email, password });
            const { token, user } = response;
            user.username = user.firstName + ' ' + user.lastName;
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
        setUserInfo({});
        return;
    }
    const editProfile = async ({user}) => {
        console.log(`context ${user}`);
        const response = await authService.editProfile({_id:userInfo._id, user});
        if(response.status === 'ok') {
            const editUser = {
                _id: userInfo._id,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                email: userInfo.email,
                town: user.town,
                phoneNumber: user.phoneNumber,
                address: user.address,
            }
            setUserInfo(editUser);
            return { status: 'ok'};
        }
        else {
            return {status: 'err'};
        }
    }

    return (
        <AuthContext.Provider value={{ login, logout, userInfo, register, isAuthenticated: userInfo.email, editProfile }}>
            {children}
        </AuthContext.Provider>
    )

}


export default AuthContext;