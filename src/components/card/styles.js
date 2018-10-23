/**
 * @name: styles.js
 * @desc: styled-component styles for
 *
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, FONT } from '../../helpers/variables';

/**
 * Card Item
 * @type div
 */
export const Card = styled.div`
  background: ${(props) => (props.bg.includes('#'))
    ? props.bg
    : COLORS[props.bg]
  };
  border: ${(props) => (props.bordered || props.hasShadow)
    ? `1px solid ${COLORS.gray}`
    : 'none'
  };

  box-shadow: ${(props) => (props.hasShadow)
    ? '0 1px 3px #EDEDF2'
    : 'none'
  };

  border-radius: ${(props) => (props.radius)};
  padding: ${(props) => (props.padding)};
  font-family: ${FONT.family};
  cursor: pointer;
  transition: 0.15s all ease-in;

  &:hover {
    background: ${(props) => (props.bg === '#FFFFFF' || props.bg === 'white')
      ? COLORS.white
      : '#EDEDF2'
    };

    box-shadow: ${(props) => (props.bg === '#FFFFFF' || props.bg === 'white')
      ? '0 2px 6px #EDEDF2'
      : 'none'
    };
    transform: scale(1.05);
  }
`;
