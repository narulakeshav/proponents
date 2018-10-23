/**
 * External Dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

/**
 * Internal Dependencies
 */
import Button from '../src/components/button';

/**
 * Stories
 */
storiesOf('Button', module)
  .add('Default', () => (
    <Button onClick={action('clicked')}>
      Default Button
    </Button>
  ))
  .add('Invert', () => (
    <Button bg="#222" color="white">
      Dark Button
    </Button>
  ))
  .add('Rounded', () => (
    <Button bg="#29ADBA" color="white" rounded>
      Rounded Button
    </Button>
  ));
