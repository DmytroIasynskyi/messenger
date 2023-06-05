import React from 'react';
import GroupsList from "../../components/groups-list/GroupsList";
import UsersList from "../../components/users-list/UsersList";
import "./messages.scss"
const Messages = () => {
    return (
        <div className={"messages"}>
            <GroupsList />
            <UsersList />
        </div>
    );
};

export default Messages;