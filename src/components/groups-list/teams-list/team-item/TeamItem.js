import React from 'react';
import "./TeamItem.scss";

// eslint-disable-next-line react/prop-types
const TeamItem = ({ teamName, membersCount }) => {
    return (
        <div className={"team-item"}>
            <div>{`#${teamName}`}</div>
            <div>{`${membersCount}`}</div>
        </div>
    );
};

export default TeamItem;