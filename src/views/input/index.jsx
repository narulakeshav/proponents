/**
 * @flow
 *
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import Button from '../../components/button';
import { Page, Section, H4, Text } from '../../helpers/global';
import { InputContainer, Icon, Input, Label } from './styles';

/**
 * Local Variables
 */
type Props = {};
type State = {
  input: string,
  bordered: boolean,
  errorMessage: string,
};

/**
 * Input Component
 */
class InputComponent extends React.Component<Props, State> {
  state = {
    input: '',
    bordered: false,
    errorMessage: '',
  };

  onInputChange = (e: SyntheticKeyboardEvent<HTMLInputElement>) => {
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

  onButtonSubmit = () => {
    const { input } = this.state;

    if (input.trim() === '') {
      this.setState({
        bordered: true,
        errorMessage: 'Please add your first name.'
      }, () => {
        if (this.input) {
          this.input.focus();
        }
      });
    } else {
      alert('Got it.');
    }
  }

  input: ?HTMLInputElement;

  // Render
  render(): React.Element<typeof Page> {
    return (
      <Page bgGray>
        <Section padding="8rem 20%">
          <H4 textLighter logoFont>Input Proponent</H4>
          <Label>First Name</Label>
          <InputContainer split="1fr 15fr" bordered={this.state.bordered}>
            <Icon className="material-icons" error={this.state.bordered}>
              account_box
            </Icon>
            <Input
              placeholder="First Name"
              value={this.state.input}
              onChange={this.onInputChange}
              innerRef={(field) => this.input = field}
            />
          </InputContainer>
          <Button
            marginLeft
            bgDark
            textWhite
            weightBold
            onClick={this.onButtonSubmit}
          >
            Submit Form
          </Button>
          {(this.state.bordered)
            ? <Text fontSize={16} textError>{this.state.errorMessage}</Text>
            : ''
          }
        </Section>
      </Page>
    );
  }
}

// Export Input
export default InputComponent;
