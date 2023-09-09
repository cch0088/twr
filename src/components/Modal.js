import React from "react";
import { closeModal } from "../features/ModalSlice";
import { useDispatch } from 'react-redux';

function Modal({children}) 
{
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModal());
    };

    return (
        <div className="modal">
            <section className='modal-main'>
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>);
};

export default Modal;
