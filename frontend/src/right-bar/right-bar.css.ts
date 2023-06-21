import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const rightBar = style({
    position: 'relative',
    zIndex: 1,
    paddingLeft: '20px',
    marginLeft: '-20px',
    overflowX: 'hidden',
});

export const rightBarInternal = style({
    width: '100%',
    height: '100%',
    backgroundColor: `${vars.background.color}`,
    display: 'grid',
    gridTemplateRows: '1fr auto',
    overflowY: 'hidden',
});

export const rightBarCollapseBtn = style({
    position: 'absolute',
    left: 0,
    top: 0,
    background: `${vars.background.color}`,
    zIndex: '1',
    width: '20px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'grid',
    height: '25px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
    selectors: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
});
