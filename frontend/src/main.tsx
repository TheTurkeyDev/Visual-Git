import React from 'react';
import '@fontsource/roboto';
import { createRoot } from 'react-dom/client';
import './style.css.ts';
import './assets/css/fontawsome-all.min.css';
import { App } from './App';
import { GlobalStyles } from './global-styles.js';
import { GitWrapper } from './contexts/git-context.js';
import { ReposWrapper } from './contexts/repos-context.js';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
    <React.StrictMode>
        <ReposWrapper>
            <GitWrapper>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </GitWrapper>
        </ReposWrapper>
    </React.StrictMode>
);
