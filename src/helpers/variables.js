/**
 * @name: Variables
 * @desc: Contains color scheme and default variables
 * for styling. Updating this will cause the styles
 * such as color or font to change.
 *
 * @flow
 */

// Colors
export const COLORS = {
  gray: '#F4F4F6',
  lighter: '#BFC2CC',
  light: '#878C9C',
  base: '#606374',
  dark: '#373F52',
  darkest: '#262D38',
  white: '#FFFFFF',
  // Actions
  success: '#2ECC71',
  error: '#FF3769',
  warning: '#FFB300',
  info: '#00B0FF',
};

// Font
export const FONT = {
  family: `${[
    'SF Pro Text',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    'Helventica Neue',
    'Roboto',
  ].join(',')}`,
  size: 16
};
