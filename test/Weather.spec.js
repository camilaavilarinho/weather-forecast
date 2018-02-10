import React from 'react';
import Weather from '../src/components/Weather';

describe('Wheather component', () => {
    const wrapper = mount(<Weather />);

    it('should be a list item', () => {    
        expect(wrapper.type()).to.eql('li');
    });

    it('should renders the props', () => {
        wrapper.setProps({ items: ' ' });
        expect(wrapper.contains('')).to.equal(true);
      });
});
