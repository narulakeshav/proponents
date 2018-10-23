/**
 * @name: Global
 * @desc: Sets global styling for atomic elements and page
 * elements like h1, h2, h3, h4, h5, p, span, image, section,
 * page, and also includes css grid (check GridSection).
 *
 * @flow
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, FONT } from './variables';

/**
 * Exporting Styled Components
 */

/** ************************************************/
/** ***************** DIV STYLING *****************/
/** ************************************************/
/**
 * Section Component
 * @type Section
 *
 * @prop {string} bg: custom HEXCODE (#FFFFFF)
 * @prop {string} bgGradient: use gradient for background?
 * @prop {string} borderRadius: use gradient for background?
 * @prop {boolean} align: align text to center?
 * @prop {string} padding: add padding to section
 */
export const Section = styled.section`
  background: ${(props) => (props.bgGradient)
    ? `linear-gradient(${props.bgGradient})`
    : (props.bg)
      ? props.bg
      : 'none'
  };
  border-radius: ${(props) => (props.borderRadius)};
  text-align: ${(props) => (props.align)};
  padding: ${(props) => (props.padding)};
`;

/**
 * GridSection Component
 * @extends Section
 *
 * @prop {string} split: split columns with this config
 * @prop {string} tabletSplit: add split to section (on tablet)
 * @prop {string} mobileSplit: split columns (on mobile)
 * @prop {string} gap: add grid-gap (gutter)
 * @prop {string} tabletGap: add gap to section (on tablet)
 * @prop {string} width: set grid section width
 * @prop {string} tabletWidth: add width to section (on tablet)
 * @prop {string} mobileWidth: set width (on mobile)
 * @prop {string} margin: sets margin to the Grid Section
 * @prop {string} padding: add padding to section
 * @prop {string} mobilePadding: add padding to section (on mobile)
 * @prop {string} tabletPadding: add padding to section (on tablet)
 * @prop {boolean} alignVertically: align items vertically centered?
 * @prop {boolean} alignBottom: align items to bottom?
 * @prop {boolean} justifyCenter: justifies all the children center
 * @prop {boolean} sameHeightChildren: set same height to all children
 */
export const GridSection = styled(Section)`
  display: grid;
  grid-template-columns: ${(props) => (props.split)
    ? props.split
    : '1fr 1fr'
  };
  grid-gap: ${(props) => (props.gap) ? props.gap : '0'};
  grid-auto-rows: ${(props) => (props.sameHeightChildren)
    ? '1fr'
    : 'auto'
  };

  width: ${(props) => (props.width)
    ? `${props.width}%`
    : 'auto'
  };

  margin: ${(props) => (props.margin)
    ? props.margin
    : (props.width)
      ? '0 auto'
      : 'auto'
  };

  align-items: ${(props) => (props.alignVertically)
    ? 'center'
    : (props.alignBottom)
      ? 'end'
      : 'start'
  };

  justify-items: ${(props) => (props.justifyCenter)
    ? 'center'
    : 'stretch'
  };

  @media screen and (max-width: 1280px) {
    padding: ${(props) => (props.tabletPadding)
      ? props.tabletPadding
      : props.padding
    };

    width: ${(props) => (props.tabletWidth)
      ? `${props.tabletWidth}%`
      : 'auto'
    };

    grid-template-columns: ${(props) => (props.tabletSplit)
      ? props.tabletSplit
      : (props.split)
        ? props.split
        : '1fr 1fr'
    };

    grid-gap: ${(props) => (props.tabletGap)
      ? props.tabletGap
      : (props.gap)
        ? props.gap
        : '0'
    };
  }

  @media screen and (max-width: 824px) {
    padding: ${(props) => (props.mobilePadding)
      ? props.mobilePadding
      : props.padding
    };

    grid-template-columns: ${(props) => (props.mobileSplit)
      ? props.mobileSplit
      : (props.split)
        ? props.split
        : '1fr 1fr'
    };

    grid-gap: ${(props) => (props.mobileGap)
      ? props.mobileGap
      : (props.gap)
        ? props.gap
        : '0'
    };

    width: ${(props) => (props.mobileWidth)
      ? `${props.mobileWidth}%`
      : 'auto'
    };
  }
`;

/** ************************************************/
/** ***************** FONT STYLING *****************/
/** ************************************************/

/**
 * H1 Component
 * @type h1
 */
export const H1 = styled.h1`
  color: ${(props) => (props.color)
    ? COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 800};
  font-size: ${FONT.size * 3.25}px;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

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
    ? COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 700};
  font-size: ${FONT.size * 2.75}px;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

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
    ? COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 700};
  font-size: ${FONT.size * 2}px;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

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
    ? COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 600};
  font-size: ${FONT.size * 1.5}px;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

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
    ? COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 600};
  font-size: ${FONT.size * 1.25}px;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
`;

/**
 * Text Component
 * @type p (paragraph)
 */
export const Text = styled.p`
  color: ${(props) => (props.color)
    ? COLORS[props.color]
    : props.colorRGBA
      ? props.colorRGBA
      : COLORS.dark
  };

  font-weight: ${(props) => (props.weight) ? props.weight : 400};
  font-size: ${FONT.size * 3.25}px;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};
  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  text-align: ${(props) => (props.align)};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '150%'
  };

  strong {
    font-weight: 700;
  }
`;
