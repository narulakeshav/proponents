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
  margin-bottom: -100px;
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

  box-shadow: 0 5px 15px -2px rgba(0,0,0,0.075);
  border-radius: 6px;
  padding: 2rem;
  text-align: center;
  transition: 0.1s all ease-in;

  &:hover {
    transform: scale(0.985);
  }

  &:focus,
  &:active {
    transform: scale(0.95);
  }
`;

export const AuthorList = styled.div`
  position: relative;
  top: -1rem;
  text-align: center;
`;

export const AuthorPhoto = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  box-shadow: 0 0 0 3px ${COLORS.white};
  object-fit: cover;
  margin-left: -6px;
`;

export const DifficultyMeter = styled.div`
  display: inline-flex;
  margin: 2rem 0.5rem 0.75rem;
`;

export const Difficulty = styled.div`
  flex: 1;
  width: 12px;
  height: 12px;
  margin: 0 3px;
  border-radius: 10px;
  background: ${SCHEME.primaryLight};
`;
