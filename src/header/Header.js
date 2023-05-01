import "./Header.scss";
import StarIcon from '@mui/icons-material/Star';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LanguageIcon from '@mui/icons-material/Language';
import PersonIcon from '@mui/icons-material/Person';
import React from "react";
export default function Header() {

    return(
        <div className={"header"}>
            <nav className={"header-navigation"}>
                <a href="#">All Projects</a>
                <a href="#">My Projects</a>
                <a href="#">Teams</a>
                <a href="#">Messages</a>
                <a href="#">Statistics</a>
                <a href="#">Search</a>
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