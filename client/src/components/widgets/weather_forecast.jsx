import React, { Component } from 'react';

export default class WeatherForecast extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoaded: false,
            error: null,
            weather: [],
            showMenu: false,
            menuText: this.props.menuText,
            weatherLocation: this.props.weatherLocation,
            locationText: "San Francisco",
            days: [],
            preliminaryLoaded: false,
            callAgain: true,
            setUpCalled: false,
        }
    //    this.setupDays = this.setupDays.bind(this)
    }
    componentDidMount() {
        if (this.state.callAgain){
        fetch(`http://api.weatherunlocked.com/api/forecast/us.${this.state.weatherLocation}?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a`)
            .then(res => res.text())
            .then(
                (result) => {
                    // console.log(result)
                    // console.log(result)
                    this.setState({
                        
                        weather: result,
                        preliminaryLoaded: true,
                        callAgain: false,
                        isLoaded: true
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

    }
    // componentDidUpdate() {
    //     fetch(`http://api.weatherunlocked.com/api/forecast/us.${this.state.weatherLocation}?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a`)
    //         .then(res => res.text())
    //         .then(
    //             (result) => {
    //                 // console.log(result)
    //                 this.setState({
    //                     isLoaded: true,
    //                     weather: result["Days"]
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
    async setupDays(){
        let dayObj;
        if (this.state.preliminaryLoaded){
            // console.log(this.state.weather["Days"][0])
            this.state.weather["Days"].forEach((day) => {
                console.log("DAYYYY", day)
                dayObj = {
                    date: day["date"],
                    max: day["temp_max_f"],
                    min: day["temp_min_f"],
                    chance: day["prob_precip_pct"],
                }
                this.state.days.push(dayObj)
                dayObj = {}
            })
        }
        // this.setState({
        //     isLoaded: true,
        //     setUpCalled: true
        // })
    }
    render(){
        if (!this.state.setUpCalled) {
            this.setupDays()
        }
        if (!this.state.isLoaded){
            return "Loading"
        } else {
            return(
                <div className="weather-forecast-outer">
                    <div class="days">
                        {this.state.days.map((day) => (
                            <div className="day">
                                <p>day</p>
                                <p>Date: {day.date}</p>
                                <p>Maximum Temp: {day.max}</p>
                                <p>Minimum Temp: {day.min}</p>
                                <p>Chance of Precipitation: {day.chance}</p>
                                
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    }
}