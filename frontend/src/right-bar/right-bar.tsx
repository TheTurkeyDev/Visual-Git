import { Changes } from '../changes/changes';
import { CommitBar } from '../commit-bar/commit-bar';
import { rightBar, rightBarCollapseBtn, rightBarInternal } from './right-bar.css';

type RightBarProps = {
    readonly setSelectedFile: (file: string) => void
    readonly show: boolean
    readonly toggleShow: () => void
}

export const RightBar = ({ setSelectedFile, show, toggleShow }: RightBarProps) => {
    return (
        <div className={rightBar}>
            <div className={rightBarInternal}>
                <Changes setSelectedFile={setSelectedFile} />
                <CommitBar />
            </div>
            <div className={rightBarCollapseBtn} onClick={toggleShow}>
                <i className={`fa-solid ${show ? 'fa-chevron-right' : 'fa-chevron-left'}`} />
            </div>
        </div>
    );
};