import React from 'react';
import { ListGroup, Button, Form, FormGroup } from 'reactstrap';

import Weather from './Weather';
/**
 * List the Weather component
 * 
 * @class ListWeather
 * @extends {React.Component}
 */
class ListWeather extends React.Component {
    /**
     * Constructor: set the initial state
     * @param {any} props 
     * @memberof ListWeather
     */
    constructor(props) {
        super(props);
        this.state = {
            city: 'dublin',
            error: null,
            isLoaded: false,
            items: []
        };
    }
    /**
     * Update the state with the value from input text search
     * 
     * @param {string} val input text search value
     * @memberof ListWeather
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
     * 
     * @param {string} val input text search value
     * @memberof ListWeather
     */
    handleSearch(val) {
        this.componentWillReceiveProps(val);
    }

    componentDidMount() {
        this.getContent(this.state.city);
    }

    /**
     * Do a request to the Open Weather forecast API
     *     
     * Ref: {@link http://openweathermap.org/forecast5 | 5 day weather forecast API}
     * @memberof ListWeather
     * @param {string} val city name 
     * @returns Set the state with the items resulted of the request
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
     * @returns HTML markup for the components
     * @memberof ListWeather
     * @prop {string} error prop from state
     * @prop {string} isLoaded prop from state
     * @prop {string} items prop from state
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
                            <input
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
                    <h3 className="App-title">{items.city.name}, {items.city.country}</h3>
                    <ListGroup >
                        {weatherList}
                    </ListGroup>
                </div>
            );
        }
    }
}

export default ListWeather;