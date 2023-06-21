import { style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

export const backgroundWrapper = style({
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    left: '0',
    top: '0',
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
});

export const modalContent = style({
    background: `${vars.background.color}`,
    color: `${vars.background.on}`,
    boxShadow: `${vars.elevation.highest}`,
    filter: 'blur(0)',
    borderRadius: '15px',
    padding: '16px',
    width: 'fit-content',
    height: 'fit-content',
});