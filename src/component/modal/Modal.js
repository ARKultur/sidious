import React from 'react';
import './Modal.css';

export default function Modal(props)
{
    const { onClose, children, frame = true} = props;

    function handleOverlayClick(event) {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleOverlayClick}>
            {frame
                ?
                    <div className="modal-content">
                        <span className="close" onClick={onClose}>
                            &times;
                        </span>
                        {children}
                    </div>
                :
                    <>
                        {children}
                    </>
            }
        </div>
    );
};