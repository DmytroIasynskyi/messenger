import React, {useState} from 'react';
import "./user.scss";
import Modal from "../../modal/Modal";
import cx from "classnames";

const User = ({ name, surname, picture, activeUserId, setActiveUserId, id }) => {
    const [showModal, setShowModal] = useState(false);
    const modalWindow = <Modal setShowModal={setShowModal}>
        <p>Mark as important</p>
        <p>Delete chat</p>
    </Modal>

    return (
        <div onClick={() => setActiveUserId(id)} className={cx("user", {"activeUser" : activeUserId === id})}>
            <div className={"user-picture"}>
                <img src={picture} alt="user-picture"/>
            </div>
            <div className={"user-info"}>
                <div className={"user-info-header"}>
                    <p>{name} {surname}</p>
                    <h3 onClick={() => setShowModal(true)}>
                        ...
                        {showModal && modalWindow}
                    </h3>
                </div>
                <div className={"user-info-footer"}>
                    <p>Some text from chat, some text from chat ...</p>
                    <p>14:20 pm</p>
                </div>
            </div>

        </div>
    );
};

export default User;