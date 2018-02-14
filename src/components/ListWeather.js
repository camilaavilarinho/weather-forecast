import React from 'react';
import { ListGroup, Button, Form, FormGroup } from 'reactstrap';

import Weather from './Weather';
/**
 * List the Weather component
 * @class ListWeather
 * @extends {React.Component}
 */
export default class ListWeather extends React.Component {
    /**
     * Constructor: set the initial state
     * @param {object} props 
     */
    constructor(props) {
        super(props);
        /**
         * @type {object}
         * @property {string} city city's name
         * @property {string} error error message
         * @property {string} isLoaded check if the content was loaded
         * @property {string []} items items resulted from the API request
         */
        this.state = {
            city: 'dublin',
            error: null,
            isLoaded: false,
            items: []
        };
    }
    /**
     * Update the state with the value from input text search
     * @param {string} val input text search value
     */
    componentWillReceiveProps(val) {
        this.setState({
            isLoaded: true,
            city: val
        });
        this.getContent(val);
    }
    /**
     * Handle the text search value sending to componentWillReceiveProps
     * @param {string} val input text search value
     */
    handleSearch(val) {
        this.componentWillReceiveProps(val);
    }

    componentDidMount() {
        this.getContent(this.state.city);
    }

    /**
     * Do a request to the Open Weather forecast API   
     * @see http://openweathermap.org/forecast5 
     * @memberof ListWeather
     * @param {string} val city name 
     * @return {Object} Set the state with the items resulted of the request
     * 
     */

    getContent(val) {
        if (val === '') val = this.state.city;
        fetch(`//api.openweathermap.org/data/2.5/forecast?q=${val}&units=metric&appid=a1bfda65749bde461998c5c598e4964b`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log(error);
                }
            )

    }
    /**
     * Renders the search form and then the Wheather component
     * 
     * @return {ReactElement} markup for the components
     */
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            let inputSearch = null;
            return (
                <div>
                    <Form onSubmit={e => {
                        e.preventDefault()
                        this.handleSearch(inputSearch.value)
                    }}>
                        <FormGroup>
                            <input className="search"
                                ref={node => { inputSearch = node }}
                                placeholder="Search City"
                            />
                        </FormGroup>
                        <Button type="submit">
                            Search
                        </Button>
                    </Form>
                </div>
            );
        } else {
            const weatherList = items.list
                .map(item => (
                    <Weather key={item.dt}
                        item={item}
                    />
                )
                )
            return (
                <div>
                    <h3 className="App-title city">{items.city.name}, {items.city.country}</h3>
                    <ListGroup >
                        {weatherList}
                    </ListGroup>
                </div>
            );
        }
    }
}