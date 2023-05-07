import React, {useState} from 'react';
import "./GroupsList.scss";
import TeamsList from "./teams-list/TeamsList";
import GroupChannels from "./group-channels/GroupChannels";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddIcon from '@mui/icons-material/Add';

const GroupsList = () => {
    const [teams, setTeams] = useState([{
        id: 1,
        teamName: 'programmers',
        membersCount: 10
    }]);

    const [channels, setChannels] = useState([{
        id: 1,
        channelName: 'general'
    }]);

    const addNewTeam = () => {
        setTeams([...teams]);
    }

    const addNewChannel = () => {
        setChannels([...channels])
    }

    return (
        <div className={"groups-list"}>
            <div className={"groups-list-teams"}>
                <div className={"groups-list-teams-create"}>
                    <h3>Teams</h3>
                    <div><PersonAddAltIcon className={"groups-list-teams-icon"} handleClick={addNewTeam}/></div>
                </div>
                <TeamsList teams={teams}/>
            </div>
            <div className={"groups-list-channels"}>
                <div className={"groups-list-channels-create"}>
                    <h3>Group channels</h3>
                    <div><AddIcon className={"groups-list-channels-icon"} handleClick={addNewChannel}/></div>
                </div>
                <GroupChannels channels={channels}/>
            </div>
        </div>
    );
};

export default GroupsList;