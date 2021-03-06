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
import RULES from '../../helpers/config.json';

/**
 * Card Item
 * @type div
 */
export const Card = styled.div`
  background: ${(props) => (props.bg.includes('#'))
    ? props.bg
    : RULES.scheme[props.bg]
  };
  border: ${(props) => (props.bordered || ((props.bg === '#FFFFFF' || props.bg === 'white')))
    ? `1px solid ${RULES.scheme.gray}`
    : 'none'
  };

  box-shadow: ${(props) => (props.bg === '#FFFFFF' || props.bg === 'white')
    ? '0 1px 3px #EDEDF2'
    : 'none'
  };

  border-radius: ${(props) => (props.radius)};
  padding: ${(props) => (props.padding)};
  font-family: ${RULES.styles.fontFamily};
  cursor: pointer;
  transition: 0.15s all ease-in;

  &:hover {
    background: ${(props) => (props.bg === '#FFFFFF' || props.bg === 'white')
      ? RULES.scheme.white
      : '#EDEDF2'
    };

    box-shadow: ${(props) => (props.bg === '#FFFFFF' || props.bg === 'white')
      ? '0 2px 6px #EDEDF2'
      : 'none'
    };
    transform: translate3D(0,-3px,0) scale(1.02);
  }
`;
