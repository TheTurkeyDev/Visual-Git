import { useState } from 'react';
import { ContainedButton, OutlinedButton } from '../../../components/button';
import { FolderInput } from '../../../components/filder-input';
import { Input } from '../../../components/input';
import { inputsWrapper } from '../../../components/input.css';
import { Modal } from '../../../modals/base-modal';
import { buttonRow, checkbox } from '../../../style.css';
import { UserAddGitRepo } from '../../../../wailsjs/go/main/App';
import { useRepos } from '../../../contexts/repos-context';
import { GitInit } from '../../../../wailsjs/go/git/GitCommands';

type AddRepoModalProps = {
    readonly show: boolean
    readonly requestClose: () => void
}
export const AddRepoModal = ({ show, requestClose }: AddRepoModalProps) => {
    const { addRepo } = useRepos();

    const [name, setName] = useState('');
    const [path, setPath] = useState('');
    const [initRepo, setInitRepo] = useState(false);

    const addNewRepo = async () => {

        if (!name || !path) {
            return;
        }

        if (initRepo)
            await GitInit(path);

        const repo = await UserAddGitRepo(name, path);
        if (repo) {
            requestClose();
            addRepo(repo, true);
        }
    };

    return (
        <Modal show={show} requestClose={requestClose}>
            <div>
                <h3>Add Repo</h3>
                <div className={inputsWrapper}>
                    <Input label='Name' value={name} onChange={e => setName(e.target.value)} />
                    <FolderInput label='Folder' value={path} onChange={setPath} onlyCreated={!initRepo} />
                    <label>Init Git Repo</label>
                    <input className={checkbox} type='checkbox' checked={initRepo} onChange={e => setInitRepo(e.target.checked)} />
                </div>
                <div className={buttonRow}>
                    <OutlinedButton onClick={requestClose}>Cancel</OutlinedButton>
                    <ContainedButton onClick={addNewRepo}>Add</ContainedButton>
                </div>
            </div>
        </Modal>
    );
};