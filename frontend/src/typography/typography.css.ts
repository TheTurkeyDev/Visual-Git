import { FontWeight } from '../constants/font-weight';
import { vars } from '../theme.css';
import { globalStyle, style } from '@vanilla-extract/css';

export const headline1 = globalStyle('h1', {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.LIGHT}`,
    fontSize: '96px',
    lineHeight: '100px',
    letterSpacing: '-1.5%',
});

export const headline2 = globalStyle('h2', {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.LIGHT}`,
    fontSize: '60px',
    lineHeight: '68px',
    letterSpacing: '-0.5%',
});

export const headline3 = globalStyle('h3', {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '48px',
    lineHeight: '56px',
    letterSpacing: 0,
});

export const headline4 = globalStyle('h4', {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '34px',
    lineHeight: '42px',
    letterSpacing: '.25%'
});

export const headline5 = globalStyle('h5', {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '24px',
    lineHeight: '32px',
    letterSpacing: 0,
});

export const headline6 = globalStyle('h6', {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.MEDIUM}`,
    fontSize: '20px',
    lineHeight: '26px',
    letterSpacing: ' 0.15%',
});

const subtitle1CSS = {
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: '0.5%',
};
export const subtitle1 = style(subtitle1CSS);
export const label =  globalStyle('label', subtitle1CSS);

export const subtitle2 = style({
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.MEDIUM}`,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.1%',
});

export const body1 = style({
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '16px',
    lineHeight: '24px',
    letterSpacing: ' 0.5%',
});

export const body2 = style({
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '0.25%',
});

export const caption = style({
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '12px',
    lineHeight: '16px',
    letterSpacing: '0.4%',
});

export const buttonText = style({
    margin: 0,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.MEDIUM}`,
    fontSize: '14px',
    lineHeight: '20px',
    letterSpacing: '1.25%',
    textTransform: 'uppercase',
});

export const overline = style({
    margin: 0,
    color: `${vars.surface.on}`,
    fontFamily: `${vars.fontFamily}`,
    fontWeight: `${FontWeight.NORMAL}`,
    fontSize: '10px',
    lineHeight: '14px',
    letterSpacing: '0.5%',
});