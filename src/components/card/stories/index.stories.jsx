/**
 * External Dependencies
 */
import React from 'react';
import { storiesOf } from '@storybook/react';

/**
 * Internal Dependencies
 */
import Card from '../index';
import Row from '../../row';
import Image from '../../image';
import { Heading, Text } from '../../text';

/**
 * Local Variables
 */
const cardStory = storiesOf('Cards', module);

// Default Card
cardStory.add('Default Card', () => (
  <Row split="1fr" gap="2rem" padding="4rem 12.5%">
    <Card padding="2rem" radius="10px">
      <Heading h5 weight={800} lineHeight={120}>
        How to Publish an npm package
      </Heading>
      <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
        For those who don't know, npm, also known as node package manager is a package manager where people publish their libraries.
      </Text>
    </Card>
  </Row>
));

// White Card
cardStory.add('White Card', () => (
  <Row split="1fr" gap="2rem" padding="4rem 12.5%">
    <Card bg="white" padding="2rem" radius="10px">
      <Heading h5 weight={800} lineHeight={120}>
        How to Publish an npm package
      </Heading>
      <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
        For those who don't know, npm, also known as node package manager is a package manager where people publish their libraries.
      </Text>
    </Card>
  </Row>
));

// Multiple Cards
cardStory.add('Cards in Row', () => (
  <Row split="1fr 1fr" gap="2rem" padding="4rem 12.5%" sameHeightChildren>
    <Card padding="2rem" radius="10px">
      <Heading h5 weight={800} lineHeight={120}>
        How to Publish an npm package
      </Heading>
      <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
        For those who don't know, npm, also known as node package manager is a package manager where people publish their libraries.
      </Text>
    </Card>
    <Card bg="white" padding="2rem" radius="10px">
      <Heading h5 weight={800} lineHeight={120}>
        How to Publish an npm package
      </Heading>
      <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
        For those who don't know, npm, also known as node package manager is a package manager where people publish their libraries.
      </Text>
    </Card>
  </Row>
));

// Same Height
cardStory.add('Same Height', () => (
  <Row split="1fr" gap="2rem" padding="2rem">
    <Row split="1fr 1fr" gap="2rem" padding="1rem 12.5% 0">
      <Card padding="2rem" radius="10px">
        <Heading h5 weight={800} lineHeight={120}>
          No Prop of sameHeightChildren
        </Heading>
        <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
          With this prop, the children of row makes all the height of the content same.
        </Text>
      </Card>
      <Card bg="white" padding="2rem" radius="10px">
        <Heading h5 weight={800} lineHeight={120}>
          How to Publish an npm package
        </Heading>
        <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
          For those who don't know, npm, also known as node package manager is a package manager where people publish their libraries.
        </Text>
      </Card>
    </Row>
    <Row split="1fr 1fr" gap="2rem" padding="1rem 12.5% 0" sameHeightChildren>
      <Card padding="2rem" radius="10px">
        <Heading h5 weight={800} lineHeight={120}>
          sameHeightChildren
        </Heading>
        <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
          In this row, children are set to have same height, despite of inner content.
        </Text>
      </Card>
      <Card bg="white" padding="2rem" radius="10px">
        <Heading h5 weight={800} lineHeight={120}>
          How to Publish an npm package
        </Heading>
        <Text lineHeight={140} color="base" fontSize={16} marginBottom="0">
          For those who don't know, npm, also known as node package manager is a package manager where people publish their libraries.
        </Text>
      </Card>
    </Row>
  </Row>
));

// Cards with Content
cardStory.add('Cards with Image', () => (
  <Row split="1fr 1fr 1fr" gap="2rem" padding="4rem 12.5%" sameHeightChildren>
    <Card padding="1rem" radius="10px">
      <Image
        src="https://i.imgur.com/VngE8Bf.jpg"
        radius="10px"
        alt="Layout"
        margin="0 auto 1rem"
      />
      <Heading h5 weight={800}>Typography</Heading>
      <Text lineHeight={125} color="base" fontSize={14}>
        Learn about fonts
      </Text>
    </Card>
    <Card padding="0" radius="10px">
      <Image
        src="https://i.imgur.com/IqFgSfx.jpg"
        radius="10px"
        alt="Layout"
        margin="0 auto"
      />
      <Row split="1fr" padding="1rem 1.5rem">
        <Heading h5 weight={800}>Layout</Heading>
        <Text lineHeight={125} color="base" fontSize={14}>
          Learn about the layout
        </Text>
      </Row>
    </Card>
    <Card bg="white" padding="1rem" hasShadow>
      <Heading h5 weight={800}>Colors</Heading>
      <Text lineHeight={125} color="base" fontSize={14} marginBottom="0">
        Learn about the colors
      </Text>
      <Image
        src="https://i.imgur.com/3nCddcl.jpg"
        radius="10px"
        alt="Layout"
        margin="1rem auto 0"
      />
    </Card>
  </Row>
));
