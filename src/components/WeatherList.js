import React from 'react';
import { ListGroup } from 'reactstrap';
import Weather from './Weather';

class WeatherList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [{
                list: {
                    main: {
                        temp: 5.41,
                        temp_min: 5.41,
                        temp_max: 6.53,
                        pressure: 1024.13,
                        sea_level: 1028.98,
                        grnd_level: 1024.13,
                        humidity: 100,
                        temp_kf: -1.12
                    },
                    weather: [
                        {
                            "id": 500,
                            "main": "Rain",
                            "description": "light rain",
                            "icon": "10n"
                        }
                    ],
                    dt_txt: "2018-02-09 15:00:00"
                },
                date: 12,
                item_date: "12",
                item_time: "12",
                temp: "10",
                min: "3",
                max: "10",
                weather_icon: "icon",
                weather_desc: "desc",
                city: [{ name: "Dublin", country: "IE" }]

            }]
        };
    }

    render() {
        const { test, items } = this.state;
        return (
            <div>
                <h3 className="App-title">{items[0].city[0].name}, {items[0].city[0].country}</h3>
                <ListGroup >
                    <Weather key={items[0].dt}
                        item={items[0].list}
                    />
                </ListGroup>
            </div>
        );
    }
}

export default WeatherList;