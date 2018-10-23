/**
 * @name: card.jsx
 * @desc: Renders card item
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { Card } from './styles';

/**
 * Local Variables
 */
type Props = {
  bg?: string,
  bordered?: boolean,
  children: any,
  padding?: string,
  radius?: string,
  hasShadow?: boolean,
};

/**
 * Card Proponent
 * @param {Props} props
 */
const CardProponent = (props: Props) => (
  <Card {...props}>
    {props.children}
  </Card>
);

// Default Props
CardProponent.defaultProps = {
  bg: 'gray',
  bordered: false,
  padding: '2rem',
  radius: '10px',
  hasShadow: false
};

// Export
export default CardProponent;
