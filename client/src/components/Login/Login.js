import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="auth-form">
            <form className="loginForm">
                <ul className="form-input">
                    <li>
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" className="inputFields" name="email" />
                    </li>
                    <li>
                        <label htmlFor="password">Парола:</label>
                        <input type="password" className="inputFields" name="password" />
                    </li>
                    <li id="center-btn">
                        <input type="submit" value="Вход" />
                    </li>
                </ul>
                <article className="sign-up-link">
                    <p className="no-profile">Нямате профил?</p>
                    <Link to="/register">Регистрация</Link>
                </article>
            </form>
        </section>
    )
}

export default Login;