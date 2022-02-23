import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import profileService from "../../services/profileService.js";

const MyProfile = () => {
    const [info, setInfo] = useState({});
    const { userInfo } = useContext(AuthContext);
    const _id = userInfo._id;

    useEffect(() => {
        profileService.getProfile(_id)
                     .then(res => setInfo(res))
                     .catch(err => console.log(err))
    }, [_id])
    const navigate = useNavigate();
    
    return(
        <section className="info-wrapper">
            <article className="info-article">
            <label htmlFor="name">Име: {info.firstName} {info.lastName}</label>
            <label htmlFor="email">Имейл: {info.email}</label>
            <label htmlFor="name">Град: {info.town}</label>
            <label htmlFor="name">Адрес: {info.address}</label>
            <label htmlFor="name">Телефонен номер: {info.phoneNumber}</label>
            </article>
            <Link to="/profile/:_id/edit" className="profile edit">Редакция на профил</Link>
        </section>
    )
}

export default MyProfile;