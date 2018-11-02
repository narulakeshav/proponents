/**
 * @name: styles.js
 * @desc: styled-component styles for the input
 *
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import RULES from '../../helpers/config.json';

/**
 * InputContainer
 * @type div
 */
export const InputContainer = styled.div`
  width: ${(props) => (props.width) ? `${props.width}px` : 'auto'};
  display: ${(props) => (props.display) ? props.display : 'block'};
  margin: ${(props) => (props.margin)};
`;

/**
 * InputComponent
 * @type div
 */
export const InputComponent = styled.div`
  position: relative;
  top: 5px;
  display: inline-grid;
  grid-template-columns: ${(props) => (props.split)};
  width: 100%;
  grid-gap: 1rem;
  background: ${RULES.scheme.white};
  height: 45px;
  border-radius: 6px;
  box-shadow: 0 1px 3px #E6EBF1;
  margin: 0 0 0.5rem;
  padding: 0 1rem;
  transition: 0.25s all ease-in;
  align-items: center;

  border: 1px solid ${(props) => (props.bordered)
    ? RULES.scheme.error
    : 'transparent'
  };

  &:focus {
    box-shadow: 0 1px 2px #DFE5ED;
  }
`;

/**
 * IconEl
 */
export const IconEl = styled.i`
  color: ${(props) => (props.error) ? RULES.scheme.error : RULES.scheme.lighter};
  font-size: 20px;
  transition: 0.25s all ease-in;
`;

/**
 * InputEl
 * Defines style props for input element
 */
export const InputEl = styled.input`
  font: 400 18px ${RULES.styles.fontFamily};
  color: ${RULES.scheme.dark};
  background: transparent;
`;

/**
 * LabelEl
 * Defines style props for label element
 */
export const LabelEl = styled.label`
  display: block;
  margin: 2.25rem auto 5px 0;
  font: 500 14px ${RULES.styles.fontFamily};
  color: ${RULES.scheme.light};
`;
