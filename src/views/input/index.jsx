/**
 * @name: input.jsx
 * @desc: renders the input page which contains the
 * input element.
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import Button from '../../components/button';
import Input from '../../components/input';

// Get global styles
import { Page, Section, H4 } from '../../helpers/global';

/**
 * Local Variables
 */
type State = {
  input: string,
  bordered: boolean,
  errorMessage: string,
};

/**
 * InputPage Component
 */
class InputPage extends React.Component<null, State> {
  state = {
    input: '',
    bordered: false,
    errorMessage: '',
  };

  /**
   * Set the input value on change. Also, set the bordered
   * state to false when the user types.
   */
  onInputChange = (e: SyntheticKeyboardEvent<HTMLInputElement>): void => {
    this.setState({
      input: e.currentTarget.value
    }, () => {
      if (this.state.input.trim() !== '') {
        this.setState({
          bordered: false
        });
      }
    });
  }

  /**
   * If input value is empty, show error.
   * Else, proceed to show success alert
   *
   * @TODO: Show success alert
   */
  onButtonSubmit = (): void => {
    if (this.state.input.trim() === '') {
      this.setState({
        bordered: true,
        errorMessage: 'Please add your first name.'
      }, () => {
        if (this.input) {
          this.input.focus();
        }
      });
    }
  }

  // Input Ref
  input: ?HTMLInputElement;

  // Render
  render(): React.Element<typeof Page> {
    return (
      <Page bgGray>
        <Section padding="8rem 20%">
          <H4 textLighter logoFont>Input Proponent</H4>
          <Input
            width={400}
            inline
            margin="0 1rem 0.5rem 0"
            hasLabel
            label="First Name"
            hasIcon
            iconName="account_circle"
            split="1fr 15fr"
            placeholder="First Name"
            inputValue={this.state.input}
            inputChange={this.onInputChange}
            inputRef={(field) => this.input = field}
            hasError={this.state.bordered}
            errorMessage={this.state.errorMessage}
          />
          <Button
            bgDark
            textWhite
            weightBold
            noMargin
            onClick={this.onButtonSubmit}
          >
            Submit Form
          </Button>
        </Section>
      </Page>
    );
  }
}

// Export Input Page
export default InputPage;
