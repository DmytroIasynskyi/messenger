import React from 'react';
import "./GroupChannels.scss";
import GroupChannelItem from "./group-channel-item/GroupChannelItem";

// eslint-disable-next-line react/prop-types
const GroupChannels = ({ channels }) => {
    return (
        <div className={"channels-list"}>
            {/* eslint-disable-next-line react/prop-types */}
            {channels.map(channel => <GroupChannelItem key={channel.id} {...channel}/>)}
        </div>
    );
};

export default GroupChannels;