import { forwardRef } from 'react';
import { disabledTextAreaContainer, readOnlyTextAreaContainer, styledTextArea, textAreaContainer } from './text-area.css';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement> & {
    readonly label?: string
    readonly preIcon?: string
    readonly preIconOnClick?: () => void
    readonly postIcon?: string
    readonly postIconOnClick?: () => void
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ id, label, preIcon, postIcon, preIconOnClick, postIconOnClick, ...props }: TextAreaProps, ref: React.Ref<HTMLTextAreaElement>) => {
    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={`${textAreaContainer} ${props.disabled ? disabledTextAreaContainer : ''} ${props.readOnly ? readOnlyTextAreaContainer : ''}`}>
                <textarea className={styledTextArea} aria-label={`${id}-input`} id={id} ref={ref} {...props} />
            </div>
        </>
    );
});