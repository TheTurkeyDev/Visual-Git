import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const leftBar = style({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    overflowX: 'hidden',
    zIndex: 1,
    paddingRight: '20px',
    marginRight: '-20px',
});

export const leftBarGroup = style({
    display: 'grid',
    gridTemplateRows: 'auto',
    borderTop: `1px solid ${vars.background.on}`,
});

export const leftBarGroupHeader = style({
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    alignItems: 'center',
    backgroundColor: `${vars.background.color}`,
    color: `${vars.background.on}`,
    padding: '2px 8px',
    selectors: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

export const leftBarGroupHeaderIcon = style({
    selectors: {
        '&:hover': {
            color: `${vars.primary.color}`,
        }
    }
});

export const leftBarGroupItems = style({
    display: 'grid',
    gridTemplateColumns: '16px 16px 1fr',
    gap: '4px',
    padding: '1px 8px',
    alignItems: 'center'
});

export const leftBarFill = style({
    flexGrow: 1,
    backgroundColor: `${vars.background.color}`,
    borderTop: `1px solid ${vars.background.on}`,
});

export const leftBarCollapseBtn = style({
    position: 'absolute',
    right: '0px',
    background: `${vars.background.color}`,
    zIndex: '1',
    width: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
    height: '25px',
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    selectors: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
});