import React from "react";
import { closeModal } from '../features/ModalSlice';
import { useDispatch } from 'react-redux';

function Modal({children}) 
{
    const dispatch = useDispatch();

    const handleClose = (e) => {
        if (e.target.className === 'modal-bg') {dispatch(closeModal());}
    };

    return (
        <div className='modal-bg' onClick={(e) => handleClose(e)}>
            <section className='modal-main'>
                {children}
            </section>
        </div>);
};

export default Modal;
