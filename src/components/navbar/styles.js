/**
 * External Dependencies
 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { COLORS, SCHEME, FONT } from '../../helpers/variables';

export const Navbar = styled.nav`
  position: fixed !important;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: ${COLORS.white};
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  padding: 1rem 5%;
`;

export const NavbarBrand = styled.div`
  display: inline-block;
  margin-right: 1.5rem;
`;

export const Wordmark = styled.h4`
  font: 700 22px 'Carter One';
  color: ${COLORS.dark};
  transition: 0.25s all ease-in;

  &:hover {
    animation: zoomBounce 0.25s cubic-bezier(.24,.22,.015,1.56) forwards;
  }

  @keyframes zoomBounce {
    from {
      opacity: 0.75;
      transform: scale(1);
    } to {
      color: ${SCHEME.primary};
      opacity: 1;
      transform: scale(1.05);
    }
  }
`;

export const NavbarMenu = styled.div`
  position: relative;
  top: -2px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  padding: 0 1rem;
`;

export const NavbarStart = styled.div`
  align-items: start;
`;

export const NavbarItem = styled(Link)`
  font: 400 ${FONT.size} ${FONT.family};
  color: ${COLORS.base};
  padding: 0 1rem;
  transition: 0.15s all ease-in;

  &:hover {
    color: ${SCHEME.secondary};
  }
`;
