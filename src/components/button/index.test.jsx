/**
 * External Dependencies
 * @TODO: Install jest and enzyme
 */
import React from 'react';
import { shallow } from 'enzyme';

/**
 * Internal Dependencies
 */
import Button from './index';

describe('<Button> Component', () => {
  describe('<Button> with no props', () => {
    let mountedBtn;

    const Btn = () => {
      if (!mountedBtn) {
        mountedBtn = shallow(
          <Button />
        );
      }
      return mountedBtn;
    };

    it('Should not render <Button>', () => {
      const comp = Btn().find('button');
      expect(comp.length).toBe(0);
    });
  });

  describe('<Button> with props', () => {
    let mountedBtn;
    const props = {
      bg: '#6155E6',
      color: '#FFF',
      rounded: true
    };

    const Btn = () => {
      if (!mountedBtn) {
        mountedBtn = shallow(
          <Button {...props} />
        );
      }
      return mountedBtn;
    };

    it('Should render <Button>', () => {
      const comp = Btn.find('button');
      expect(comp.length).toBe(1);
    });
  });
});
