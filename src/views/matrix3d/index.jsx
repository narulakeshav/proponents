/**
 * @flow
 *
 * External Dependencies
 */
import * as React from 'react';

/**
 * Internal Dependencies
 */
import {
  Page,
  Section,
  H4,
  Text,
  Code,
} from '../../helpers/global';
import { TabGroup, TabSelector, ContentWell, SectionContent } from './styles';

/**
 * Local Variables
 */
type Props = {};
type State = {
  selectedTab: number
};

/**
 * Matrix3D Component
 */
class Matrix3D extends React.Component<Props, State> {
  state = {
    selectedTab: 1,
  };

  onSeletTab = (e: SyntheticEvent<HTMLButtonElement>) => {
    const tab = parseInt(e.currentTarget.getAttribute('data-tab'));
    this.setState({
      selectedTab: tab
    });
  }

  /**
   * Renders Component List
   */
  renderComponentList = (): React.Element<typeof Section> => (
    <Section padding="8rem 20%">
      <H4 textLighter logoFont>Matrix3D animations</H4>
      <TabGroup>
        <TabSelector
          bgTransparent
          sizeSmall
          textLight
          marginRight
          noPadding
          weightNormal
          fontSize={15}
          className={(this.state.selectedTab === 1) ? 'active' : ''}
          data-tab={1}
          onClick={this.onSeletTab}
        >
          LeBron James
        </TabSelector>
        <TabSelector
          bgTransparent
          sizeSmall
          textLight
          marginRight
          noPadding
          weightNormal
          fontSize={15}
          className={(this.state.selectedTab === 2) ? 'active' : ''}
          data-tab={2}
          onClick={this.onSeletTab}
        >
          Brandon Ingram
        </TabSelector>
        <TabSelector
          bgTransparent
          sizeSmall
          textLight
          marginRight
          noPadding
          weightNormal
          fontSize={15}
          className={(this.state.selectedTab === 3) ? 'active' : ''}
          data-tab={3}
          onClick={this.onSeletTab}
        >
          Lonzo Ball
        </TabSelector>
        <TabSelector
          bgTransparent
          sizeSmall
          textLight
          marginRight
          noPadding
          weightNormal
          fontSize={15}
          className={(this.state.selectedTab === 4) ? 'active' : ''}
          data-tab={4}
          onClick={this.onSeletTab}
        >
          Kyle Kuzma
        </TabSelector>
      </TabGroup>
      <ContentWell>
        <SectionContent
          data-key="1"
          className={`${(this.state.selectedTab === 1) ? 'well selected' : 'well absolute'}`}
          display={this.state.selectedTab === 1}
        >
          <Text fontSize={20}>
            This is a matrix3D animation done using <Code>1()</Code> animation property.
          </Text>
        </SectionContent>
        <SectionContent
          data-key="2"
          className={`${(this.state.selectedTab === 2) ? 'well selected' : 'well absolute'}`}
          display={this.state.selectedTab === 2}
        >
          <Text fontSize={20}>
            This is a matrix3D animation done using <Code>2()</Code> animation property.
          </Text>
        </SectionContent>
        <SectionContent
          data-key="3"
          className={`${(this.state.selectedTab === 3) ? 'well selected' : 'well absolute'}`}
          display={this.state.selectedTab === 3}
        >
          <Text fontSize={20}>
            This is a matrix3D animation done using <Code>3()</Code> animation property.
          </Text>
        </SectionContent>
        <SectionContent
          data-key="4"
          className={`${(this.state.selectedTab === 4) ? 'well selected' : 'well absolute'}`}
          display={this.state.selectedTab === 4}
        >
          <Text fontSize={20}>
            This is a matrix3D animation done using <Code>4()</Code> animation property.
          </Text>
        </SectionContent>
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
