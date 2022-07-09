import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";

const MyProfile = () => {
   const { userInfo } = useContext(AuthContext);
   const _id = userInfo._id;
    return(
        <section className="info-wrapper">
            <form className="profile-form">
            <label htmlFor="name">Име: {userInfo.firstName} {userInfo.lastName}</label>
            <label htmlFor="email">Имейл: {userInfo.email}</label>
            <label htmlFor="username">Потребителско име: {userInfo.username}</label>
            <label htmlFor="town">Град: {userInfo.town}</label>
            <label htmlFor="address">Адрес: {userInfo.address}</label>
            <label htmlFor="phoneNumber">Тел. номер: {userInfo.phoneNumber}</label>
            </form>
            <Link to={`/profile/${_id}/edit`} className="profile edit">Редакция на профил</Link>
        </section>
    )
}
export default MyProfile;