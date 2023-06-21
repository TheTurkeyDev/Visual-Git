import { useState } from 'react';
import { ContainedButton, OutlinedButton } from '../../components/button';
import { inputsWrapper } from '../../components/input.css';
import { useGit } from '../../contexts/git-context';
import { Modal } from '../../modals/base-modal';
import { buttonRow } from '../../style.css';

type IgnoreModalProps = {
    readonly show: boolean
    readonly requestClose: () => void
    readonly file: string
}
export const IgnoreModal = ({ show, requestClose, file }: IgnoreModalProps) => {
    const { commands: git } = useGit();

    const [ignoreOption, setIgnoreOption] = useState(file);

    const confirmIgnore = () => {
        git.ignore(ignoreOption);
        requestClose();
    };

    const extension = file.substring(file.lastIndexOf('.'));
    const folders = file.split('/').slice(0, -1).map((f, i, folders) => `${folders.slice(0, i).join('/')}${i > 0 ? '/' : ''}${f}/`);

    return (
        <Modal show={show} requestClose={requestClose}>
            <>
                <h3>Ignore File</h3>
                <div className={inputsWrapper}>
                    <label>Ignore</label>
                    <select value={ignoreOption} onChange={e => setIgnoreOption(e.target.value)}>
                        <option value={file}>Exact file "{file}"</option>
                        <option value={`*${extension}`}>Files with extension "{extension}"</option>
                        {
                            folders.map(f => <option value={f}>Files beneath "{f}"</option>)
                        }
                    </select>
                </div>
                <div className={buttonRow}>
                    <OutlinedButton onClick={requestClose}>Cancel</OutlinedButton>
                    <ContainedButton onClick={confirmIgnore}>Confirm</ContainedButton>
                </div>
            </>
        </Modal>
    );
};