import React, { Component } from 'react';

const style = {
    height: "50px",
    width: "50px"
}

export default class WeatherCurrent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            error: null,
            weather: { temp: "", humidity: "", maxtemp: "", mintemp: "", description:"", icon: "" },
            showMenu: false,
            menuText: "Choose Location",
            weatherLocation: "94110",
            locationText: "San Francisco",
            forecastChosen: false,
            forecastText: "Show Forecast",
            changing: false
        }
        this.showMenu = this.showMenu.bind(this);
        this.chooseSF = this.chooseSF.bind(this);
        this.chooseDC = this.chooseDC.bind(this);
        this.chooseNY = this.chooseNY.bind(this);
        this.chooseLA = this.chooseLA.bind(this);
        this.chooseCH = this.chooseCH.bind(this);
    }
    // componentDidMount(){
    //     fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/0242b7931e25c4197e3acfa0ee5430f7/${this.state.weatherLocation}`)
    //         .then(res => res.json())
    //         .then(
    //             (result) => {
    //                 debugger;
    //                 this.setState({
    //                     isLoaded: true,
    //                     weather: result
    //                 });
    //             },
                
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //                 });
    //             }
    //         )
    
    // }
    componentDidMount(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.weatherLocation},us&APPID=d2ea10d4e23debad2ec28153114d297d`)
            .then(res => res.json())
            .then(
                (result) => {
                    // debugger;
                    this.setState({
                        isLoaded: true,
                        weather: { temp: result["main"]["temp"], humidity: result["main"]["temp"], maxtemp: result["main"]["temp_max"], mintemp: result["main"]["temp_min"], description: result["weather"][0]["main"], icon: result["weather"][0]["icon"] } 
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
    componentDidUpdate(prevState){
        // fetch(`http://api.weatherunlocked.com/api/current/us.${this.state.weatherLocation}?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a`)
        // debugger;
        if (this.state.changing){
            this.setState({changing: false})
            this.componentDidMount();
        }
    
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
            locationText: "San Francisco",
            changing: true
        })

    }
    chooseDC(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "20001",
            locationText: "Washington DC",
            changing: true
        })
    }
    chooseNY(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "10001",
            locationText: "New York City",
            changing: true
        })
    }
    chooseCH(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "60007",
            locationText: "Chicago",
            changing: true
        })
    }
    chooseLA(event){
        event.preventDefault();
        this.setState({
            weatherLocation: "90001",
            locationText: "Los Angeles",
            changing: true
        })
    }
    render() {
        if (this.state.error){
            return(
                <div className="weather-widget">
                this.state.error.message
                </div>
                )
            } 
        else if (!this.state.isLoaded){
            return(
                "loading"
            )
        }
        let weather  = this.state.weather
        // debugger;
        // weather = JSON.parse(weather)
        
        https://openweathermap.org/img/wn/`${weather.icon}`@2x.png
        
            if (!this.state.forecastChosen && this.state.isLoaded){
                return(
                    <div className="weather-widget">

                        <p>Showing weather in: <p className="weather-loc">{this.state.locationText}</p> </p>
                        <img style={style }src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt=""/>
                        <p>{weather.description}</p>
                        <p>Temperature: {Math.floor((weather.temp-273) * 9/5+32 )}</p>
                        {/* <p>Feels Like: {weather["feelslike_f"]}</p> */}
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
