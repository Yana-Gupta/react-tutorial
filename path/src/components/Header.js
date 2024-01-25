import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    const online = useOnlineStatus()

    // Whenver the state variable is changed it will re-render the whole Header commponent 
    // When ever this set function is called the component is rendered so now this bhtName is a new variable 
    // That's why we are able to change a const variable 
    console.log("Header rendered")

    // If not dependency array => useEffect is called on every render
    // If dependency array is empty => useEffect is only called on initial render
    // If there is something inside dependency array => every time the dependencies changes it is called 
    useEffect(() => {
        console.log("Useeffect rendered")
    }, [])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>

                    {/* 
                    * Do not use the anchor tag to send to another page 
                    * use Link component from react-router-dom to make you app faster
                    * Region - when using the anchor tag you go to another page the app gets reload 
                    * Solution - Link component from react-route-dom
                     */}
                    <li>
                        Online Status: {online ? '🟢' : '🔴'}
                    </li>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/contactus">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link to="/grocery">
                            Grocery
                        </Link>
                    </li>
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