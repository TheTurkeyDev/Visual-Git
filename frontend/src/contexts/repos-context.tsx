import { useState, useEffect, createContext, useContext } from 'react';
import { RepoGroup } from '../top-bar/repos/repo-group';
import { git } from '../../wailsjs/go/models';
import { GetRepos } from '../../wailsjs/go/main/App';

type ReposContextType = {
    readonly repos: RepoGroup
    readonly currentRepo?: git.LocalRepository
    readonly addRepo: (repo: git.LocalRepository, setCurrent?: boolean) => void
    readonly setCurrentRepo: (repo: git.LocalRepository) => void
}

export const ReposContext = createContext<ReposContextType | null>(null);

export const useRepos = () => {
    const repos = useContext(ReposContext);
    if (!repos)
        throw new Error('Repo Tracker is undefined! Must be used from within a Repo Provider!');
    return repos;
};

type ReposWrapperProps = {
    readonly children: JSX.Element
}

export const ReposWrapper = ({ children }: ReposWrapperProps) => {
    const [repos, setRepos] = useState<RepoGroup>({ contents: [], name: 'root' });
    const [currentRepo, setCurrentRepo] = useState<git.LocalRepository>();

    useEffect(() => {
        GetRepos().then(r => setRepos({ contents: r, name: 'root' }));
    }, []);

    const addRepo = (repo: git.LocalRepository, setCurrent: boolean = false) => {
        setRepos({ contents: [...repos.contents, repo], name: 'root' });
        if (setCurrent)
            setCurrentRepo(repo);
    };

    return (
        <ReposContext.Provider value={{ repos, currentRepo, setCurrentRepo, addRepo }}>
            {children}
        </ReposContext.Provider>
    );
};