import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const { userInfo, logout } = useContext(AuthContext);
    return (
        <header id="site-header">
            <article className="upper-header">
                <Link to="/" className="logo">ZOOLAND</Link>
                {userInfo._id ?
                    <article className="user-header-article">
                        <p className="greeting">Здравейте, {userInfo.firstName}</p>
                        <Link to="/profile" className="profile">Към профила</Link>
                        <input type="button" onClick={logout} value="Изход" className="profile logout" />
                    </article>
                    :
                    <article className="guest-header-article">
                        <Link to="/auth/login" className="profile">Вход</Link>
                        <Link to="/auth/register" className="profile">Регистация</Link>
                    </article>
                }
            </article>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/dog">Кучета</Link></li>
                    <li><Link to="/cat">Котки</Link></li>
                    <li><Link to="/roden">Гризачи</Link></li>
                    <li><Link to="/other">Други</Link></li>
                    <li><Link to="/cart"><FontAwesomeIcon icon={faShoppingCart}/></Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;