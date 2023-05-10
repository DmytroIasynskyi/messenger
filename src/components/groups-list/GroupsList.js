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
    },
        {
            id:2,
            teamName: "testers",
            membersCount: 15
        }]);

    const [channels, setChannels] = useState([{
        id: 1,
        channelName: 'general'
    },
        {
            id:2,
            channelName: 'local'
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
                    <PersonAddAltIcon className={"groups-list-teams-icon"} onClick={addNewTeam}/>
                </div>
                <TeamsList teams={teams}/>
            </div>
            <div className={"groups-list-channels"}>
                <div className={"groups-list-channels-create"}>
                    <h3>Group channels</h3>
                    <AddIcon className={"groups-list-channels-icon"} onClick={addNewChannel}/>
                </div>
                <GroupChannels channels={channels}/>
            </div>
        </div>
    );
};

export default GroupsList;