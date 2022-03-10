import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext.js';

import authService from '../../services/authService.js';

const EditProfile = () => {
    const { userInfo } = useContext(AuthContext);
    const [info, setInfo] = useState(userInfo);
    const _id = info._id;
    const navigate = useNavigate();

    const changeUserInfo = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const town = formData.get('town');
        const address = formData.get('address');
        const phoneNumber = formData.get('phoneNumber');
        const user = {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            town,
            address,
            phoneNumber
        }
        const response = await authService.editProfile({ _id, user });
        console.log(response);
        if (response.status === 200) {
            setInfo(user);
            navigate('/');
        }
        else {
            throw new Error('Not able to edit!')
        }
    }

    return (
        <section className="auth-form">
            <form className="edit-form" onSubmit={changeUserInfo}>
                <ul className="form-input">
                    <li>
                        <label htmlFor="town">Град:</label>
                        <input type="text" className="inputFields" name="town" defaultValue={userInfo.town} />
                    </li>
                    <li>
                        <label htmlFor="address">Адрес: </label>
                        <input type="text" className="inputFields" name="address" defaultValue={userInfo.address} />
                    </li>
                    <li>
                        <label htmlFor="phoneNumber">Телефонен номер:</label>
                        <input type="text" className="inputFields" name="phoneNumber" defaultValue={userInfo.phoneNumber} />
                    </li>
                    <li id="center-btn">
                        <button type="submit" className='profile edit'>Редакция</button>
                    </li>
                </ul>

            </form>

        </section>
    )
}


export default EditProfile;