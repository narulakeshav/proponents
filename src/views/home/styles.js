/**
 * @name: Global
 * @desc: Sets global styling for atomic elements and page
 * elements like h1, h2, h3, h4, h5, p, span, image, section,
 * page, and also includes css grid (check GridSection).
 *
 * @flow
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, SCHEME } from '../../helpers/variables';
import { GridSection } from '../../helpers/global';

export const CardsContainer = styled(GridSection)`
  grid-auto-row: 1fr;
`;

export const ComponentCard = styled.div`
  background: ${(props) => (props.bgGray)
    ? SCHEME.gray
    : COLORS.white};
  box-shadow: ${(props) => (props.bgGray)
    ? 'none'
    : `0 1px 3px ${SCHEME.shadow}`};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  transition: 0.1s all ease-in;

  &:hover {
    transform: scale(1.08);
    p {
      color: ${SCHEME.primary};
    }
  }
`;
