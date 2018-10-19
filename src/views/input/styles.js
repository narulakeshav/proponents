/**
 * @flow
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { ACTIONS, COLORS, FONT } from '../../helpers/variables';

export const Label = styled.label`
  display: block;
  margin: 2.25rem auto 5px 0;
  font: 500 14px ${FONT.family};
  color: ${COLORS.light};
`;

export const InputContainer = styled.div`
  position: relative;
  top: 5px;
  display: inline-grid;
  grid-template-columns: ${(props) => (props.split)};
  grid-gap: 1rem;
  background: ${COLORS.white};
  width: 400px;
  height: 45px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.bordered)
    ? ACTIONS.error
    : 'transparent'};
  box-shadow: 0 1px 3px #E6EBF1;
  margin: 0 0.5rem 1rem 0;
  padding: 0 1rem;
  transition: 0.25s all ease-in;
  align-items: center;

  &:focus {
    box-shadow: 0 1px 2px #DFE5ED;
  }
`;

export const Icon = styled.i`
  color: ${(props) => (props.error)
    ? ACTIONS.error
    : COLORS.lighter};
  font-size: 20px;
  transition: 0.25s all ease-in;
`;

export const Input = styled.input`
  font: 400 18px ${FONT.family};
  color: ${COLORS.dark};
  background: transparent;
`;
