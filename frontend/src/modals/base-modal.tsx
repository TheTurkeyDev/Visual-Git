import { createRef } from 'react';
import { useClickOutside } from '../hooks/use-click-outside';
import { backgroundWrapper, modalContent } from './base-modal.css';


type ModalProps = {
    readonly children: JSX.Element
    readonly show: boolean
    readonly requestClose?: () => void
}

export const Modal = ({ show, requestClose, children }: ModalProps) => {
    const ref = createRef<HTMLDivElement>();
    useClickOutside(ref, () => !!requestClose && requestClose());
    return show ? (
        <div className={backgroundWrapper}>
            <div ref={ref} className={modalContent}>
                {children}
            </div>
        </div>
    ) : <></>;
};

export const ModalNoBG = ({ children, show }: ModalProps) => {
    return show ? (
        <div className={backgroundWrapper}>
            {children}
        </div>
    ) : <></>;
};