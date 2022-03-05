import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";

const MyProfile = () => {
   const { userInfo } = useContext(AuthContext);
    const _id = userInfo._id
    return(
        <section className="info-wrapper">
            <article className="info-article">
            <label htmlFor="name">Име: {userInfo.firstName} {userInfo.lastName}</label>
            <label htmlFor="email">Имейл: {userInfo.email}</label>
            <label htmlFor="name">Град: {userInfo.town}</label>
            <label htmlFor="name">Адрес: {userInfo.address}</label>
            <label htmlFor="name">Телефонен номер: {userInfo.phoneNumber}</label>
            </article>
            <Link to={`/profile/${_id}/edit`} className="profile edit">Редакция на профил</Link>
        </section>
    )
}

export default MyProfile;