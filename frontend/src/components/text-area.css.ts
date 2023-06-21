import { style } from '@vanilla-extract/css';
import { subtitle1 } from '../typography/typography.css';
import { vars } from '../theme.css';

export const styledTextArea = style([subtitle1, {
    background: 'transparent',
    color: 'inherit',
    outline: 0,
    border: 0,
    padding: 0,
    height: '100%',
    resize: 'none',
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
        },
        '&::-webkit-scrollbar': { width: '0.75em', height: '0.75em' },
        '&::-webkit-scrollbar-track': { boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)' },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'darkgrey', outline: '1px solid slategrey' }
    }
}]);

export const textAreaContainer = style({
    backgroundColor: `${vars.inputs.color}`,
    color: `${vars.inputs.onVariant}`,
    padding: '0 0 0 16px',
    borderRadius: '4px',
    border: `1px solid ${vars.inputs.outlineLowered}`,
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
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

export const readOnlyTextAreaContainer = style([textAreaContainer, {
    backgroundColor: `${vars.inputs.colorDisabled}`,
    color: `${vars.inputs.onDisabled}`,
}]);

export const disabledTextAreaContainer = style([readOnlyTextAreaContainer, {
    cursor: 'not-allowed',
}]);

export const textAreaWrapperBase = style({
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '16px',
    alignItems: 'center',
});


export const textAreaWrapper = style([textAreaWrapperBase, { width: 'fit-content' }]);
export const textAreaWrapperFullWidth = style([textAreaWrapperBase, { width: '100%' }]);

export const textAreaFullWidth = style({ gridArea: 'span 1 / 2' });