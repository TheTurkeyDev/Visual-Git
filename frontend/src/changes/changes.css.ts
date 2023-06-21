import { style } from '@vanilla-extract/css';

export const changesWrapper = style({
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr 2px auto 1fr',
    justifyItems: 'center',
    overflowY: 'hidden'
});

export const separator = style({
    width: '100%',
    height: '100%',
    background: 'white'
});

export const header = style({
    margin: '4px 0px',
    textDecoration: 'underline',
});

export const unstaged = style({
    width: '100%',
    overflowY: 'auto'
});