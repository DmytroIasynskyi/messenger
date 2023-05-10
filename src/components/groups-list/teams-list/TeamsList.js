import React, {useState} from 'react';
import "./TeamsList.scss";
import TeamItem from "./team-item/TeamItem";


const TeamsList = ({ teams }) => {
    const [activeItemName, setActiveItemName] = useState('programmers');

    return (
        <div className={"teams-list"}>
            {teams.map(team => <TeamItem
                activeItemName={activeItemName}
                key={team.id}
                {...team}
                setActive={(itemName) => setActiveItemName(itemName)}
            />)}
        </div>
    );
};

export default TeamsList;