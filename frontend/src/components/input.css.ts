import { style } from '@vanilla-extract/css';
import { subtitle1 } from '../typography/typography.css';
import { vars } from '../theme.css';

export const styledInput = style([subtitle1, {
    background: 'transparent',
    color: 'inherit',
    outline: 0,
    border: 0,
    padding: 0,
    height: '100%',
    selectors: {
        '&:required, &:invalid': {
            boxShadow: 'none',
        },
        '&:not(placeholder-shown)': {
            color: `${vars.inputs.on}`,
        },
        '&:disabled': {
            color: `${vars.inputs.onDisabled}`,
            cursor: 'not-allowed',
        },
        '&:read-only': {
            color: `${vars.inputs.onDisabled}`,
        }
    }
}]);

export const inputContainer = style({
    backgroundColor: `${vars.inputs.color}`,
    color: `${vars.inputs.onVariant}`,
    padding: '0 12px 0 16px',
    borderRadius: '4px',
    border: `1px solid ${vars.inputs.outlineLowered}`,
    height: '36px',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr auto',
    transition: 'background-color 0.2s',
    selectors: {
        '&:focus-within': {
            color: `${vars.inputs.on}`,
        },
        '&:hover&:not(:focus-within)': {
            opacity: '75%',
        }
    }
});

export const readOnlyInputContainer = style([inputContainer, {
    backgroundColor: `${vars.inputs.colorDisabled}`,
    color: `${vars.inputs.onDisabled}`,
}]);

export const disabledInputContainer = style([readOnlyInputContainer, {
    cursor: 'not-allowed',
}]);

export const inputsWrapperBase = style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '16px',
    alignItems: 'center',
});


export const inputsWrapper = style([inputsWrapperBase, { width: 'fit-content' }]);
export const inputsWrapperFullWidth = style([inputsWrapperBase, { width: '100%' }]);

export const inputsFullWidth = style({ gridArea: 'span 1 / 2' });