import { useState } from 'react';
import { useGit } from '../contexts/git-context';
import { body1 } from '../typography/typography.css';
import { LeftBarGroup } from './left-bar-group';
import { leftBarGroupItems } from './left-bar.css';
import { NewBranchModal } from './modals/new-branch-modal';

export const LeftBarBranchesGroup = () => {
    const { branches } = useGit();

    const [showNewBranchModal, setShowNewBranchModal] = useState(false);

    const localBranches = branches.filter(b => !b.name.startsWith('remotes/'));

    return (
        <>
            <LeftBarGroup title='Branches' onPlusClick={() => setShowNewBranchModal(true)}>
                <div className={leftBarGroupItems}>
                    {
                        localBranches.length === 0 &&
                        <>
                            <span></span>
                            <span></span>
                            <span className={body1}>-- No Branches --</span>
                        </>
                    }
                    {
                        localBranches.map(b => (
                            <>
                                <span></span>
                                <i className='fa-solid fa-code-branch' />
                                <span className={body1}>{b.name}</span>
                            </>
                        ))
                    }
                </div>
            </LeftBarGroup>
            <NewBranchModal show={showNewBranchModal} requestClose={() => setShowNewBranchModal(false)} />
        </>
    );
};