/**
 * @flow
 *
 * External Dependencies
 */
import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

/**
 * Internal Dependencies
 */
// eslint-disable-next-line
import './reset.css.js';
import ScrollToTop from './helpers/ScrollToTop';
import Navbar from './components/navbar';

// Views/Routes
import Home from './views/home';
import Input from './views/input';
import Matrix3D from './views/matrix3d';

/**
 * Local Variables
 */
type Props = {};

/**
 * App Component
 * Manages all the Routes.
 */
class App extends React.Component<Props> {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route
              path="/p/input"
              component={Input}
            />
            <Route
              path="/p/matrix3d"
              component={Matrix3D}
            />
            <Route
              path="/"
              component={Home}
              exact
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

// Export
export default App;
