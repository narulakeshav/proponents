/**
 * @name: matrix3d.jsx
 * @desc: renders component which uses css transition property
 * matrix3d. This was inspired from Stripe.
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
// Page styles
import {
  TabGroup,
  TabSelector,
  ContentWell,
  SectionContent
} from './styles';

// Global styles
import { Page, Section, H4, Text } from '../../helpers/global';

/**
 * Local Variables
 */
type State = {
  selectedTab: number
};

/**
 * Matrix3D Component
 */
class Matrix3D extends React.Component<null, State> {
  state = {
    selectedTab: 1,
  };

  /**
   * Makes the clicked tab active (selected)
   */
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
  renderTabContent = (position: number, text: string): React.Element<SectionContent> => {
    const { selectedTab } = this.state;
    return (
      <SectionContent
        data-key={position.toString()}
        className={`${(selectedTab === position) ? 'well selected' : 'well absolute'}`}
        display={selectedTab === position}
      >
        <Text fontSize={20}>{text}</Text>
      </SectionContent>
    );
  }

  /**
   * Renders Component List
   */
  renderComponentList = (): React.Element<typeof Section> => (
    <Section padding="8rem 20%">
      <H4 textLighter logoFont>Matrix3D animations</H4>
      <TabGroup>
        {this.renderTab(1, 'LeBron James')}
        {this.renderTab(2, 'Kobe Bryant')}
        {this.renderTab(3, 'Michael Jordan')}
        {this.renderTab(4, 'Magic Johnson')}
      </TabGroup>
      <ContentWell>
        {this.renderTabContent(1, 'I am LeBron James from the LA Lakers.')}
        {this.renderTabContent(2, 'I am Kobe Bryant from the LA Lakers.')}
        {this.renderTabContent(3, 'I am Michael Jordan from the Chicago Bulls.')}
        {this.renderTabContent(4, 'I am Magic Johnson from the LA Lakers.')}
      </ContentWell>
    </Section>
  );

  // Render
  render(): React.Element<typeof Page> {
    return (
      <Page bgGray>
        {this.renderComponentList()}
      </Page>
    );
  }
}

// Export Matrix3D
export default Matrix3D;
