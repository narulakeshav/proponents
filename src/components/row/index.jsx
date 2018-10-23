/**
 * @name: row.jsx
 * @desc: Renders row (section) with css grid
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { GridSection } from '../../helpers/global';

/**
 * Local Variables
 */
type Props = {
  children: any
};

/**
 * Row Proponent
 * @param {Props} props
 */
const RowProponent = (props: Props) => (
  <GridSection {...props}>
    {props.children}
  </GridSection>
);

// Export
export default RowProponent;
