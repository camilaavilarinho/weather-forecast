import React from 'react';
import {ListGroupItem, ListGroupItemHeading, Badge} from 'reactstrap';

const Weather = ({ item }) => {
    let key = item.dt;
    let date = item.dt_txt.split(" ");
    let item_date = date[0];
    let item_time = date[1];
    let temp = item.main.temp;
    let min = item.main.temp_min;
    let max = item.main.temp_max;
    let weather_icon = item.weather[0].icon;
    let weather_desc = item.weather[0].description;

    return (
        <ListGroupItem key={key}>
            <div>
                <p className="date">
                    <span><i className="fa fa-calendar icon" aria-hidden="true"></i>{item_date}</span>
                    <span><i className="fa fa-clock-o icon" aria-hidden="true"></i>{item_time}</span>
                </p>
                <img src={"http://openweathermap.org/img/w/"+weather_icon+".png"} alt={weather_desc} />
                <br/><span className="weather-desc">{weather_desc}</span>
                <ListGroupItemHeading>
                    <Badge className="main-temp" pill>{temp} ºC</Badge>
                </ListGroupItemHeading>
                <p>
                    <Badge className="temp-min" >{min} ºC</Badge>
                    <Badge className="temp-max" >{max} ºC</Badge>
                </p>
                
            </div>

        </ListGroupItem>
    );
}

export default Weather;