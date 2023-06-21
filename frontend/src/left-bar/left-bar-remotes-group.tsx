import { useGit } from '../contexts/git-context';
import { body1 } from '../typography/typography.css';
import { LeftBarGroup } from './left-bar-group';
import { leftBarGroupItems } from './left-bar.css';

export const LeftBarRemotesGroup = () => {
    const { branches } = useGit();

    const remotes = branches.filter(b => b.name.startsWith('remotes/')).reduce((inc, curr) => {
        const remote = curr.name.split('/')[1];
        if (!inc.includes(remote))
            return [...inc, remote];
        return inc;
    }, [] as readonly string[]);
    
    return (
        <LeftBarGroup title='Remotes' onPlusClick={() => { }}>
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
                                branches.filter(b => !b.name.startsWith(`remotes/${r}`)).map(b => (
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
    );
};