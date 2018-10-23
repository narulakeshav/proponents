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
    : (props.sameHeightChildren)
      ? 'stretch'
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
