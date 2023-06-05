import React from 'react';
import "./groupChannelItem.scss";
import cx from "classnames";

const GroupChannelItem = ({ channelName, activeChannelName, setActive }) => {
    return (
        <div className={cx("channel-item", {"active" : activeChannelName === channelName})} onClick={() => setActive(channelName)}>
            <div>{`#${channelName}`}</div>
        </div>
    );
};

export default GroupChannelItem;