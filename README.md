# Proponents
Proponents is a library with a collection of beautifully designed, user-experience centric components, built with `ReactJS` and `styled-components`.

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
// Import Button from 'proponents' dependency
import { Button } from 'proponents';

// Add Input.
const App = () => (
  <div>
    <Button bg="#222222" color="#FFFFFF" rounded uppercase>
      Submit Me
    </Button>
  </div>
);

// Export App
export default App;
```

```js
// setConfig
export const setConfig = (Object): void => {

};

// App
import { setConfig } from 'proponents';

const config = {
  scheme: {
    primary: '#29ADBA',
    secondary: '#249A88',
  },
  styles: {
    btnRounded: false,
    fontSize: 16,
  }
};

setConfig(config);\
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
