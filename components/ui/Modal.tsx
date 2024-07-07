// components/ui/Modal.tsx
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return ReactDOM.createPortal(
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div style={{height: '470px', width: '650px'}} className="bg-white rounded-lg p-5 z-50 w-full">
                <button className="absolute top-0 right-0 p-2" onClick={onClose}>X</button>
                {children}
            </div>
        </div>,
        document.body
    );
};

