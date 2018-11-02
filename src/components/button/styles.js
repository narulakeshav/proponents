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
 * Button Component
 * @type button
 */
export const Button = styled.button`
  display: ${(props) => (props.display)};
  border: none;
  background: ${(props) => (props.bg) ? props.bg : RULES.scheme.gray};
  border-radius: ${(props) => (RULES.btnRounded || props.rounded)
    ? '40px'
    : '4px'
  };
  font-weight: ${(props) => (props.weight) ? props.weight : 700};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : RULES.scheme[props.color]
    : RULES.scheme.dark
  };

  transition: 0.25s all ease-in-out;
  cursor: pointer;
  line-height: 0;
  letter-spacing: 0.95px;

  font-size: ${(props) => `${props.fontSize}px`};

  box-shadow: ${(props) => (props.shadow)
    ? '0 2px 4px rgba(0,0,0,0.1)'
    : 'none'
  };

  margin-right: ${(props) => (!props.noMargin && props.marginRight)
    ? '8px'
    : '0'
  };
  margin-left: ${(props) => (!props.noMargin && props.marginLeft)
    ? '8px'
    : '0'
  };
  margin-top: ${(props) => (!props.noMargin && props.marginTop)
    ? '8px'
    : '0'
  };
  margin-bottom: ${(props) => (!props.noMargin && props.marginBottom)
    ? '8px'
    : '0'
  };

  padding: ${(props) => (props.aspectLocked || props.noPadding)
    ? '0'
    : (props.sizeLarge)
      ? '14px 2rem'
      : (props.sizeSmall)
        ? '10px 0.75rem'
        : '10px 1.25rem'
  };

  width: ${(props) => (props.sizeSmall && props.aspectLocked)
    ? '35px'
    : (props.aspectLocked)
      ? '45px'
      : (props.fullWidth)
        ? '100%'
        : 'auto'
  };

  height: ${(props) => (props.sizeSmall)
    ? '35px'
    : (props.sizeLarge)
      ? '50px'
      : (props.noPadding)
        ? 'auto'
        : '38px'
  };

  &:focus {
    outline: 0;
    box-shadow: 0;
  }

  &:hover {
    opacity: 0.9;
  }
`;
