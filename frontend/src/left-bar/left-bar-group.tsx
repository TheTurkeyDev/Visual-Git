import { useState } from 'react';
import { subtitle1 } from '../typography/typography.css';
import { leftBarGroup, leftBarGroupHeader, leftBarGroupHeaderIcon } from './left-bar.css';

type LeftBarGroupProps = {
    readonly title: string,
    readonly children: JSX.Element
    readonly onPlusClick: () => void
}

export const LeftBarGroup = ({ title, children, onPlusClick }: LeftBarGroupProps) => {
    const [expand, setExpand] = useState(false);
    return (
        <div className={leftBarGroup}>
            <div className={leftBarGroupHeader}>
                <span className={subtitle1} onClick={() => setExpand(old => !old)}>{title}</span>
                <i className={`fa-solid fa-plus ${leftBarGroupHeaderIcon}`} onClick={onPlusClick} />
            </div>
            {expand && children}
        </div>
    );
};