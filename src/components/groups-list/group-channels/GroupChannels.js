import React, {useState} from 'react';
import "./GroupChannels.scss";
import GroupChannelItem from "./group-channel-item/GroupChannelItem";

const GroupChannels = ({ channels }) => {
    const [activeChannelName, setActiveChannelName] = useState('general');

    return (
        <div className={"channels-list"}>
            {channels.map(channel => <GroupChannelItem
                activeChannelName={activeChannelName}
                key={channel.id}
                {...channel}
                setActive={channelName => setActiveChannelName(channelName)}
            />)}
        </div>
    );
};

export default GroupChannels;