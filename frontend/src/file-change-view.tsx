import { useEffect, useState } from 'react';
import { GitDiff } from '../wailsjs/go/git/GitCommands';
import { useGit } from './contexts/git-context';
import { git } from '../wailsjs/go/models';
import Prism from 'prismjs';
import { useRepos } from './contexts/repos-context';

type FileChangeViewProps = {
    readonly selectedFile: string
}

export const FileChangeViewer = ({ selectedFile }: FileChangeViewProps) => {
    const { currentRepo } = useRepos();
    const { changes } = useGit();
    const [diff, setDiff] = useState('');
    const [gitChange, setGitChange] = useState<git.GitStatusOrdinary>();

    useEffect(() => {
        Prism.highlightAll();
    }, [diff]);

    useEffect(() => {
        if (selectedFile !== '' && !!currentRepo) {
            GitDiff(currentRepo, selectedFile).then(setDiff);
            setGitChange(changes?.ordinary.find(c => c.path === selectedFile));
        }
    }, [selectedFile]);

    const diffs = diff.split('\n').slice(5).join('\n').split(/@@.+@@/i);

    const editedDiffs = diffs.map(l => l.replace(/@@.+@@/i, ''));

    return (
        <div style={{ overflow: 'auto', padding: '4px' }}>
            {editedDiffs.map((diff, i) => (
                <pre key={i}>
                    <code className='language-diff'>
                        {diff}
                    </code>
                </pre>
            ))}
        </div>
    );
};