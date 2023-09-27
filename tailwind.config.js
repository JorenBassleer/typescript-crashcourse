/** @type {import('tailwindcss').Config} */
import { black as _black, white as _white, slate, emerald, violet, amber, fuchsia } from 'tailwindcss/colors';
// eslint-disable-next-line no-undef
export const content = [
"./index.html",
"./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
theme: {
colors: {
transparent: 'transparent',
current: 'currentColor',
primary: 'rgb(14, 11, 65)',
secondary: 'rgba(226, 226, 226, 1)',
accent: 'rgba(212, 212, 250, 1)',
black: _black,
white: _white,
gray: slate,
green: emerald,
purple: violet,
yellow: amber,
pink: fuchsia,
},
},
extend: {
colors: {
primary: 'rgb(14, 11, 65)',
secondary: 'rgba(226, 226, 226, 1)',
accent: 'rgba(212, 212, 250, 1)',
},
},
};
export const plugins = [];

