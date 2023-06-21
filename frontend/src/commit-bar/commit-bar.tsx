import { useState } from 'react';
import { ContainedButton } from '../components/button';
import { TextArea } from '../components/text-area';
import { barWrapper } from './commit-bat.css';
import { useGit } from '../contexts/git-context';
import { buttonRow } from '../style.css';

type CommitBarProps = {
    readonly setSelectedFile: (file: string) => void
}

export const CommitBar = ({ setSelectedFile }: CommitBarProps) => {

    const { commands: git } = useGit();

    const [commitMessage, setCommitMessage] = useState('');

    const makeCommit = () => {
        if (commitMessage.trim().length === 0) {
            console.log("Commit message can't be blank!");
            return;
        }
        git.commit(commitMessage);
        setCommitMessage('');
        setSelectedFile('');
    };

    return (
        <div className={barWrapper}>
            <TextArea value={commitMessage} onChange={e => setCommitMessage(e.target.value)} />
            <div className={buttonRow}>
                <ContainedButton onClick={makeCommit}>Commit</ContainedButton>
            </div>
        </div>
    );
};