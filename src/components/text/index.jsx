/**
 * @name: text.jsx
 * @desc: Renders heading and text
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { H1, H2, H3, H4, H5, P } from './styles';

/**
 * Local Variables
 */
type Props = {
  h?: string | null,
  children: any,
};

/**
 * Creates Dynamic Heading
 * @param {Props} props
 */
export const Heading = (props: Props) => {
  switch (props.h) {
    case 2:
      return <H2 {...props}>{props.children}</H2>;
    case 3:
      return <H3 {...props}>{props.children}</H3>;
    case 4:
      return <H4 {...props}>{props.children}</H4>;
    case 5:
      return <H5 {...props}>{props.children}</H5>;
    default:
      return <H1 {...props}>{props.children}</H1>;
  }
};

/**
 * Creates Paragraph Text
 * @param {Props} props
 */
export const Text = (props: Props) => (
  <P {...props}>{props.children}</P>
);

// Default Props
Heading.defaultProps = {
  h: 1
};

Text.defaultProps = {
  h: null
};
