import React from 'react';
import "./TeamsList.scss";
import TeamItem from "./team-item/TeamItem";

// eslint-disable-next-line react/prop-types
const TeamsList = ({ teams }) => {
    return (
        <div className={"teams-list"}>
            {/* eslint-disable-next-line react/prop-types */}
            {teams.map(team => <TeamItem key={team.id} {...team} />)}
        </div>
    );
};

export default TeamsList;