import "./Header.scss";
import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import {Link} from "react-router-dom";

export default function Header() {

    return(
        <div className={"header"}>
            <nav className={"header-navigation"}>
                <Link to="/all-projects">All Projects</Link>
                <Link to="/my-projects">My Projects</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/messages">Messages</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/search">Search</Link>
            </nav>
            <ul className={"header-social"}>
                <li><a href="#"><StarIcon className={"header-social-icon"} /></a></li>
                <li><a href="#"><NotificationsActiveIcon className={"header-social-icon"} /></a></li>
                <li><a href="#"><QuestionMarkIcon className={"header-social-icon"} /></a></li>
                <li><a href="#"><LanguageIcon className={"header-social-icon"} /></a></li>
                <li><a href="#">User User</a></li>
                <li><a href="#"><PersonIcon className={"header-social-icon"} /></a></li>
            </ul>
        </div>
    )
}