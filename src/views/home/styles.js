/**
 * @name: styles.js
 * @desc: Sets styling for the home page
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

/**
 * CardsContainer
 * @type GridSection
 */
export const CardsContainer = styled(GridSection)`
  grid-auto-row: 1fr;
`;

/**
 * ComponentCard
 * Defines a component card
 * @type div
 *
 * @prop {boolean} bgGray: set background to gray?
 */
export const ComponentCard = styled.div`
  background: ${(props) => (props.bgGray)
    ? SCHEME.gray
    : COLORS.white
  };

  box-shadow: ${(props) => (props.bgGray)
    ? 'none'
    : `0 1px 3px ${SCHEME.shadow}`
  };

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
