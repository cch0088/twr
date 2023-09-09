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
        <div className="modal" onClick={handleClose}>
            <section className='modal-main'>
                {children}
            </section>
        </div>);
};

export default Modal;
