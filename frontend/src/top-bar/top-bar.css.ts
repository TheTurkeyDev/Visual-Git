import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const topBar = style({
    display: 'flex',
    backgroundColor: `${vars.navbar.color}`,
});

export const topBarSelect = style({
    position: 'relative',
    width: '200px',
    border: '2px solid black',
    borderLeft: '0px',
    padding: '0px 4px',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    gap: '8px',
    alignItems: 'center'
});

export const gitActions = style({
    flexGrow: '1',
    display: 'flex',
    justifyContent: 'center',
    gap: '8px',
});

export const action = style({
    height: '100%',
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    justifyItems: 'center',
    alignItems: 'center'
});

export const topBarSelectMiddle = style({
    width: '100%',
    display: 'grid',
    gridTemplateRows: '1fr 1fr',
});

export const dropdown = style({
    position: 'absolute',
    top: '100%',
    height: 'fit-content',
    width: '100%',
    backgroundColor: `${vars.navbar.color}`,
    display: 'grid',
    gridTemplateColumns: '1fr',
});