/**
 * @flow
 * Internal Dependencies
 */
import Button from './components/button';
import Image from './components/image';
import Card from './components/card';
import Row from './components/row';
import { Heading, Text } from './components/text';

// eslint-disable-next-line
import './reset.css.js';

import { updateRules } from './helpers/variables';

const setConfig = (configObj: Object): void => {
  // somehow affect the settings in variables?
  updateRules(configObj);
};

// Export
export {
  Button,
  Heading,
  Text,
  Image,
  Card,
  Row,
  setConfig
};
