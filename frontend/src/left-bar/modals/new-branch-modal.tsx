import { useState } from 'react';
import { Input } from '../../components/input';
import { inputsWrapper } from '../../components/input.css';
import { Modal } from '../../modals/base-modal';
import { buttonRow } from '../../style.css';
import { Button, ContainedButton, OutlinedButton } from '../../components/button';
import { useGit } from '../../contexts/git-context';

type NewBranchModalProps = {
    readonly show: boolean
    readonly requestClose: () => void
}

export const NewBranchModal = ({ show, requestClose }: NewBranchModalProps) => {
    const { commands: git, branches } = useGit();

    const [name, setName] = useState('');

    const createBranch = () => {
        if (!name || !!branches.find(b => b.name === name))
            return;
        git.branch(name);
        requestClose();
    };

    return (
        <Modal show={show} requestClose={requestClose}>
            <>
                <h3>New Branch</h3>
                <div className={inputsWrapper}>
                    <Input label='Name' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className={buttonRow}>
                    <OutlinedButton onClick={requestClose}>Cancel</OutlinedButton>
                    <ContainedButton onClick={() => createBranch()}>Create</ContainedButton>
                </div>
            </>
        </Modal>
    );
};