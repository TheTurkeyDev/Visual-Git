import { changesWrapper, header, separator, unstaged } from './changes.css';
import { useGit } from '../contexts/git-context';
import { ChangeItem } from './change-item';
import { scrolled } from '../style.css';

type ChangesProps = {
    readonly setSelectedFile: (file: string) => void
}
export const Changes = ({ setSelectedFile }: ChangesProps) => {
    const { changes } = useGit();

    return (
        <div className={changesWrapper}>
            <h5 className={header}>Staged</h5>
            <div className={unstaged}>
                {
                    changes?.ordinary.filter(c => c.xy[0] !== '.').map(c => (
                        <ChangeItem key={c.path} path={c.path} type={c.xy[0]} add={false} setSelectedFile={setSelectedFile} />
                    ))
                }
            </div>
            <div className={separator}></div>
            <h5 className={header}>Unstaged</h5>
            <div className={unstaged}>
                {
                    changes?.ordinary.filter(c => c.xy[1] !== '.').map(c => (
                        <ChangeItem key={c.path} path={c.path} type={c.xy[1]} add={true} setSelectedFile={setSelectedFile} />
                    ))
                }
                {
                    changes?.untracked.map(c => (
                        <ChangeItem key={c.path} path={c.path} type='?' add={true} setSelectedFile={setSelectedFile} />
                    ))
                }
            </div>
        </div>
    );
};