import { forwardRef } from 'react';
import { clickableIcon, icon } from '../style.css';
import { disabledInputContainer, inputContainer, readOnlyInputContainer, styledInput } from './input.css';
import { UserSelectGitRepoFolder } from '../../wailsjs/go/main/App';

type FolderInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    readonly label?: string
    readonly onChange: (path: string) => void
    readonly onlyCreated: boolean
}

export const FolderInput = forwardRef<HTMLInputElement, FolderInputProps>(({ id, label, onlyCreated, onChange, ...props }: FolderInputProps, ref: React.Ref<HTMLInputElement>) => {

    const getFolder = () => {
        UserSelectGitRepoFolder(onlyCreated).then(folder => {
            onChange(folder);
        });
    };


    return (
        <>
            {label && <label htmlFor={id}>{label}</label>}
            <div className={`${inputContainer} ${props.disabled ? disabledInputContainer : ''} ${props.readOnly ? readOnlyInputContainer : ''}`}>
                <input className={styledInput} aria-label={`${id}-input`} id={id} ref={ref} onChange={e => onChange(e.target.value)} {...props} />
                <i className={`${clickableIcon} fa-solid fa-folder-open`} onClick={getFolder} />
            </div>
        </>
    );
});