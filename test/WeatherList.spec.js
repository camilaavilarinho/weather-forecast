import React from 'react';
import WeatherList from '../src/components/WeatherList';
import Weather from '../src/components/Weather';

describe('WeatherList component', () => {

    /*it('calls componentDidMount', () => {
        spy(WeatherList.prototype, 'componentDidMount');
        const wrapper = mount(<WeatherList />);
        expect(WeatherList.prototype.componentDidMount.calledOnce).to.equal(true);
    });*/

    it('should render a <Weather /> component', () => {
        const wrapper = shallow(<WeatherList />);        
        expect(wrapper.find(Weather)).to.have.length(1);
    });

    it('should render location\'s name and country', ()=> {
        const wrapper = shallow(<WeatherList />);
        expect(wrapper.contains('Dublin')).to.equal(true);
        expect(wrapper.contains('IE')).to.equal(true);
    });
});