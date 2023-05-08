import "./Header.scss";
import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
import {NavLink} from "react-router-dom";

export default function Header() {

    return(
        <div className={"header"}>
            <nav className={"header-navigation"}>
                <NavLink to="/all-projects">All Projects</NavLink>
                <NavLink to="/my-projects">My Projects</NavLink>
                <NavLink to="/teams">Teams</NavLink>
                <NavLink to="/messages">Messages</NavLink>
                <NavLink to="/statistics">Statistics</NavLink>
                <NavLink to="/search">Search</NavLink>
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