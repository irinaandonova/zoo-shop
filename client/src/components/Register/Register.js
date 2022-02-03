import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="auth-form">
            <form className="sign-up-form">
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