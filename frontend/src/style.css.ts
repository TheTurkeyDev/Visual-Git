import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css';


globalStyle('body', {
    fontFamily: 'Roboto',
    margin: 0,
    height: '100vh',
    width: '100vw'
});

globalStyle('div::-webkit-scrollbar', { width: '0.75em' });
globalStyle('div::-webkit-scrollbar-track', { boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)' });
globalStyle('div::-webkit-scrollbar-thumb', { backgroundColor: 'darkgrey', outline: '1px solid slategrey' });
globalStyle('pre::-webkit-scrollbar', { width: '0.75em', height: '0.75em' });
globalStyle('pre::-webkit-scrollbar-track', { boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)' });
globalStyle('pre::-webkit-scrollbar-thumb', { backgroundColor: 'darkgrey', outline: '1px solid slategrey' });

export const globalWrapper = style({
    backgroundColor: vars.background.color,
    color: vars.background.on,
    transition: '0.15s',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden'
});

export const clickable = style({
    selectors: {
        '&:hover': {
            cursor: 'pointer',
        }
    }
});

export const verticalList = style({
    display: 'grid',
    gridTemplateColumns: '1fr',
});

export const verticalSeparator = style({
    width: '100%',
    background: vars.background.on
});

export const buttonRow = style({
    display: 'flex',
    gap: '8px',
    justifyContent: 'flex-end',
});

export const icon = style({ alignSelf: 'center' });

export const clickableIcon = style([icon, {
    selectors: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
}]);

export const checkbox = style({
    justifySelf: 'left'
});

export const scrolled = style({
    overflowY: 'auto'
});