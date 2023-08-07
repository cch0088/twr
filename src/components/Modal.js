import React from "react";

function Modal({handleClose, show, children}) 
{
    //const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className='modal display-block'>
            <section className='modal-main'>
                {children}
                <button type="button" onClick={handleClose}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default Modal;
