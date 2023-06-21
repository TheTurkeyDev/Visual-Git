import { forwardRef } from 'react';
import { clickableIcon, icon } from '../style.css';
import { disabledInputContainer, inputContainer, readOnlyInputContainer, styledInput } from './input.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    readonly label?: string
    readonly preIcon?: string
    readonly preIconOnClick?: () => void
    readonly postIcon?: string
    readonly postIconOnClick?: () => void
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ id, label, preIcon, postIcon, preIconOnClick, postIconOnClick, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) => {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={`${inputContainer} ${props.disabled ? disabledInputContainer : ''} ${props.readOnly ? readOnlyInputContainer : ''}`}>
                <i className={`${!!preIconOnClick ? clickableIcon : icon} ${preIcon}`} onClick={preIconOnClick} />
                <input className={styledInput} aria-label={`${id}-input`} id={id} ref={ref} {...props} />
                <i className={`${!!postIconOnClick ? clickableIcon : icon} ${postIcon}`} onClick={postIconOnClick} />
            </div>
        </>
    );
});