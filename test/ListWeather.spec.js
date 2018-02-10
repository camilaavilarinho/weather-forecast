import React from 'react';
import ListWeather from '../src/components/ListWeather';
import Weather from '../src/components/Weather';

/*describe('ListWeather component', () => {

    it('calls componentDidMount', () => {
        spy(ListWeather.prototype, 'componentDidMount');

        const wrapper = mount(<ListWeather />);
        expect(ListWeather.prototype.componentDidMount.calledOnce).to.equal(true);
    });

    it('should render a <Weather /> component', () => {
        const wrapper = mount(<ListWeather />);        
        console.log(wrapper.html());
        //expect(wrapper.exists(<ul class="list-group"></ul>)).to.equal(true); //OBS: tá passando para tudo
        expect(wrapper.find(Weather)).to.have.length(1);
        //expect(wrapper.find('h3')).to.have.length(1);
    });

    /*it('should have an initial items state', function () {
        const wrapper = mount(<ListWeather />);
        wrapper.setState({ items: [{city: "dubin"}] });
        expect(wrapper.state().items).to.equal([{city: "dubin"}]);;
    });*/

//});