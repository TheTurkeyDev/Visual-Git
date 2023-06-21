import { style } from '@vanilla-extract/css';
import { vars } from '../../theme.css';

export const repoDropdownItem = style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '8px',
    padding: '4px',
    alignItems: 'center',
    selectors: {
        '&:hover': {
            cursor: 'pointer',
            color: `${vars.primary.color}`,
        }
    }
});

export const repoDropdownGroupItem = style({
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '8px',
    padding: '4px',
    alignItems: 'center',
    selectors: {
        '&:hover': {
            cursor: 'pointer',
            color: `${vars.primary.color}`,
        }
    }
});

export const subDropdown = style({
    position: 'absolute',
    top: '0',
    left: '100%',
    height: 'fit-content',
    width: '100%',
    backgroundColor: `${vars.navbar.color}`,
    color: `${vars.navbar.on}`,
    display: 'none',
    gridTemplateColumns: '1fr',
    selectors: {
        [`${repoDropdownGroupItem}:hover>&`]: {
            display: 'grid',
        },
    }
});