import { useState } from 'react';
import { dropdown, topBarSelect, topBarSelectMiddle } from '../top-bar.css';
import { clickable, verticalSeparator } from '../../style.css';
import { useRepos } from '../../contexts/repos-context';
import { repoDropdownItem } from './repo-dropdown.css';
import { RepoGroupItem } from './repo-group-item';
import { UserAddGitRepo } from '../../../wailsjs/go/main/App';
import { AddRepoModal } from './modal/add-repo-modal';

type RepoDropdownProps = {
}
export const RepoDropdown = ({ }: RepoDropdownProps) => {

    const { repos, currentRepo } = useRepos();

    const [show, setShow] = useState(false);
    const [showAddRepoModal, setShowAddRepoModal] = useState(false);

    const addRepo = () => {
        setShow(false);
        setShowAddRepoModal(true);
    };

    return (
        <div className={topBarSelect}>
            <i className='fa-solid fa-book-bookmark' />
            <div className={topBarSelectMiddle}>
                <span>Repository</span>
                <span>{currentRepo?.name ?? '--'}</span>
            </div>
            <i className={`fa-solid fa-chevron-down ${clickable}`} onClick={() => setShow(old => !old)} />
            <div className={dropdown} style={{ display: show ? 'grid' : 'none' }}>
                <div className={verticalSeparator} style={{ height: '1px' }} />
                {
                    repos.contents.length === 0 ? <div><span>No Repos Tracked!</span></div> : <RepoGroupItem repos={repos} close={() => setShow(false)}/>
                }
                <div className={verticalSeparator} style={{ height: '1px' }} />
                <div className={repoDropdownItem} onClick={addRepo}>
                    <i className='fa-solid fa-plus' />
                    <span>Add Repo</span>
                </div>
            </div>
            <AddRepoModal show={showAddRepoModal} requestClose={() => setShowAddRepoModal(false)}/>
        </div>
    );
};