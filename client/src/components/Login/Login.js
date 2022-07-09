import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext.js';
const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData(e.currentTarget);
            const username = formData.get('username');
            const password = formData.get('password');

            let response = await login({ username, password });
            if (response.status === 'ok') {
                navigate('/')
            }
            else {
                alert('Няма такова потребителско име или грешна парола!')
            }
        }
        catch (err) {
            console.log(err);
            navigate('/auth/register')
        }
    }
    return (
        <section className="auth-form">
            <form className="loginForm" onSubmit={onSubmitHandler}>
                <ul className="form-input">
                    <li>
                        <label htmlFor="email">Потребителско име:</label>
                        <input type="text" className="inputFields" name="username" />
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