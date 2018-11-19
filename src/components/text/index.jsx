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
  h1?: boolean,
  h2?: boolean,
  h3?: boolean,
  h4?: boolean,
  h5?: boolean,
  children: any,
};

/**
 * Creates Dynamic Heading
 * @param {Props} props
 */
export const Heading = (props: Props) => (
  (props.h1)
    ? <H1 {...props}>{props.children}</H1>
    : (props.h2)
      ? <H2 {...props}>{props.children}</H2>
      : (props.h3)
        ? <H3 {...props}>{props.children}</H3>
        : (props.h4)
          ? <H4 {...props}>{props.children}</H4>
          : <H5 {...props}>{props.children}</H5>
);

/**
 * Creates Paragraph Text
 * @param {Props} props
 */
export const Text = (props: Props) => (
  <P {...props}>{props.children}</P>
);

// Default Props
Heading.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
};

Text.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
};
