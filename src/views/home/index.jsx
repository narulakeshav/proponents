/**
 * @name: home.jsx
 * @desc: rendes home page with links to all
 * proponents.
 *
 * @flow
 * External Dependencies
 */
import * as React from 'react';
import { Link } from 'react-router-dom';

/**
 * Internal Dependencies
 */
import PROPONENTS from '../../helpers/proponentList';
import { CardsContainer, ComponentCard } from './styles';
// Get global styles
import {
  Page,
  Section,
  H1,
  H5,
  Text,
  Img,
  Code
} from '../../helpers/global';

/**
 * Renders each component card
 * @param {Object} comp
 */
const renderComponentCard = (comp: Object): React.Element<typeof Link> => (
  <Link to={comp.to} key={comp.name}>
    <ComponentCard>
      <Text alignCenter weightSemiBold textBase fontSize={20} logoFont>
        {comp.name}
      </Text>
    </ComponentCard>
  </Link>
);

/**
 * Renders Hero Section
 */
const renderHeroSection = (): React.Element<typeof Section> => (
  <Section bg="#FFFFFF" padding="7rem 20% 9rem" alignCenter>
    <Img
      src="./assets/proponent-logo.svg"
      alt="Proponents"
      width={8}
      margin="0 auto 0.5rem"
    />
    <H1 marginBottom logoFont>proponents</H1>
    <Text textLight marginCenter alignCenter width={85}>
      Proponents is a library with a collection of beautifully designed, user-experience centric components, built with <Code>ReactJS</Code> and <Code>styled-components</Code>.
    </Text>
  </Section>
);

/**
 * Renders Component List
 */
const renderComponentList = (): React.Element<typeof Section> => (
  <Section padding="8rem 20%">
    <H5 textLighter weightHeavy>Components ({PROPONENTS.length})</H5>
    <CardsContainer padding="4rem 0" split="1fr 1fr 1fr" gap="2rem">
      {PROPONENTS.map((c) => renderComponentCard(c))}
    </CardsContainer>
  </Section>
);

/**
 * Home Component
 */
const Home = (): React.Element<typeof Page> => (
  <Page bgGray>
    {renderHeroSection()}
    {renderComponentList()}
  </Page>
);

// Export Home
export default Home;
