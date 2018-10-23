/**
 * @name: input.jsx
 * @desc: Renders input component
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import {
  InputContainer,
  InputComponent,
  InputEl,
  IconEl,
  LabelEl
} from './styles';
import { P } from '../text/styles';

/**
 * Local Variables
 */
type Props = {
  width?: number,
  margin?: string,
  inline?: boolean,
  hasLabel?: boolean,
  hasIcon?: boolean,
  label?: string | null,
  iconName?: string | null,
  inputValue: string,
  inputChange: Function,
  inputRef: Function,
  placeholder: string,
  hasError?: boolean,
  errorMessage?: string | null,
};

/**
 * Render Label Element
 * @param {Props} props
 */
const Label = (props: Object): React.Element<typeof LabelEl> => (
  <LabelEl>{props.label}</LabelEl>
);

/**
 * Render Error Message if there's an error
 * @param {Props} props
 */
const ErrorMessage = (props: Object): React.Element<typeof P> | string => (
  (props.hasError)
    ? <P fontSize={16} textError>{props.errorMessage}</P>
    : ''
);

/**
 * Render Icon Element
 * @param {Props} props
 */
const Icon = (props: Object): React.Element<typeof IconEl> => (
  <IconEl className="material-icons" error={props.hasError}>
    {props.iconName}
  </IconEl>
);

/**
 * Render Input Element
 * @param {Props} props
 */
const Input = (props: Object): React.Element<typeof InputEl> => (
  <InputEl
    placeholder={props.placeholder}
    value={props.inputValue}
    onChange={props.inputChange}
    innerRef={props.inputRef}
  />
);

/**
 * Render the Input Proponent
 * @param {Props} props
 */
const InputProponent = (props: Props): React.Element<typeof InputContainer> => (
  <InputContainer {...props}>
    {(props.hasLabel) ? Label(props) : ''}
    <InputComponent {...props} bordered={props.hasError}>
      {(props.hasIcon) ? Icon(props) : ''}
      {Input(props)}
    </InputComponent>
    {ErrorMessage(props)}
  </InputContainer>
);

// Default Props
InputProponent.defaultProps = {
  width: 400,
  margin: '0 0 0.5rem',
  inline: false,
  hasLabel: false,
  hasIcon: false,
  label: null,
  iconName: null,
  hasError: false,
  errorMessage: null,
};

// Export InputProponent
export default InputProponent;
