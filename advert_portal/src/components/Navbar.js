import {React, useState} from "react";
import '../styles/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


export default function App() {

    const [isClicked, setClickState] = useState(false);

    const handleClick = () => setClickState(!isClicked);

    return <div className="navbar">
            <FontAwesomeIcon icon={faBars} className="hamburger" onClick={handleClick} style={{color: "#ffffff",}}/>
            <ul className={isClicked ? "" : "display-none"}>
                <li><a href="/userProfile">User Profile</a></li>
                <li><a href="/">Home</a></li>
            </ul>
        </div>;
}