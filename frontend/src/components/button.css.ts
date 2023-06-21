import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '../theme.css';

const rotation = keyframes({
    '0%': {
        transform: 'rotate(0deg)',
    },
    '100%': {
        transform: ' rotate(360deg)',
    }
});

const baseSimpleLoadingSpinner = style({
    minWidth: '16px',
    minHeight: '16px',
    borderBottomColor: 'transparent',
    borderRadius: '50%',
    display: 'inline-block',
    boxSizing: 'border-box',
    animation: `${rotation} 1s linear infinite`,
});

export const containedSimpleLoadingSpinner = style([
    ...baseSimpleLoadingSpinner,
    {
        border: `${vars.primary.on}`,
    }
]);

export const simpleLoadingSpinner = style([
    ...baseSimpleLoadingSpinner,
    {
        border: `${vars.secondary.color}`,
    }
]);

const baseButton = style({
    position: 'relative',
    alignItems: 'center',
    width: 'fit-content',
    minWidth: '60px',
    borderRadius: '5px',
    padding: '8px 16px',
    selectors: {
        '&:hover': {
            opacity: '75%',
            textDecoration: 'none',
            cursor: 'pointer',
        },
        '&:disabled': {
            color: `${vars.inputs.onDisabled}`,
            border: `1px solid ${vars.inputs.colorDisabled}`,
            cursor: 'not-allowed',
        },
    }
});

export const containedButton = style([
    baseButton,
    {
        background: `${vars.primary.color}`,
        color: `${vars.primary.on}`,
        border: 'none',
        selectors: {
            '&:disabled': {
                background: `${vars.inputs.colorDisabled}`,
            },
        },
    }
]);

export const outlinedButton = style([
    baseButton,
    {
        background: 'transparent',
        color: `${vars.primary.color}`,
        border: `1px solid ${vars.primary.color}`,
        selectors: {
            '&:disabled': {
                background: 'transparent',
            },
        },
    }
]);

export const textButton = style([
    baseButton,
    {
        background: 'transparent',
        color: `${vars.secondary.color}`,
        border: 'none',
        selectors: {
            '&:disabled': {
                background: 'transparent',
            },
        },
    }
]);

const baseButtonContent = style({
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
});

export const buttonNoGapContent = style([baseButtonContent, { gap: '0' }]);
export const buttonWithGapContent = style([baseButtonContent, { gap: '8px' }]);

export const buttonLoading = style({
    position: 'absolute',
    zIndex: 1,
    width: 'calc(100% - 32px)',
    margin: 'auto',
});