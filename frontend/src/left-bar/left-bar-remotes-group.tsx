import { useState } from 'react';
import { useGit } from '../contexts/git-context';
import { body1 } from '../typography/typography.css';
import { LeftBarGroup } from './left-bar-group';
import { leftBarGroupItems } from './left-bar.css';
import { NewRemoteModal } from './modals/new-remote-modal';

export const LeftBarRemotesGroup = () => {
    const { branches, remotes } = useGit();

    const [showNewRemoteModal, setShowRemoteModal] = useState(false);

    return (
        <>
            <LeftBarGroup title='Remotes' onPlusClick={() => setShowRemoteModal(true)}>
                <>
                    {
                        remotes.length === 0 &&
                        <>
                            <span className={body1}>-- No Remotes --</span>
                        </>
                    }
                    {
                        remotes.map(r => (
                            <div className={leftBarGroupItems}>
                                {
                                    branches.filter(b => !b.name.startsWith(`remotes/${r.name}`)).map(b => (
                                        <>
                                            <span></span>
                                            <i className='fa-solid fa-code-branch' />
                                            <span className={body1}>{b.name}</span>
                                        </>
                                    ))
                                }
                            </div>
                        ))
                    }
                </>
            </LeftBarGroup>
            <NewRemoteModal show={showNewRemoteModal} requestClose={() => setShowRemoteModal(false)} />
        </>
    );
};