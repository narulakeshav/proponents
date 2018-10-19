/**
 * @name: styles.js
 * @desc: styles the matrix3d example on the page
 *
 * @flow
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { SCHEME, COLORS } from '../../helpers/variables';
import { Section } from '../../helpers/global';
import Button from '../../components/button';

/**
 * TabGroup
 * @type div
 */
export const TabGroup = styled.div`
  margin: 2rem 0 1.5rem;
`;

/**
 * TabSelector
 * Sets styles to the tab items
 * @type Button
 */
export const TabSelector = styled(Button)`
  border-radius: 0;
  margin-right: 16px;

  &.active {
    font-weight: 700;
    color: ${SCHEME.primary};

    &:hover {
      color: ${SCHEME.primary};
    }
  }

  &:hover {
    color: ${COLORS.dark};
  }
`;

/**
 * ContentWell
 * defines styles for content
 */
export const ContentWell = styled.div`
  background: ${COLORS.white};
  padding: 2rem;
  border-radius: 12px;
  height: auto;
  box-shadow: 0 1px 3px #E6EBF1;
  transition: 1.5s all ease-in;
`;

/**
 * SectionContent
 * @type Section
 */
export const SectionContent = styled(Section)`
  padding: 1rem;
  transition: 0.25s all ease-in;

  &.well.selected {
    opacity: 0;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 300, 0, 0, 1);
    animation: slideFade 0.25s linear forwards;
  }

  &.well.absolute {
    position: absolute;
    z-index: -1;
    opacity: 0;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 300, 0, 0, 1);
  }

  @keyframes slideFade {
    from {
      opacity: 0;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 300, 0, 0, 1);
    }

    to {
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      opacity: 1;
    }
  }
`;
