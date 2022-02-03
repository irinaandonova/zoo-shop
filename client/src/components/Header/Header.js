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
            <Link to="/login" className="profile">Вход</Link>
            <Link to="/register" className="profile">Регистация</Link>
            </article>
            </article>
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/dogs">Кучета</Link></li>
                    <li><Link to="/cats">Котки</Link></li>
                    <li><Link to="/rodens">Гризачи</Link></li>
                    <li><Link to="/others">Други</Link></li>
                    <li><Link to="/cart"></Link></li>                   
                </ul>
            </nav>
        </header>
    )
}

export default Header;