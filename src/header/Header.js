import "./Header.scss";
import starIcon from "../icons/star.png";
import bellIcon from "../icons/bell.png";
import questionIcon from "../icons/question.png";
import globeIcon from "../icons/globe.png";
import userIcon from "../icons/user.png";
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
                <li><a href="#"><img className={"header-icon"} src={starIcon} alt=""/></a></li>
                <li><a href="#"><img className={"header-icon"} src={bellIcon} alt=""/></a></li>
                <li><a href="#"><img className={"header-icon"} src={questionIcon} alt=""/></a></li>
                <li><a href="#"><img className={"header-icon"} src={globeIcon} alt=""/></a></li>
                <li><a href="#">User User</a></li>
                <li><a href="#"><img className={"header-icon"} src={userIcon} alt=""/></a></li>
            </ul>
        </div>
    )
}