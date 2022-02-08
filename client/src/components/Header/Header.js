import { Link } from "react-router-dom";
const Header = () => {   
    return (
        <header id="site-header">
            <article className="upper-header">
            <Link to="/" className="logo">ZOOLAND</Link>
            <article className="user-header-article">
            <p className="greeting">Здравейте, </p>
            <Link to="/profile/:_id" className="profile">Към профила</Link>
            <input type="button" value="Изход" className="profile logout"/>
            </article>
            <article className="guest-header-article">
            <Link to="/auth/login" className="profile">Вход</Link>
            <Link to="/auth/register" className="profile">Регистация</Link>
            </article>
            </article>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/dog">Кучета</Link></li>
                    <li><Link to="/cat">Котки</Link></li>
                    <li><Link to="/roden">Гризачи</Link></li>
                    <li><Link to="/other">Други</Link></li>
                    <li><Link to="/cart"></Link></li>                   
                </ul>
            </nav>
        </header>
    )
}

export default Header;