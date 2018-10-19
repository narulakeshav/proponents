/**
 * External Dependencies
 */
import styled from 'styled-components';

/**
 * Internal Dependencies
 */
import { COLORS, SCHEME, FONT } from '../../helpers/variables';

/**
 * Button Component
 * @type button
 *
 * @prop {boolean} bg: [primary|secondary|dark|primaryLight|white|transparent]
 * @prop {boolean} weight: [heavy|bold|semibold|normal|light]
 * @prop {boolean} shadow: add shadow to button?
 * @prop {boolean} rounded: add roundness to the button?
 * @prop {boolean} aspectLocked: make height = width?
 * @prop {boolean} marginTop: add margin to top?
 * @prop {boolean} marginBottom: add margin to bottom?
 * @prop {boolean} marginLeft: add margin to left?
 * @prop {boolean} marginRight: add margin to right?
 * @prop {boolean} sizeLarge: make the button larger?
 * @prop {boolean} sizeSmall: make the button smaller?
 * @prop {boolean} fullWidth: use 100% available width for button?
 * @prop {boolean} noPadding: remove all padding from button?
 * @prop {boolean} uppercase: use UPPERCASE for btn text?
 * @prop {number} fontSize: sets font-size to this if provided
 * @prop {boolean} iconLeft: has icon on the left?
 * @prop {boolean} iconRight: has icon on the right?
 * @prop {number} iconSize: set icon size
 */
export const Button = styled.button`
  display: inline-block;
  background: ${(props) => ((props.bgPrimary)
    ? SCHEME.primary
    : (props.bgSecondary)
      ? SCHEME.secondary
      : (props.bgDark)
        ? SCHEME.dark
        : (props.bgPrimaryLight)
          ? SCHEME.primaryLight
          : (props.bgWhite)
            ? COLORS.white
            : (props.bgTransparent)
              ? 'transparent'
              : SCHEME.gray
  )};
  border: none;
  box-shadow: ${(props) => (props.shadow)
    ? '0 2px 4px rgba(0,0,0,0.1)'
    : 'none'
};
  border-radius: ${(props) => (props.rounded) ? '40px' : '4px'};
  margin-right: ${(props) => (props.marginRight) ? '8px' : '0'};
  margin-left: ${(props) => (props.marginLeft) ? '8px' : '0'};
  margin-top: ${(props) => (props.marginTop) ? '8px' : '0'};
  margin-bottom: ${(props) => (props.marginBottom) ? '8px' : '0'};
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
  font: ${(props) => (props.weightHeavy || props.uppercase || props.sizeLarge)
    ? '800'
    : (props.weightSemiBold)
      ? '600'
      : (props.weightNormal)
        ? '400'
        : (props.weightLight)
          ? '300'
          : '700'
} ${(props) => (props.fontSize)
  ? `${props.fontSize}px`
  : (props.sizeLarge)
    ? `${FONT.size - 3}px`
    : (props.sizeSmall)
      ? `${FONT.size - 5}px`
      : `${FONT.size - 4}px`
} ${FONT.family};
  color: ${(props) => ((props.textPrimary)
    ? SCHEME.primary
    : (props.textSecondary)
      ? SCHEME.secondary
      : (props.textDark)
        ? SCHEME.dark
        : (props.textDarker)
          ? COLORS.darker
          : (props.textPrimaryLight)
            ? SCHEME.primaryLight
            : (props.textWhite)
              ? COLORS.white
              : (props.textLight)
                ? COLORS.light
                : SCHEME.gray
  )};
  cursor: pointer;
  transition: 0.25s all ease-in-out;
  text-transform: ${(props) => (props.uppercase) ? 'uppercase' : 'none'};
  line-height: 1px;

  i {
  position: relative;
  top: ${(props) => (props.iconTop)
    ? `${props.iconTop}px`
    : '0'
};
    font-weight: ${(props) => (props.sizeLarge) ? '900' : '400'};
    font-size: ${(props) => (props.iconSize) ? `${props.iconSize}px` : '16px'};
    margin-right: ${(props) => (props.iconLeft) ? '8px' : '0'};
  margin-left: ${(props) => (props.iconRight) ? '8px' : '0'};
  transition: 0.15s all ease-in;
  }

  &:hover {
  opacity: 0.9;

  i {
    transform: ${(props) => (props.iconRight)
    ? 'translateX(2px)'
    : 'none'
};
  }
  }

  @media screen and (max-width: 925px) {
  width: ${(props) => (!props.aspectLocked)
    ? '100%'
    : 'default'
};
  width: ${(props) => (props.sizeSmall && props.aspectLocked)
    ? '45px'
    : (props.aspectLocked)
      ? '50px'
      : '100%'
};
  height: ${(props) => (props.sizeSmall)
    ? '45px'
    : (props.sizeLarge)
      ? '60px'
      : (props.noPadding)
        ? 'auto'
        : '50px'
};
  margin: ${(props) => (!props.aspectLocked)
    ? '0.25rem 0'
    : 'default'
};
  }
`;
