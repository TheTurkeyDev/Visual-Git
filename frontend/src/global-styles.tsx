import { useState } from 'react';
import { globalWrapper } from './style.css';
import { darkTheme, lightTheme } from './theme.css';

type GlobalStylesProps = {
    readonly children: JSX.Element
}

export const GlobalStyles = ({ children }: GlobalStylesProps) => {
    const [isDarkTheme, setIsDarkTheme] = useState(true);

    return (
        <div className={`${globalWrapper} ${isDarkTheme ? darkTheme : lightTheme}`}>
            {/* <button onClick={() => setIsDarkTheme((currentValue) => !currentValue)}>
                Switch to {isDarkTheme ? 'light' : 'dark'} theme
            </button> */}
            {children}
        </div>
    );
};