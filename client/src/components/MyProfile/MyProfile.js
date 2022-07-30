import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";

const MyProfile = () => {
   const { userInfo } = useContext(AuthContext);
   const _id = userInfo._id;
    return(
        <section className="info-wrapper">
            <form className="profile-form">
            <label htmlFor="name">Name: {userInfo.firstName} {userInfo.lastName}</label>
            <label htmlFor="email">Email: {userInfo.email}</label>
            <label htmlFor="username">Username: {userInfo.username}</label>
            <label htmlFor="town">Town: {userInfo.town}</label>
            <label htmlFor="address">Address: {userInfo.address}</label>
            <label htmlFor="phoneNumber">Phone number: {userInfo.phoneNumber}</label>
            </form>
            <Link to={`/profile/${_id}/edit`} className="profile edit">Edit profile</Link>
        </section>
    )
}
export default MyProfile;