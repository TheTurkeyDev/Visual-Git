import { useState, useEffect, createContext, useContext } from 'react';
import { git } from '../../wailsjs/go/models';
import { GitAdd, GitBranchesList, GitCommit, GitReset, GitStatus, GitBranch, GitIgnore } from '../../wailsjs/go/git/GitCommands';
import { useRepos } from './repos-context';
import { useInterval } from '../hooks/use-interval';

type GitContextType = {
    readonly branch: string
    readonly branches: readonly git.GitBranch[]
    readonly changes?: git.GitStatusChanges
    readonly commands: {
        readonly add: (file: string) => void
        readonly reset: (file: string) => void
        readonly commit: (message: string) => void
        readonly branch: (name: string) => void
        readonly ignore: (pattern: string) => void
    }
}

export const GitContext = createContext<GitContextType | null>(null);

export const useGit = () => {
    const git = useContext(GitContext);
    if (!git)
        throw new Error('Git is undefined! Must be used from within a Git Provider!');
    return git;
};

type GitWrapperProps = {
    readonly children: JSX.Element
}

export const GitWrapper = ({ children }: GitWrapperProps) => {

    const { currentRepo } = useRepos();

    const [branch, setBranch] = useState('');
    const [branches, setBranches] = useState<readonly git.GitBranch[]>([]);
    const [changes, setChanges] = useState<git.GitStatusChanges>();

    console.log(currentRepo);

    useEffect(() => {
        gitStatus();
        gitBranches();
    }, [currentRepo]);

    useInterval(() => {
        gitStatus();
    }, 5000);

    const gitStatus = () => {
        if (!currentRepo)
            return;
        GitStatus(currentRepo).then(status => {
            setBranch(status.branch);
            setChanges(status.changes);
        });
    };

    const gitBranches = () => {
        if (!currentRepo)
            return;
        GitBranchesList(currentRepo).then(branches => {
            console.log(branches);
            setBranches(branches);
        });
    };

    const gitAdd = (file: string) => {
        if (!currentRepo)
            return;
        GitAdd(currentRepo, file).then(log => {
            gitStatus();
        });
    };

    const gitReset = (file: string) => {
        if (!currentRepo)
            return;
        GitReset(currentRepo, file).then(log => {
            gitStatus();
        });
    };

    const gitCommit = (message: string) => {
        if (!currentRepo)
            return;
        GitCommit(currentRepo, message).then(log => {
            gitStatus();
        });
    };

    const gitBranch = (name: string) => {
        if (!currentRepo)
            return;
        GitBranch(currentRepo, name).then(log => {
            console.log(log);
            gitBranches();
            gitStatus();
        });
    };

    const gitIgnore = (pattern: string) => {
        if (!currentRepo)
            return;
        GitIgnore(currentRepo, pattern).then(() => {
            gitBranches();
            gitStatus();
        });
    };



    const commands = {
        add: gitAdd,
        reset: gitReset,
        commit: gitCommit,
        branch: gitBranch,
        ignore: gitIgnore,
    };

    return (
        <GitContext.Provider value={{ branch, branches, changes, commands }}>
            {children}
        </GitContext.Provider>
    );
};