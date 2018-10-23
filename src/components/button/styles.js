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
import { COLORS } from '../../helpers/variables';

/**
 * Button Component
 * @type button
 */
export const Button = styled.button`
  display: inline-block;
  border: none;
  background: ${(props) => (props.bg) ? props.bg : COLORS.gray};
  border-radius: ${(props) => (props.rounded) ? '40px' : '4px'};
  font-weight: ${(props) => (props.weight) ? props.weight : 500};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  color: ${(props) => (props.color) ? COLORS[props.color] : COLORS.dark};
  transition: 0.25s all ease-in-out;
  cursor: pointer;
  line-height: 0;

  font-size: ${(props) => (props.fontSize)
    ? `${props.fontSize}px`
    : '10px'
  };

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
        : '45px'
  };

  &:hover {
    opacity: 0.9;
  }
`;
