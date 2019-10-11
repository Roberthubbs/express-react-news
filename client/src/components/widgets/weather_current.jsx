import React, { Component } from 'react';
import WeatherForecast from './weather_forecast';

let request = new XMLHttpRequest()
export default class WeatherCurrent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            error: null,
            weather: [],
            showMenu: false,
            menuText: "Choose Location",
            weatherLocation: "94110",
            locationText: "San Francisco",
            forecastChosen: false,
            forecastText: "Show Forecast"
        }
        this.showMenu = this.showMenu.bind(this);
        this.chooseSF = this.chooseSF.bind(this);
        this.chooseDC = this.chooseDC.bind(this);
        this.chooseNY = this.chooseNY.bind(this);
        this.chooseLA = this.chooseLA.bind(this);
        this.chooseCH = this.chooseCH.bind(this);
    }
    componentDidMount(){
        fetch(`http://api.weatherunlocked.com/api/current/us.${this.state.weatherLocation}?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a`)
            .then(res => res.text())
            .then(
                (result) => {
                    // console.log(result)
                    this.setState({
                        isLoaded: true,
                        weather: result
                    });
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    
    }
    componentDidUpdate(){
        fetch(`http://api.weatherunlocked.com/api/current/us.${this.state.weatherLocation}?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a`)
            .then(res => res.text())
            .then(
                (result) => {
                    // console.log(result)
                    this.setState({
                        isLoaded: true,
                        weather: result
                    });
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    
    }
    showMenu(event) {
        event.preventDefault();
        if (!this.state.showMenu){
            this.setState({
                showMenu: true,
                menuText: "Close"
            });
        } else {
            this.setState({
                showMenu: false,
                menuText: "Choose Location"
            });
        }
    }
    showForecast(event) {
        event.preventDefault();
        if (!this.state.showMenu){
            this.setState({
                showForecast: true,
                forecastText: "Close"
            });
        } else {
            this.setState({
                showForecast: false,
                forecastText: "Close"
            });
        }
    }
    chooseSF(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "94110",
            locationText: "San Francisco"
        })

    }
    chooseDC(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "20001",
            locationText: "Washington DC"
        })
        console.log(this.state.weatherLocation)
    }
    chooseNY(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "10001",
            locationText: "New York City"
        })
    }
    chooseCH(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "60007",
            locationText: "Chicago"
        })
    }
    chooseLA(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "90001",
            locationText: "Los Angeles"
        })
    }
    render() {
        if (this.state.error){
            return(
                this.state.error.message
                )
            } 
        else if (!this.state.isLoaded){
            return(
                "loading"
            )
        }
        let weather  = this.state.weather
        let component;
        weather = JSON.parse(weather)
        
       
        
            if (!this.state.forecastChosen){
                return(
                    <div className="weather-widget">

                        <p>Showing weather in: {this.state.locationText} </p>
                        <img src={weather["wx_icon"]} />
                        <p>{weather["wx_desc"]}</p>
                        <p>Temperature: {weather["temp_f"]}</p>
                        <p>Feels Like: {weather["feelslike_f"]}</p>
                        <div className="selector">
                            <button className="selector-button" onClick={this.showMenu}>{this.state.menuText}</button>
                            {
                                this.state.showMenu ? (
                                    <div classNames="weather-buttons">
                                        <button className="selector-button-mini" onClick={this.chooseSF}>San Francisco</button>
                                        <button className="selector-button-mini" onClick={this.chooseNY}>New York</button>
                                        <button className="selector-button-mini" onClick={this.chooseDC}>Washington DC</button>
                                        <button className="selector-button-mini" onClick={this.chooseLA}>Los Angeles</button>
                                        <button className="selector-button-mini" onClick={this.chooseCH}>Chicago</button>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                )
                } else {
                    return(
                        // <WeatherForecast
                        //     menuText={this.state.forecastText}
                        //     weatherLocation={this.state.weatherLocation}
                        //     locationText={this.state.locationText}
                        // />
                        "in progress"
                    )
            }
        
        
    }
}
