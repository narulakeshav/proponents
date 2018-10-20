/**
 * @name: input.jsx
 * @desc: renders the input page which contains the
 * input element.
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/duotoneLight';

/**
 * Internal Dependencies
 */
// Page styles
import {
  TabGroup,
  TabSelector,
  ContentWell,
  SectionContent,
  Pre,
  LineNo,
} from './styles';

// Global styles
import { Section } from '../../helpers/global';

/**
 * Local Variables
 */
/* eslint-disable */
type Props = {
  js: string,
  styles: string
};

/* eslint-enable */

type State = {
  selectedTab: number
};

class CodeSwitcher extends React.Component<Props, State> {
  state = {
    selectedTab: 1
  };

  onSelectTab = (e: SyntheticEvent<HTMLButtonElement>): void => {
    const tab = e.currentTarget.getAttribute('data-tab');
    this.setState({
      selectedTab: parseInt(tab)
    });
  }

  /**
   * Renders a tab item
   * @param {position} tab: position in the list. The left-most
   * tab has the position 1.
   * @param {string} label
   */
  renderTab = (position: number, label: string): React.Element<typeof TabSelector> => (
    <TabSelector
      bgTransparent
      sizeSmall
      textLight
      marginRight
      noPadding
      weightNormal
      fontSize={15}
      className={(this.state.selectedTab === position) ? 'active' : ''}
      data-tab={position}
      onClick={this.onSelectTab}
    >
      {label}
    </TabSelector>
  );

  /**
   * Renders the content for the tab
   * @param {number} position
   * @param {string} text
   */
  renderTabContent = (position: number, type: string): React.Element<SectionContent> => {
    const { js, styles } = this.props;
    const { selectedTab } = this.state;
    const content = (type === 'js') ? js : styles;

    return (
      <SectionContent
        data-key={position.toString()}
        className={`${(selectedTab === position) ? 'well selected' : 'well absolute'}`}
        display={selectedTab === position}
      >
        <Highlight
          {...defaultProps}
          theme={theme}
          code={content}
          language="js"
          data-key={position.toString()}
          className={`${(selectedTab === position) ? 'well selected' : 'well absolute'}`}
          display={selectedTab === position}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
                </div>
            ))}
            </Pre>
        )}
        </Highlight>
      </SectionContent>
    );
  };

  // Render
  render() {
    return (
      <Section padding="0">
        <TabGroup>
          {this.renderTab(1, 'React')}
          {this.renderTab(2, 'Styles')}
        </TabGroup>
        <ContentWell>
          {this.renderTabContent(1, 'js')}
          {this.renderTabContent(2, 'styles')}
        </ContentWell>
      </Section>
    );
  }
}

export default CodeSwitcher;
