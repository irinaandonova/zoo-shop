import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/AuthContext.js';

const Register = () => {
    const navigate = useNavigate();
    const { register, login } = useContext(AuthContext);
    
    const onSubmitHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const town = formData.get('town');
        const address = formData.get('address');
        const email = formData.get('email');
        const username = formData.get('username')
        const phoneNumber = formData.get('phoneNumber');
        const password = formData.get('password');
        const rePassword = formData.get('repeat');

        if (!firstName || !lastName || !email || !phoneNumber || !address || !town || !password || !rePassword || !username) {
            throw new Error(`All fieleds must be filled!`);
        }
        else if (password !== rePassword) {
            throw new Error('Password mismatch!');
        }

        let response = await register({
            firstName, lastName, email, username, phoneNumber, address, town, password
        });

        if (response === 'ok') {
            login({ username, password });
            navigate('/');
        }
        else {
            if (response.email) {
                alert(`Такъв имейл вече е регситриран!`)
            }
            else if (response.username) {
                alert(`Такова потребителско име вече съществува!`)
            }
            else {
                console.log(response);
            }
        }
    }
    return (
        <section className="auth-form">
            <form className="sign-up-form" onSubmit={onSubmitHandler}>
                <ul className="form-input">
                    <li>
                        <label htmlFor="first-name">First name:</label>
                        <input type="text" className="inputFields" name="firstName" />
                    </li>
                    <li>
                        <label htmlFor="last-name">Last name:</label>
                        <input type="text" className="inputFields" name="lastName" />
                    </li>
                    <li>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" className="inputFields" name="email" />
                    </li>
                    <li>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="inputFields" name="username" />
                    </li>
                    <li>
                        <label htmlFor="town">Town:</label>
                        <input type="text" className="inputFields" name="town" />
                    </li>
                    <li>
                        <label htmlFor="address">Address:</label>
                        <input type="text" className="inputFields" name="address" />
                    </li>
                    <li>
                        <label htmlFor="phoneNumber">Phone number:</label>
                        <input type="text" className="inputFields" name="phoneNumber" />
                    </li>
                    <li>
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="inputFields" name="password" />
                    </li>
                    <li>
                        <label htmlFor="rePassword">Repeat password:</label>
                        <input type="password" className="inputFields" name="repeat" />
                    </li>
                    <li id="center-btn">
                        <button type="submit" className='button'>Sign up</button>
                    </li>
                </ul>
                <article className="sign-up-link">
                    <p className="have-profile">You already have a profile?</p>
                    <Link to="/login">Sign in</Link>
                </article>
            </form>
        </section>
    )
}
export default Register;