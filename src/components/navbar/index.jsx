/**
 * @flow
 */
import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import {
  Navbar,
  NavbarBrand,
  Wordmark,
  NavbarMenu,
  NavbarStart,
  NavbarItem
} from './styles';

/**
 * Navbar Component
 */
const NavbarComponent = () => (
  <Navbar>
    <NavbarBrand>
      <Link to="/">
        <Wordmark>proponents</Wordmark>
      </Link>
    </NavbarBrand>
    <NavbarMenu>
      <NavbarStart>
        <NavbarItem to="/p/input">Input</NavbarItem>
        <NavbarItem to="/p/form">Form</NavbarItem>
        <NavbarItem to="/p/matrix3d">Matrix3d</NavbarItem>
      </NavbarStart>
    </NavbarMenu>
  </Navbar>
);

// Export
export default NavbarComponent;
