import { useGit } from '../contexts/git-context';
import { action, gitActions, topBar, topBarSelect, topBarSelectMiddle } from './top-bar.css';
import { RepoDropdown } from './repos/repo-dropdown';
import { caption, overline } from '../typography/typography.css';

export const TopBar = () => {
    const { branch } = useGit();

    return (
        <div className={topBar} >
            <RepoDropdown />
            <div className={topBarSelect}>
                <i className='fa-solid fa-code-branch' />
                <div className={topBarSelectMiddle}>
                    <span>Branch</span>
                    <span>{branch}</span>
                </div>
                <i className='fa-solid fa-chevron-down' />
            </div>
            <div className={gitActions}>
                <div className={action}>
                    <span className={caption}>Fetch</span>
                    <i className='fa-solid fa-arrow-down-long' />
                </div>
                <div className={action}>
                    <span className={caption}>Push</span>
                    <i className='fa-solid fa-arrow-up-long' />
                </div>
                <div className={action}>
                    <span className={caption}>Branch</span>
                    <i className='fa-solid fa-code-branch' />
                </div>
                <div className={action}>
                    <span className={caption}>Merge</span>
                    <i className='fa-solid fa-code-merge' />
                </div>
            </div>
            <div>
                User
            </div>
        </div>
    );
};