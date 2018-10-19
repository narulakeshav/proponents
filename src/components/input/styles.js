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
import { ACTIONS, COLORS, FONT } from '../../helpers/variables';

/**
 * InputContainer
 * Wrapper for label, input, and error message
 * @type div
 *
 * @prop {boolean} inline: display component inline?
 * @prop {string} width: size in px
 * @prop {string} margin: margin for component
 */
export const InputContainer = styled.div`
  max-width: ${(props) => (props.width)
    ? `${props.width}px`
    : 'auto'
  };
  min-width: ${(props) => (props.width)
    ? `${props.width}px`
    : 'auto'
  };
  display: ${(props) => (props.inline)
    ? 'inline-block'
    : 'block'
  };
  margin: ${(props) => (props.margin)};
`;

/**
 * InputComponent
 * Wrapper for input element and the icon
 * @type div
 *
 * @prop {string} split: splits the column in defined format
 * @prop {boolean} bordered: set the border if bordered (has error)
 */
export const InputComponent = styled.div`
  position: relative;
  top: 5px;
  display: inline-grid;
  grid-template-columns: ${(props) => (props.split)};
  width: 100%;
  grid-gap: 1rem;
  background: ${COLORS.white};
  height: 45px;
  border-radius: 6px;
  border: 1px solid ${(props) => (props.bordered)
    ? ACTIONS.error
    : 'transparent'
  };
  box-shadow: 0 1px 3px #E6EBF1;
  margin: 0 0 0.5rem;
  padding: 0 1rem;
  transition: 0.25s all ease-in;
  align-items: center;

  &:focus {
    box-shadow: 0 1px 2px #DFE5ED;
  }
`;

/**
 * IconEl
 * Define style for <i.material-icons> element
 *
 * @prop {boolean} error: change icon color to red on error
 */
export const IconEl = styled.i`
  color: ${(props) => (props.error)
    ? ACTIONS.error
    : COLORS.lighter
  };
  font-size: 20px;
  transition: 0.25s all ease-in;
`;

/**
 * InputEl
 * Defines style props for input element
 */
export const InputEl = styled.input`
  font: 400 18px ${FONT.family};
  color: ${COLORS.dark};
  background: transparent;
`;

/**
 * LabelEl
 * Defines style props for label element
 */
export const LabelEl = styled.label`
  display: block;
  margin: 2.25rem auto 5px 0;
  font: 500 14px ${FONT.family};
  color: ${COLORS.light};
`;
