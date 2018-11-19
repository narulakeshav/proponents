/**
 * External Dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

/**
 * Internal Dependencies
 */
import Button from '../index';

/**
 * Local Variables
 */
const btnStory = storiesOf('Buttons', module);

// Default Btn
btnStory.add('Default', () => (
  <Button onClick={action('clicked')}>
    Default Button
  </Button>
));

// Rounded Btn
btnStory.add('Rounded', () => (
  <Button bg="#6155E6" color="#FFF" rounded>
    Rounded Button
  </Button>
));

// Inverted Btn
btnStory.add('Inverted', () => (
  <Button bg="#222" color="#29ABDA">
    Dark Button
  </Button>
));
