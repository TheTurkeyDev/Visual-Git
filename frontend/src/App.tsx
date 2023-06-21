import { useState } from 'react';
import { appWrapper, mainPanel, mainWrapper } from './App.css';
import { FileChangeViewer } from './file-change-view';
import { TopBar } from './top-bar/top-bar';
import { LeftBar } from './left-bar/left-bar';
import { useRepos } from './contexts/repos-context';
import { RightBar } from './right-bar/right-bar';

export const App = () => {

    const { currentRepo } = useRepos();
    const [histChecked, setHistChecked] = useState(false);
    const [selectedFile, setSelectedFile] = useState('');
    const [showLeftBar, setShowLeftBar] = useState(true);
    const [showRightBar, setShowRightBar] = useState(true);

    const lbw = showLeftBar ? 20 : 0;
    const rbw = showRightBar ? 20 : 0;

    return (
        <div className={appWrapper}>
            <TopBar />
            {
                currentRepo &&
                <div className={mainWrapper} style={{ gridTemplateColumns: `${lbw}% ${100 - lbw - rbw}% ${rbw}%` }}>
                    <LeftBar show={showLeftBar} toggleShow={() => setShowLeftBar(old => !old)} />
                    <div className={mainPanel}>
                        <FileChangeViewer selectedFile={selectedFile} />
                    </div>
                    <RightBar setSelectedFile={setSelectedFile} show={showRightBar} toggleShow={() => setShowRightBar(old => !old)} />
                </div>
            }
        </div>
    );
};
