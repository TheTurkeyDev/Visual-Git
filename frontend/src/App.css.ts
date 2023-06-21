import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const appWrapper = style({
    display: 'grid',
    gridTemplateRows: '50px 1fr',
    height: '100%'
});

export const mainWrapper = style({
    display: 'grid',
    backgroundColor: vars.surface.color,
    overflow: 'hidden',
});

export const changesAndHistWrapper = style({
    display: 'grid',
    gridTemplateColumns: '1fr 2px 1fr',
    justifyItems: 'center',
    overflow: 'hidden',
    borderBottom: `1px solid ${vars.background.on}`,
});

globalStyle(`${changesAndHistWrapper} input`, {
    position: 'absolute',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    width: '1px',
    border: '0',
    overflow: 'hidden',
});

export const changesAndHistLabel = style({
    width: '100%',
    textAlign: 'center',
    padding: '8px 0px',
    transition: 'all 0.1s ease-in-out',
    selectors: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

globalStyle(`${changesAndHistWrapper} input:checked + ${changesAndHistLabel}`, {
    backgroundColor: vars.primary.color,
    color: vars.primary.on,
});

export const mainPanel = style({
    display: 'grid',
    gridTemplateRows: '1fr auto ',
    overflow: 'hidden',
    height: '100%',
});