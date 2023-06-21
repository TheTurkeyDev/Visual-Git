import { createTheme, createThemeContract } from '@vanilla-extract/css';

const elevation = {
    none: '0px 0px 0px 0px rgba(0, 0, 0, .2), 0px 0px 0px 0px rgba(0, 0, 0, .14), 0px 0px 0px 0px rgba(0, 0, 0, .12);',
    lowest: '0px 0px 3px 0px rgba(0, 0, 0, 0.16), 0px 1px 1px 0px rgba(0, 0, 0, 0.26)',
    low: '0px 2px 10px 0px rgba(0, 0, 0, 0.16), 0px 2px 5px 0px rgba(0, 0, 0, 0.26)',
    medium: '0px 2px 9px 0px rgba(0, 0, 0, 0.15), 0px 5px 7px 0px rgba(0, 0, 0, 0.19)',
    high: '0px 6px 11px 0px rgba(0, 0, 0, 0.14), 0px 8px 9px 0px rgba(0, 0, 0, 0.17)',
    highest: '0px 7px 18px 0px rgba(0, 0, 0, 0.19), 0px 9px 14px 0px rgba(0, 0, 0, 0.22)',
};

export const vars = createThemeContract({
    fontFamily: null,
    background: {
        color: null,
        on: null,
    },
    primary: {
        color: null,
        on: null,
    },
    secondary: {
        color: null,
        on: null,
    },
    navbar: {
        color: null,
        on: null,
    },
    surface: {
        color: null,
        on: null,
    },
    inputs: {
        color: null,
        colorDisabled: null,
        outlineRaised: null,
        outlineLowered: null,
        on: null,
        onVariant: null,
        onDisabled: null,
    },
    error: {
        color: null,
        on: null,
    },
    elevation,
});

export const lightTheme = createTheme(vars, {
    fontFamily: 'Ubuntu',
    background: {
        color: '#E5E5E5',
        on: '#343A40'
    },
    primary: {
        color: '#009FBF',
        on: '#212529'
    },
    secondary: {
        color: '#00687D',
        on: '#fff'
    },
    navbar: {
        color: '#fafafa',
        on: '#343A40'
    },
    surface: {
        color: '#f1f1f1',
        on: '#343A40'
    },
    inputs: {
        color: '#BFC8CC',
        colorDisabled: '#d8d8d8',
        outlineRaised: '#05050540',
        outlineLowered: '#00000099',
        on: '#212529',
        onVariant: '#899295',
        onDisabled: '#767c7e'
    },
    error: {
        color: '#ba1b1b',
        on: '#680003'
    },
    elevation,
});

export const darkTheme = createTheme(vars, {
    fontFamily: 'Ubuntu',
    background: {
        color: '#212529',
        on: '#d8d8d8'
    },
    primary: {
        color: '#009FBF',
        on: '#fff'
    },
    secondary: {
        color: '#b3babd',
        on: '#009FBF'
    },
    navbar: {
        color: '#212529',
        on: '#d8d8d8'
    },
    surface: {
        color: '#333B44',
        on: '#d8d8d8'
    },
    inputs: {
        color: '#343A40',
        colorDisabled: '#61696C',
        outlineRaised: '#ffffff65',
        outlineLowered: '#00000066',
        on: '#fff',
        onVariant: '#899295',
        onDisabled: '#b3babd'
    },
    error: {
        color: '#ba1b1b',
        on: '#fff'
    },
    elevation,
});