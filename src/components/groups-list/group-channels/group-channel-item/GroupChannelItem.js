import React from 'react';
import "./GroupChannelItem.scss";

// eslint-disable-next-line react/prop-types
const GroupChannelItem = ({ channelName }) => {
    return (
        <div className={"channel-item"}>
            <div>{`#${channelName}`}</div>
        </div>
    );
};

export default GroupChannelItem;