import React from 'react';
import Weather from '../src/components/ListWeather';

describe('ListWeather component', () => {

    it('should render the component', () => {
        const wrapper = shallow(<ListWeather/>);
        expect(wrapper.type()).to.eql('ul');
    });

    it('calls componentDidMount', () => {
        spy(ListWeather.prototype, 'componentDidMount');
    
        const wrapper = mount(<ListWeather />);
        expect(ListWeather.prototype.componentDidMount.calledOnce).to.equal(true);
    });
});