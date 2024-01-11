import { useState } from "react";
import { LOGO_URL } from "../utils/constants"

const Header = () => {
    const [btnName, setBtnName] = useState("Login")

    // Whenver the state variable is changed it will re-render the whole Header commponent 
    // When ever this set function is called the component is rendered so now this bhtName is a new variable 
    // That's why we are able to change a const variable 

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li>
                        <button className="login" onClick={() => {
                            if (btnName === "Login") setBtnName("Logout")
                            else setBtnName("Login")
                        }}>{btnName}</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;