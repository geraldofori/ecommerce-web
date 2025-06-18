import React from "react";
import { Modal, ModalProps } from "react-bootstrap";

export interface CustomModalProps extends ModalProps {
    children: React.ReactElement;
}

const CustomModal: React.FC<CustomModalProps> = ({ children, ...props }) => {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            {...props}
            centered
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;