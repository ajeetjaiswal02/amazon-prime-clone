import React from "react"
import { useSelector } from "react-redux"
import { selectUser } from "../features/userSlice"
import { auth } from "../firebase"
import Nav from "../Nav"
import PlansScreen from "./PlansScreen"
import "./ProfileScreen.css"
import logo from "../assets/logo.png"

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className="profileScreen">
            <Nav />
            <div className="profileScreen_body">
                <h3>Edit Profile</h3>
            <div className="profileScreen_info">
                <img
                  src={logo}
                  alt="avatar" 
                />
                <div className="profileScreen_details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen_plans">
                        <h3>Plans</h3>
                        <PlansScreen />
                        <button onClick={() => auth.signOut()}
                           className="profileScreen_Signout">Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}


export default ProfileScreen;