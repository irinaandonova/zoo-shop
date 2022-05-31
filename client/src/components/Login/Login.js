import {  useContext } from "react";
import { Link,  useNavigate } from "react-router-dom";
import AuthContext from '../../context/AuthContext.js';
const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try{
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        let response = await login({ email, password });
        if(response.status === 'ok') {
            navigate('/')
        }
        else {
            navigate('/auth/register')
        }
        }
        catch(err) {
            console.log(err);
            navigate('/auth/register')
        }
    }
    return (
        <section className="auth-form">
            <form className="loginForm" onSubmit={onSubmitHandler}>
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