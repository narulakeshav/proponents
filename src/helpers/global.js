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
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import { COLORS, SCHEME, FONT, ACTIONS } from './variables';

/**
 * Exporting Styled Components
 */

/**
 * Page Component
 * @type Div
 *
 * @prop {boolean} bgGradientDark: add dark gradient to background?
 * @prop {boolean} bgGradientLight: add light gradient to background?
 * @prop {boolean} bgGray: add gray as background?
 * @prop {boolean} bgDark: add dark as background?
 * @prop {string} bg: custom HEXCODE (#FFFFFF)
 * @prop {string} padding: adds padding to page
 */
export const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background: ${(props) => (props.bgWhite)
    ? COLORS.white
    : SCHEME.gray
  };
  padding: ${(props) => (props.padding)
    ? props.padding
    : '2rem 0 0'
  };
  transition: 0.25s all ease-in;
  animation: slideUp 0.25s ease-in forwards;

  @keyframes slideUp {
    from {
      -webkit-transform: translateY(2.5%);
      transform: translateY(2.5%);
      opacity: 0;
    }
    to {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

/**
 * Link Component
 * @type Link
 */
export const LinkTag = styled(Link)`
  color: ${SCHEME.primary};
`;

/** ************************************************/
/** ***************** DIV STYLING *****************/
/** ************************************************/
/**
 * Section Component
 * @type Section
 *
 * @prop {string} bg: custom HEXCODE (#FFFFFF)
 * @prop {string} bgMobile: custom HEXCODE for mobile(#FFFFFF)
 * @prop {string} bgURL: use background image?
 * @prop {string} bgGradient: use gradient for background?
 * @prop {boolean} borderTop: adds a border top
 * @prop {boolean} fullHeight: match section height to screen size?
 * @prop {boolean} alignCenter: align text to center?
 * @prop {boolean} alignRight: align text to right?
 * @prop {boolean} borderRight: add border right?
 * @prop {string} padding: add padding to section
 * @prop {string} mobilePadding: add padding to section (on mobile)
 * @prop {string} tabletPadding: add padding to section (on tablets)
 */
export const Section = styled.section`
  background: ${(props) => (props.bg && props.bgURL)
    ? `url(${props.bgURL}), ${props.bg}`
    : (props.bgGradient && props.bgURL)
      ? `url(${props.bgURL}), linear-gradient(${props.bgGradient})`
      : (props.bg)
        ? props.bg
        : (props.bgURL)
          ? `url(${props.bgURL}) no-repeat`
          : (props.bgGradient)
            ? `linear-gradient(${props.bgGradient})`
            : 'none'
  };
  background-size: cover;
  background-position: fixed;
  background-repeat: no-repeat;
  border-top: ${(props) => (props.borderTop)
    ? (props.bg === '#FFFFFF')
      ? '1px solid #EDEFF5'
      : '1px solid #E4E5E9'
    : 'none'
  };
  border-radius: ${(props) => (props.borderRadius)
    ? `${props.borderRadius}px`
    : '0'
  };
  height: ${(props) => (props.fullHeight) ? '100vh' : 'auto'};
  text-align: ${(props) => (props.alignCenter)
    ? 'center'
    : (props.alignRight)
      ? 'right'
      : 'left'
  };
  border-right: ${(props) => (props.borderRight)
    ? `1px solid ${SCHEME.gray}`
    : 'none'
  };
  padding: ${(props) => (props.padding) ? props.padding : '0'};

  @media screen and (max-width: 1280px) {
    padding: ${(props) => (props.tabletPadding)
      ? props.tabletPadding
      : props.padding
    };
  }

  @media screen and (max-width: 925px) {
    background: ${(props) => (props.bgMobile)
      ? props.bgMobile
      : (props.bgGradient)
        ? `linear-gradient(${props.bgGradient})`
        : (props.bg)
          ? props.bg
          : 'none'
    };

    padding: ${(props) => (props.mobilePadding)
      ? props.mobilePadding
      : props.padding
    };
  }
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
  padding: ${(props) => (props.padding) ? props.padding : '0'};
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
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const H1 = styled.h1`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textBase)
                ? COLORS.base
                : (props.darkOpacity)
                  ? `rgba(0,0,0,${props.darkOpacity})`
                  : (props.lightOpacity)
                    ? `rgba(255,255,255,${props.lightOpacity})`
                    : COLORS.dark
  };

  font: ${(props) => (props.weightBold)
    ? '700'
    : (props.weightSemiBold)
      ? '600'
      : (props.weightNormal)
        ? '400'
        : (props.weightLight)
          ? '300'
          : '800'
  } ${FONT.size * 3.25}px ${(props) => (props.logoFont)
    ? 'Carter One'
    : FONT.family
  };
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };

  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  span {
    font-weight: ${(props) => (props.weightBold)
      ? '700'
      : (props.weightSemiBold)
        ? '600'
        : (props.weightNormal)
          ? '400'
          : (props.weightLight)
            ? '300'
            : '800'
    };
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 2.5}px;
  }
`;

/**
 * H2 Component
 * @type h2
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const H2 = styled.h2`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textBase)
                ? COLORS.base
                : (props.darkOpacity)
                  ? `rgba(0,0,0,${props.darkOpacity})`
                  : (props.lightOpacity)
                    ? `rgba(255,255,255,${props.lightOpacity})`
                    : COLORS.dark
  };

  font: ${(props) => (props.weightHeavy)
    ? '800'
    : (props.weightSemiBold)
      ? '600'
      : (props.weightNormal)
        ? '400'
        : (props.weightLight)
          ? '300'
          : '700'
  } ${FONT.size * 2.75}px ${(props) => (props.logoFont)
    ? 'Carter One'
    : FONT.family
  };
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };
  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '16px' : '0'};

  span {
    font-weight: ${(props) => (props.weightHeavy)
      ? '800'
      : (props.weightSemiBold)
        ? '600'
        : (props.weightNormal)
          ? '400'
          : (props.weightLight)
            ? '300'
            : '700'
    };
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 2}px;
  }
`;

/**
 * H3 Component
 * @type h3
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const H3 = styled.h3`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textBase)
                ? COLORS.base
                : (props.darkOpacity)
                  ? `rgba(0,0,0,${props.darkOpacity})`
                  : (props.lightOpacity)
                    ? `rgba(255,255,255,${props.lightOpacity})`
                    : COLORS.dark
  };

  font: ${(props) => (props.weightHeavy)
    ? '800'
    : (props.weightSemiBold)
      ? '600'
      : (props.weightNormal)
        ? '400'
        : (props.weightLight)
          ? '300'
          : '700'
  } ${FONT.size * 2}px ${(props) => (props.logoFont)
    ? 'Carter One'
    : FONT.family
  };

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };

  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  span {
    font-weight: ${(props) => (props.weightHeavy)
      ? '800'
      : (props.weightSemiBold)
        ? '600'
        : (props.weightNormal)
          ? '400'
          : (props.weightLight)
            ? '300'
            : '700'
    };
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 1.75}px;
  }
`;

/**
 * H4 Component
 * @type h4
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const H4 = styled.h4`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textBase)
                ? COLORS.base
                : (props.darkOpacity)
                  ? `rgba(0,0,0,${props.darkOpacity})`
                  : (props.lightOpacity)
                    ? `rgba(255,255,255,${props.lightOpacity})`
                    : COLORS.dark
  };

  font: ${(props) => (props.weightHeavy)
    ? '800'
    : (props.weightBold)
      ? '700'
      : (props.weightNormal)
        ? '400'
        : (props.weightLight)
          ? '300'
          : '600'
  } ${FONT.size * 1.5}px ${(props) => (props.logoFont)
    ? 'Carter One'
    : FONT.family
  };

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };

  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  span {
    font-weight: ${(props) => (props.weightHeavy)
      ? '800'
      : (props.weightBold)
        ? '700'
        : (props.weightNormal)
          ? '400'
          : (props.weightLight)
            ? '300'
            : '600'
    };
  }

  @media screen and (max-width: 925px) {
    font-size: ${FONT.size * 1.5}px;
  }
`;

/**
 * H5 Component
 * @type h5
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const H5 = styled.h5`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textBase)
                ? COLORS.base
                : (props.darkOpacity)
                  ? `rgba(0,0,0,${props.darkOpacity})`
                  : (props.lightOpacity)
                    ? `rgba(255,255,255,${props.lightOpacity})`
                    : COLORS.dark
  };

  font: ${(props) => (props.weightHeavy)
    ? '800'
    : (props.weightBold)
      ? '700'
      : (props.weightNormal)
        ? '400'
        : (props.weightLight)
          ? '300'
          : '600'
  } ${FONT.size * 1.25}px ${(props) => (props.logoFont)
    ? 'Carter One'
    : FONT.family
  };

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '100%'
  };

  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  span {
    font-weight: ${(props) => (props.weightHeavy)
      ? '800'
      : (props.weightBold)
        ? '700'
        : (props.weightNormal)
          ? '400'
          : (props.weightLight)
            ? '300'
            : '600'
    };
  }
`;

/**
 * Text Component
 * @type p (paragraph)
 *
 * @prop {boolean} text:
 * [primary|secondary|gray|white|lighter|light|dark|error|success|warning|info|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 * @prop {number} fontSize: set font-size to this if provided
 * @prop {number} lineHeight: set line-height to this if provided
 * @prop {number} width: set width to this if provided
 * @prop {boolean} alignCenter: align <p> to center?
 * @prop {boolean} alignRight: align <p> to right?
 * @prop {boolean} marginCenter: set <p> center, horizontally?
 * @prop {boolean} marginTop: add margin to top?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const Text = styled.p`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textDark)
                ? COLORS.dark
                : (props.textError)
                  ? ACTIONS.error
                  : (props.textSuccess)
                    ? ACTIONS.success
                    : (props.textWarning)
                      ? ACTIONS.warning
                      : (props.textInfo)
                        ? ACTIONS.info
                        : (props.darkOpacity)
                          ? `rgba(0,0,0,${props.darkOpacity})`
                          : (props.lightOpacity)
                            ? `rgba(255,255,255,${props.lightOpacity})`
                            : COLORS.base
  };

  font-weight: ${(props) => (props.weightHeavy)
    ? '800'
    : (props.weightBold)
      ? '700'
      : (props.weightSemiBold)
        ? '600'
        : (props.weightLight)
          ? '300'
          : '400'
  };
  font-size: ${(props) => (props.fontSize)
    ? `${props.fontSize}px`
    : `${FONT.size}px`
  };
  font-family: ${(props) => (props.logoFont)
    ? 'Carter One'
    : FONT.family
  };

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};

  line-height: ${(props) => (props.lineHeight)
    ? `${props.lineHeight}%`
    : '150%'
  };

  width: ${(props) => (props.width) ? `${props.width}%` : 'auto'};

  text-align: ${(props) => (props.alignCenter)
    ? 'center'
    : (props.alignRight)
      ? 'right'
      : 'left'
  };
  margin: ${(props) => (props.marginCenter) ? '0 auto' : '0'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};

  strong {
    font-weight: 700;
  }

  span {
    font-weight: ${(props) => (props.weightHeavy)
      ? '800'
      : (props.weightBold)
        ? '700'
        : (props.weightSemiBold)
          ? '600'
          : (props.weightLight)
            ? '300'
            : '400'
    };
  }

  a {
    color: ${SCHEME.primary};
  }

  @media screen and (max-width: 925px) {
    width: ${(props) => (props.mobileWidth)
      ? `${props.mobileWidth}%`
      : '100%'
    };
  }
`;

/**
 * Span Component
 * @type Span
 *
 * @prop {boolean} text: [primary|secondary|gray|white|lighter|light|base]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} uppercase: set case to UPPERCASE?
 * @prop {boolean} italic: set case to italic?
 * @prop {boolean} marginBottom: add margin to bottom?
 */
export const Span = styled.span`
  color: ${(props) => (props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textGray)
        ? SCHEME.gray
        : (props.textWhite)
          ? COLORS.white
          : (props.textLighter)
            ? COLORS.lighter
            : (props.textLight)
              ? COLORS.light
              : (props.textDark)
                ? COLORS.dark
                : (props.darkOpacity)
                  ? `rgba(0,0,0,${props.darkOpacity})`
                  : (props.lightOpacity)
                    ? `rgba(255,255,255,${props.lightOpacity})`
                    : COLORS.base
  };
  font-weight: ${(props) => (props.weightHeavy)
    ? '800'
    : (props.weightBold)
      ? '700'
      : (props.weightSemiBold)
        ? '600'
        : (props.weightLight)
          ? '300'
          : '400'
  };

  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  font-style: ${(props) => (props.italic) ? 'italic' : 'none'};
`;


/**
 * Img Component
 * @type img
 *
 * @prop {string} display: [block|inline|inline-block]
 * @prop {string} padding: adds padding to image
 * @prop {number} width: set width for image
 * @prop {number} mobileWidth: set width for image in mobile
 * @prop {string | boolean} margin = string; margin[Direction] = boolean
 * @prop {string} mobileMargin: adds margin on mobile
 * @prop {boolean} float: [left|right]
 * @prop {boolean} rounded: makes the image round
 * @prop {boolean} mobileNoDisplay: do not show on mobile
 */
export const Img = styled.img`
  display: ${(props) => (props.display)
    ? props.display
    : 'inline-block'
  };

  padding: ${(props) => (props.padding)
    ? props.padding
    : '0'
  };

  width: ${(props) => (props.width && typeof props.width === 'number')
    ? `${props.width}%`
    : (props.width && typeof props.width === 'string')
      ? `${props.width}px`
      : 'auto'
  };

  height: ${(props) => (props.height)
    ? `${props.height}px`
    : 'auto'
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

  filter: ${(props) => (props.grayscale)
    ? 'grayscale(100%)'
    : 'none'
  };

  @media screen and (max-width: 925px) {
    display: ${(props) => (props.mobileNoDisplay)
      ? 'none'
      : (props.display)
        ? props.display
        : 'inline-block'
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

/**
 * Code component
 * @type code
 */
export const Code = styled.code`
  background: ${SCHEME.primaryLight};
  color: ${SCHEME.primary};
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: 600;
  font-family: Inconsolata;
`;
