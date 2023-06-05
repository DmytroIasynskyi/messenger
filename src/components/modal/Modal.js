import React, {useEffect, useRef} from 'react';
import "./modal.scss"

const Modal = ({ children, setShowModal }) => {
    const modalEl = useRef();

    useEffect(() => {
        const modal = modalEl.current;
        function handler(event) {
            if(!modal) return;
            if(!modal.contains(event.target)) setShowModal(false);
        }
        document.addEventListener('click', handler, true)
        return () => document.removeEventListener('click', handler);
    }, [])

    return (
        <div ref={modalEl} className={"modal"}>
            {children}
        </div>
    );
};

export default Modal;