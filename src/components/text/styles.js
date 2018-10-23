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

/** ************************************************/
/** ***************** FONT STYLING *****************/
/** ************************************************/

/**
 * H1 Component
 * @type h1
 */
export const H1 = styled.h1`
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.darkest
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 800};
  font-size: ${FONT.size * 3.25}px;
  font-family: ${FONT.family};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
`;

/**
 * H2 Component
 * @type h2
 */
export const H2 = styled.h2`
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 700};
  font-size: ${FONT.size * 2.75}px;
  font-family: ${FONT.family};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
`;

/**
 * H3 Component
 * @type h3
 */
export const H3 = styled.h3`
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 700};
  font-size: ${FONT.size * 2}px;
  font-family: ${FONT.family};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
`;

/**
 * H4 Component
 * @type h4
 */
export const H4 = styled.h4`
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 600};
  font-size: ${FONT.size * 1.5}px;
  font-family: ${FONT.family};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
`;

/**
 * H5 Component
 * @type h5
 */
export const H5 = styled.h5`
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 600};
  font-size: ${FONT.size * 1.25}px;
  font-family: ${FONT.family};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
`;

/**
 * Text Component
 * @type p (paragraph)
 */
export const P = styled.p`
  color: ${(props) => (props.color)
    ? (props.color.includes('#'))
      ? props.color
      : COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 400};
  font-size: ${(props) => (props.fontSize)
    ? `${props.fontSize}px`
    : `${FONT.size}px`
  };
  font-family: ${FONT.family};
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  text-align: ${(props) => (props.align)};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom)
    ? `${props.marginBottom}px`
    : '8px'
  };

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '150%'
  };

  strong {
    font-weight: 700;
  }
`;
