import {ReactNode} from "react";
import Close from '../../assets/icons/Close.svg';

import styles from './Modal.module.scss';

interface Props {
    children: ReactNode;
    onClose: () => void;
}

const Modal = ({children, onClose}: Props) => {
    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <img src={Close} onClick={() => onClose()} alt="close-icon" className={styles.close} />
                {children}
                <div className={styles.buttonContainer}>
                    <div className={styles.button} onClick={() => onClose()}>Done</div>
                </div>
            </div>
        </div>
    )
}

export default Modal;