import { git } from '../../../wailsjs/go/models';
import { useRepos } from '../../contexts/repos-context';
import { repoDropdownGroupItem, repoDropdownItem, subDropdown } from './repo-dropdown.css';
import { RepoGroup } from './repo-group';

type RepoGroupItemProps = {
    readonly repos: RepoGroup
    readonly close: () => void
}
export const RepoGroupItem = ({ repos, close }: RepoGroupItemProps) => {

    const { setCurrentRepo } = useRepos();

    const onRepoClick = (repo: git.LocalRepository) => {
        setCurrentRepo(repo);
        close();
    };

    return (
        <>
            {
                repos.contents.map(c => (
                    Object.keys(c).includes('contents') ? (
                        <div key={c.name} className={repoDropdownGroupItem}>
                            <span>{c.name}</span>
                            <i className='fa-solid fa-chevron-right' />
                            <div className={subDropdown}>
                                <RepoGroupItem repos={c as RepoGroup} close={close} />
                            </div>
                        </div>
                    ) : (
                        <div key={c.name} className={repoDropdownItem} onClick={() => onRepoClick(c as git.LocalRepository)}>
                            <i className='fa-brands fa-git-alt' />
                            <span>{c.name}</span>
                        </div>
                    )
                ))
            }
        </>
    );
};