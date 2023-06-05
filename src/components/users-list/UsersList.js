import React, {useState} from 'react';
import "./usersList.scss";
import SearchIcon from '@mui/icons-material/Search';
import cx from "classnames";
import User from "./user/User";

const UsersList = () => {
    const chatTypes = ["All messages", "Unread", "Important"];
    const [activeChatType, setActiveChatType] = useState(chatTypes[0]);
    const [activeUserId, setActiveUserId] = useState(users[0].id);

    const chatTypesElement = chatTypes.map(chatType => {
        return <div
                key={chatType}
                className={cx("users-chats-item", {"active" : activeChatType === chatType})}
                onClick={() => setActiveChatType(chatType)}
                >
                    {chatType}
                </div>
        }
    )

    const usersElement = users.map(user => {
        return (
            <User
                activeUserId={activeUserId}
                setActiveUserId={setActiveUserId}
                key={user.id}
                {...user}
            />
        )
    })

    return (
        <div className={"users"}>
            <div className={"users-search"}>
                <h3>List of {}</h3>
                <SearchIcon className={"users-search-icon"}/>
            </div>
            <div className={"users-chats"}>
                {chatTypesElement}
            </div>
            <div className={"users-list"}>
                {usersElement}
            </div>

        </div>
    );
};

export default UsersList;

const users = [
    {
        id: 1,
        name: "Rachel",
        surname: "Curtis",
        nickname: "SilentGirl",
        email: "rachelcurtis@itzpromo.com",
        password: "rachel",
        phone_number: "1684648646",
        dob: "January 20, 1990",
        gender: "female",
        languages: ["English", "French"],
        picture: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    }, {
        id: 2,
        name: "Matt",
        surname: "Thompson",
        nickname: "SilentBoy",
        email: "mattthompson@itzpromo.com",
        password: "matt",
        phone_number: "814684644",
        dob: "February 3, 1987",
        gender: "male",
        languages: ["English"],
        picture: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80"
    }, {
        id: 3,
        name: "Stephanie",
        surname: "Bailey",
        nickname: "SilentGirl2",
        email: "stephanie@itzpromo.com",
        password: "stephanie",
        phone_number: "119198994",
        dob: "March 25, 1989",
        gender: "female",
        languages: ["English", "Spanish"],
        picture: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
]