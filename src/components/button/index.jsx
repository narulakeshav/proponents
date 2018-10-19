/**
 * @name: Button
 * @desc: Renders button and links on the site.
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { Button } from './styles';

/**
 * Local Variables
 */
type Props = {
  children?: any,
  bgTransparent?: boolean,
  bgPrimary?: boolean,
  bgPrimaryLight?: boolean,
  bgSecondary?: boolean,
  bgGray?: boolean,
  bgDark?: boolean,
  rounded?: boolean,
  sizeSmall?: boolean,
  sizeLarge?: boolean,
  fullWidth?: boolean,
  noPadding?: boolean,
  uppercase?: boolean,
  iconLeft?: boolean,
  iconRight?: boolean,
  aspectLocked?: boolean,
  fontSize?: number,
  iconSize?: number,
  marginTop?: boolean,
  marginBottom?: boolean,
  marginLeft?: boolean,
  marginRight?: boolean,
};

/**
 * Button Component
 * @param {Props} props
 */
const ButtonComponent = (props: Props) => (
  <Button {...props}>
    {props.children}
  </Button>
);

ButtonComponent.defaultProps = {
  children: '',
  bgTransparent: true,
  bgPrimary: false,
  bgPrimaryLight: false,
  bgSecondary: false,
  bgGray: false,
  bgDark: false,
  rounded: false,
  sizeLarge: false,
  sizeSmall: false,
  fullWidth: false,
  noPadding: false,
  uppercase: false,
  iconLeft: false,
  iconRight: false,
  aspectLocked: false,
  fontSize: 16,
  iconSize: 16,
  marginTop: false,
  marginBottom: false,
  marginLeft: false,
  marginRight: false,
};

// Export Button
export default ButtonComponent;
