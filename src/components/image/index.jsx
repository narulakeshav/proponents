/**
 * @name: image.jsx
 * @desc: Renders image component
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import { Image } from './styles';

/**
 * Local Variables
 */
type Props = {
  src: string,
  alt: string,
  radius?: string,
  margin?: string,
  display?: string,
  padding?: string,
  width?: number | string,
  height?: number | string,
  rounded?: boolean,
};

/**
 * Image Proponent
 * @param {Props} props
 */
const ImageProponent = (props: Props) => (
  <Image {...props} />
);

ImageProponent.defaultProps = {
  radius: '0',
  margin: '0 auto',
  display: 'inline-block',
  padding: '0',
  width: '100%',
  height: 'auto',
  rounded: false,
};

// Export
export default ImageProponent;
