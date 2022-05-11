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
        const phoneNumber = formData.get('phoneNumber');
        const password = formData.get('password');
        const rePassword = formData.get('repeat');


        console.log(`Register ${email}`)
        if (!firstName || !lastName || !email || !phoneNumber || !address || !town || !password || !rePassword) {
            throw new Error(`All fieleds must be filled!`);
        }

        else if (password !== rePassword) {
            throw new Error('Password mismatch!');
        }

        let userStatus = await register({
            firstName, lastName, email, phoneNumber, address, town, password
        });
        if (userStatus === 'ok') {
            login({ email, password });
            navigate('/');
        }

    }
    return (
        <section className="auth-form">
            <form className="sign-up-form" onSubmit={onSubmitHandler}>
                <ul className="form-input">
                    <li>
                        <label htmlFor="first-name">Име:</label>
                        <input type="text" className="inputFields" name="firstName" />
                    </li>
                    <li>
                        <label htmlFor="last-name">Фамилия:</label>
                        <input type="text" className="inputFields" name="lastName" />
                    </li>
                    <li>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" className="inputFields" name="email" />
                    </li>
                    <li>
                        <label htmlFor="town">Град:</label>
                        <input type="text" className="inputFields" name="town" />
                    </li>
                    <li>
                        <label htmlFor="address">Адрес:</label>
                        <input type="text" className="inputFields" name="address" />
                    </li>
                    <li>
                        <label htmlFor="phoneNumber">Телефонен номер:</label>
                        <input type="text" className="inputFields" name="phoneNumber" />
                    </li>
                    <li>
                        <label htmlFor="password">Парола:</label>
                        <input type="password" className="inputFields" name="password" />
                    </li>
                    <li>
                        <label htmlFor="rePassword">Потвърди парола:</label>
                        <input type="password" className="inputFields" name="repeat" />
                    </li>
                    <li id="center-btn">
                        <button type="submit">Регистрация</button>
                    </li>
                </ul>
                <article className="sign-up-link">
                    <p className="have-profile">Имате профил?</p>
                    <Link to="/login">Вход</Link>
                </article>
            </form>

        </section>
    )
}

export default Register;