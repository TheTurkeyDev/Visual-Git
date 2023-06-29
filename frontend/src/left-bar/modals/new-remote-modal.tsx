import { useState } from 'react';
import { Input } from '../../components/input';
import { inputsWrapper } from '../../components/input.css';
import { Modal } from '../../modals/base-modal';
import { buttonRow } from '../../style.css';
import { Button, ContainedButton, OutlinedButton } from '../../components/button';
import { useGit } from '../../contexts/git-context';

type NewRemoteModalProps = {
    readonly show: boolean
    readonly requestClose: () => void
}

export const NewRemoteModal = ({ show, requestClose }: NewRemoteModalProps) => {
    const { commands: git, remotes } = useGit();

    const [name, setName] = useState('origin');
    const [url, setURL] = useState('');

    const createRemote = () => {
        if (!name || !url || !!remotes.find(r => r.name === name))
            return;
        git.remoteAdd(name, url);
        requestClose();
        setURL('');
    };

    return (
        <Modal show={show} requestClose={requestClose}>
            <>
                <h3>New Branch</h3>
                <div className={inputsWrapper}>
                    <Input label='Name' value={name} onChange={e => setName(e.target.value)} />
                    <Input label='URL' value={url} onChange={e => setURL(e.target.value)} />
                </div>
                <div className={buttonRow}>
                    <OutlinedButton onClick={requestClose}>Cancel</OutlinedButton>
                    <ContainedButton onClick={() => createRemote()}>Create</ContainedButton>
                </div>
            </>
        </Modal>
    );
};