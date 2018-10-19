/**
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import { withRouter } from 'react-router-dom';

/**
 * Local Variables
 */
type Props = {
  location: string,
  children: React.Node
};

/**
 * ScrollToTop HOC
 * Scrolls the page to top when a route change
 */
class ScrollToTop extends React.Component<Props> {
  componentDidUpdate = (prevProps: Object) => {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

// Export
export default withRouter(ScrollToTop);
