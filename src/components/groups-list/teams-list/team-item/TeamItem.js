import React from 'react';
import "./TeamItem.scss";
import cx from "classnames";

const TeamItem = ({ teamName, membersCount, activeItemName, setActive }) => {
    return (
        <div className={cx("team-item", {"active" : activeItemName === teamName})} onClick={() => setActive(teamName)}>
            <div>{`#${teamName}`}</div>
            <div>{`${membersCount}`}</div>
        </div>
    );
};

export default TeamItem;