import { useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext.js';

const EditProfile = () => {
    const { userInfo, editProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const changeUserInfo = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const town = formData.get('town');
        const address = formData.get('address');
        const phoneNumber = formData.get('phoneNumber');
        const user = {
            email: userInfo.email,
            firstName,
            lastName,
            username: userInfo.username,
            town,
            address,
            phoneNumber
        }
        const response = await editProfile({user});
        if (response.status === 'ok') {
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
                        <label htmlFor="first-name">First name:</label>
                        <input type="text" className="inputFields" name="firstName" defaultValue={userInfo.firstName}/>
                    </li>
                    <li>
                        <label htmlFor="last-name">Last name:</label>
                        <input type="text" className="inputFields" name="lastName" defaultValue={userInfo.lastName}/>
                    </li>
                    <li>
                        <label htmlFor="town">Town:</label>
                        <input type="text" className="inputFields" name="town" defaultValue={userInfo.town} />
                    </li>
                    <li>
                        <label htmlFor="address">Address: </label>
                        <input type="text" className="inputFields" name="address" defaultValue={userInfo.address} />
                    </li>
                    <li>
                        <label htmlFor="phoneNumber">Phone number:</label>
                        <input type="text" className="inputFields" name="phoneNumber" defaultValue={userInfo.phoneNumber} />
                    </li>
                    <li id="center-btn">
                        <button type="submit" className='profile edit'>Edit profile</button>
                    </li>
                </ul>
            </form>
        </section>
    )
}
export default EditProfile;