![Proponents](https://i.imgur.com/czeDE8g.png)

# Proponents
Proponents is an open-sourced React UI Framework (an extensible
design system) designed to **reduce** *development time* and
**speed up** *product iterations*.

## Customize
Proponents is designed to be customized and flexible so you can start using the components without having to constantly update their styles to fit yours.

With Proponents, you can define custom configuration. Using the `setConfig()` function (which takes an  Object), you can define your color scheme, and how some styling decisions.

Based on that, proponents dynamically serves components with those styles applied.

## Installing
```sh
# Install package
yarn add proponents
```

## Todo
Show examples of how to use proponents.

```jsx
// Import proponents
import { Row, Heading, Text, Button } from 'proponents';

// Add Input.
const App = () => (
  <Row padding="4rem 20%">
    <Heading h3 weightHeavy marginBottom>Hi User</Heading>
    <Text lineHeight={140} marginBottom>
      You haven't submitted your assignment yet. Please do now!
    </Text>
    <Button bg="#222222" color="#FFFFFF" rounded uppercase>
      Submit Me
    </Button>
  </Row>
);

// Export App
export default App;
```

## Contributing
**`proponents`** is an open sourced library. If you'd like to contribution, feel free to submit a pull request.

```sh
# clone
git clone https://github.com/narulakeshav/proponents.git
cd proponents

# Install dependencies
yarn

# run storybook
yarn storybook # yarn dev works as well
```
