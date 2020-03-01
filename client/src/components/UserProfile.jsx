import React from 'react'
import '../styles/UserProfile.css'
import HeaderProfile from "../components/HeaderProfile"

export default function UserProfile() {
    return (
        <div className="userProfilePage">
            <HeaderProfile />
            <div className="userOption">
                <div className="userInfos">
                    <p>My information</p>
                    <p>Change password</p>
                </div>

                <div className="aboutUs">
                    <p>Need help ?</p>
                    <p>About us</p>
                    <p>Recommendation</p>
                </div>

                <div className="userAccount">
                    <p>Export my datas</p>
                    <p>Reset account</p>
                </div>
            </div>
        </div>
    )
}
