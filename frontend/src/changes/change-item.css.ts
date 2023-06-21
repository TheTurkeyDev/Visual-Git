import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const changeItem = style({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto auto',
    gap: '4px',
    padding: '0px 4px',
});

export const changeText = style({
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    direction: 'rtl',
    textAlign: 'left',
});

export const ellipsisOptions = style({
    position: 'absolute',
    top: '100%',
    right: 0,
    height: 'fit-content',
    backgroundColor: vars.surface.color,
    display: 'grid',
    gridTemplateColumns: '1fr',
    zIndex: 1,
    padding: '4px 8px'
});

export const ellipsisOption = style({
    selectors: {
        '&:hover': {
            color: vars.primary.color,
            cursor: 'pointer'
        }
    }
});