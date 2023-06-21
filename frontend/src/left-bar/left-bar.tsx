
import { leftBar, leftBarCollapseBtn, leftBarFill } from './left-bar.css';
import { LeftBarBranchesGroup } from './left-bar-branches-group';
import { LeftBarRemotesGroup } from './left-bar-remotes-group';

type LeftBarProps = {
    readonly show: boolean
    readonly toggleShow: () => void
}
export const LeftBar = ({ show, toggleShow }: LeftBarProps) => {

    return (
        <div className={leftBar} style={{ height: show ? '100%': '25px' }}>
            <LeftBarBranchesGroup />
            <LeftBarRemotesGroup />
            <div className={leftBarFill} />
            <div className={leftBarCollapseBtn} onClick={toggleShow}>
                <i className={`fa-solid ${show ? 'fa-chevron-left' : 'fa-chevron-right'}`} />
            </div>
        </div>
    );
};