import { createRef, useState } from 'react';
import { useGit } from '../contexts/git-context';
import { clickable } from '../style.css';
import { caption } from '../typography/typography.css';
import { changeItem, changeText, ellipsisOption, ellipsisOptions } from './change-item.css';
import { useClickOutside } from '../hooks/use-click-outside';
import { IgnoreModal } from './modals/ignore-modal';

type ChangeItemProps = {
    readonly path: string
    readonly type: string
    readonly add: boolean
    readonly setSelectedFile: (file: string) => void
}

const iconForType: { readonly [key: string]: string } = {
    'A': 'fa-regular fa-square-plus',
    'M': 'fa-solid fa-pen',
    '?': 'fa-solid fa-question'
};

const colorForType: { readonly [key: string]: string } = {
    'A': '#128a12',
    'M': 'orange',
    '?': 'orange'
};

export const ChangeItem = ({ path, type, add, setSelectedFile }: ChangeItemProps) => {
    const ref = createRef<HTMLDivElement>();
    useClickOutside(ref, () => !!setShowOptions && setShowOptions(false));
    const { commands: git } = useGit();

    const [showOptions, setShowOptions] = useState(false);
    const [showIgnoreModal, setShowIgnoreModal] = useState(false);


    return (
        <>
            <div className={changeItem} key={path} onClick={() => setSelectedFile(path)}>
                <i className={iconForType[type] ?? 'fa-solid fa-exclamation'} style={{ color: colorForType[type] ?? 'red' }} />
                <span className={`${changeText} ${caption} ${clickable}`}> {path} </span>
                <i className={`${clickable} fa-solid ${add ? 'fa-plus' : 'fa-minus'}`} style={{ color: add ? 'green' : 'red' }} onClick={() => add ? git.add(path) : git.reset(path)} />
                <i className={`${clickable} fa-solid fa-ellipsis`} onClick={() => setShowOptions(old => !old)} />
                <div ref={ref} className={ellipsisOptions} style={{ display: showOptions ? 'grid' : 'none' }}>
                    <span className={ellipsisOption} onClick={() => { setShowIgnoreModal(true); setShowOptions(false); }}>Ignore</span>
                </div>
            </div>
            {showIgnoreModal && <IgnoreModal file={path} show={showIgnoreModal} requestClose={() => setShowIgnoreModal(false)} />}
        </>
    );
};