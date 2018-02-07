import React from 'react';
import {ListGroup} from 'reactstrap';
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
            error: null,
            isLoaded: false,
            items: []
        };
    }
    /**
     * Do a request to the Open Weather forecast API
     *     
     * Ref: {@link http://openweathermap.org/forecast5| 5 day weather forecast API}
     * @memberof ListWeather
     * @returns Set the state with the items resulted of the request
     * 
     */
    componentDidMount() {
        fetch("//api.openweathermap.org/data/2.5/forecast?q=dublin,ie&units=metric&appid=a1bfda65749bde461998c5c598e4964b")
            .then(res => res.json())
            .then(
            (result) => {
                this.setState({
                    isLoaded: true,
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
     * Renders the Wheather component
     * 
     * @returns HTML markup for the component
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
            return <div>Loading...</div>;
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