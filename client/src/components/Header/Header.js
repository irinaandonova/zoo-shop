import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cartSlice.js";

const Header = () => {
    const { userInfo, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = () => {
        logout();
        dispatch(clearCart());
        navigate('/');
    }

    return (
        <header id="site-header">
            <article className="upper-header">
                <Link to="/" className="logo">ZOOLAND</Link>
                {userInfo._id ?
                    <article className="user-header-article">
                        <p className="greeting left-link">Hello, {userInfo.firstName}</p>
                        <Link to="/profile" className="profile">My profile</Link>
                        <input type="button" onClick={logoutHandler} value="Exit profile" className="profile" id="exit"/>
                    </article>
                    :
                    <article className="guest-header-article">
                        <Link to="/auth/login" className="profile left-link">Login</Link>
                        <Link to="/auth/register" className="profile">Register</Link>
                    </article>
                }
            </article>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/dog" className="category-link dog">Dogs</Link></li>
                    <li><Link to="/cat" className="category-link">Cats</Link></li>
                    <li><Link to="/roden" className="category-link">Rodens</Link></li>
                    <li><Link to="/other" className="category-link other">Other</Link></li>
                    {
                        userInfo._id ?
                            <li><Link to="/cart" className="category-link"><FontAwesomeIcon icon={faShoppingCart} /></Link></li>
                            :
                            null
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;