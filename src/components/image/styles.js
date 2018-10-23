/**
 * @name: styles.js
 * @desc: styled-component styles for
 *
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Image styled component
 * @type img
 */
export const Image = styled.img`
  display: ${(props) => (props.display)};
  padding: ${(props) => (props.padding)};
  width: ${(props) => (typeof props.width === 'number')
    ? `${props.width}%`
    : props.width
  };
  height: ${(props) => (typeof props.height === 'number')
    ? `${props.height}%`
    : props.height
  };
  border-radius: ${(props) => (props.rounded)
    ? '50%'
    : (props.radius)
      ? props.radius
      : '0'
  };
  margin: ${(props) => (props.margin)
      ? props.margin
      : (props.width)
        ? `0 ${(100 - props.width) / 2}%`
        : (props.marginLeft)
          ? '0 auto 0 0'
          : (props.marginRight)
            ? '0 0 0 auto'
            : '0 auto'
  };

  float: ${(props) => (props.floatLeft)
    ? 'left'
    : (props.floatRight)
      ? 'right'
      : 'none'
  };
  @media screen and (max-width: 925px) {
    display: ${(props) => (props.mobileNoDisplay)
      ? 'none'
      : props.display
    };
    width: ${(props) => (props.mobileWidth)
      ? `${props.mobileWidth}px`
      : '100%'
    };
    margin: ${(props) => (props.mobileMargin)
      ? props.mobileMargin
      : '0'
    };
  }
`;
