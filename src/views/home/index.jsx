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
import {
  CardsContainer,
  ComponentCard,
  DifficultyMeter,
  Difficulty,
} from './styles';
// Get global styles
import {
  Page,
  Section,
  Text,
  Span,
  Img,
} from '../../helpers/global';

const renderDifficulty = (difficulty: Object) => {
  // eslint-disable-next-line
  let items = [];

  // eslint-disable-next-line
  for (let i = 1; i <= difficulty.value; i++) {
    items.push(
      <Difficulty key={i} bg={i} highlight={difficulty.value === i} />
    );
  }
  return (
    <DifficultyMeter>
      {items}
    </DifficultyMeter>
  );
};

/**
 * Renders each component card
 * @param {Object} comp
 */
const renderComponentCard = (comp: Object): React.Element<typeof Link> => (
  <Link to={comp.to} key={comp.name}>
    <ComponentCard>
      <Text alignCenter weightSemiBold textDark fontSize={20} logoFont>
        {comp.name}
      </Text>
      <Text
        marginTop={8}
        fontSize={16}
        lineHeight={140}
        textBase
        alignCenter
      >
        {comp.info}
      </Text>
      {renderDifficulty(comp.difficulty)}
      <Text
        fontSize={13}
        lineHeight={140}
        textPrimary
        alignCenter
        uppercase
        weightHeavy
      >
        {comp.difficulty.label}
      </Text>
    </ComponentCard>
  </Link>
);

/**
 * Renders Hero Section
 */
const renderHeroSection = (): React.Element<typeof Section> => (
  <Section
    bgGradient="45deg, #062849, #558EA6"
    padding="10rem 16.5% 0"
    alignCenter
  >
    <Img
      src="./assets/proponent-logo.svg"
      alt="Proponents"
      width={7}
      margin="0 auto 0.75rem"
    />
    <Text
      fontSize={18}
      lightOpacity="0.6"
      marginTop={24}
      marginCenter
      alignCenter
      width={85}
    >
      Proponents is a library with a collection of beautifully designed, user-experience centric components, built with <Span textWhite>ReactJS</Span> and <Span textWhite>styled-components</Span>.
    </Text>
    <CardsContainer padding="4rem 0 0" split="1fr 1fr 1fr" gap="1.5rem">
      {PROPONENTS.map((c) => renderComponentCard(c))}
    </CardsContainer>
  </Section>
);

const renderInfoSection = () => (
  <Section bg="#F2F3F7" padding="10rem 15%">
    <Text>Cool People</Text>
  </Section>
);

/**
 * Home Component
 */
const Home = (): React.Element<typeof Page> => (
  <Page bgGray>
    {renderHeroSection()}
    {renderInfoSection()}
  </Page>
);

// Export Home
export default Home;
