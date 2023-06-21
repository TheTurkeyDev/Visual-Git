import { useState } from 'react';
import { ContainedButton } from '../components/button';
import { TextArea } from '../components/text-area';
import { barWrapper } from './commit-bat.css';
import { useGit } from '../contexts/git-context';
import { buttonRow } from '../style.css';

export const CommitBar = () => {

    const { commands: git } = useGit();

    const [commitMessage, setCommitMessage] = useState('');

    const makeCommit = () => {
        if (commitMessage.trim().length === 0) {
            console.log("Commit message can't be blank!");
            return;
        }
        git.commit(commitMessage);
        setCommitMessage('');
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