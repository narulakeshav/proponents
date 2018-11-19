/**
 * External Dependencies
 */
import { configure } from '@storybook/react';

// You can require as many stories as you need.
function loadStories() {
  require('../stories/index.stories.jsx');
}

configure(loadStories, module);
