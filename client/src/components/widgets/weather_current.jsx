import React, { Component } from 'react'
let request = new XMLHttpRequest()
export default class WeatherCurrent extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoaded: false,
            error: null,
            weather: []
        }
    }
    componentDidMount(){
        fetch("http://api.weatherunlocked.com/api/current/us.94110?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a")
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
        // { "lat": 40.78, "lon": -73.97, "alt_m": 47.0, "alt_ft": 154.2, "wx_desc": "Mostly cloudy", "wx_code": 1, "wx_icon": "PartlyCloudyNight.gif", "temp_c": 12.2, "temp_f": 53.96, "feelslike_c": 10.25, "feelslike_f": 50.45, "humid_pct": 74.0, "windspd_mph": 11.81, "windspd_kmh": 19.0, "windspd_kts": 10.26, "windspd_ms": 5.28, "winddir_deg": 40.0, "winddir_compass": "NE", "cloudtotal_pct": 75.0, "vis_km": 16.0, "vis_mi": 9.94, "vis_desc": null, "slp_mb": 1025.4, "slp_in": 30.37, "dewpoint_c": 7.72, "dewpoint_f": 45.9 }
        // let request = new XMLHttpRequest(),
        //     method = "GET",
        //     url = "http://api.weatherunlocked.com/api/current/40.71,-74.00?app_id=e77a1456&app_key=1ed2bd8e094ad579325aba7e1cbbcd0a";

        // request.open(method, url, true);
        // request.onreadystatechange = function () {
        //     if (request.readyState === 4 && request.status === 200) {
        //         // console.log(request.responseText);
        //         this.setState({
        //             weather: request.responseText
        //         })
        //     }
        // };
        // request.send();
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
        console.log(JSON.parse(weather))
        weather = JSON.parse(weather)
        return (
            <div className="weather-widget">
                
                <p>Showing weather in: San Francisco </p>
                <img src={weather["wx_icon"]}/>
                <p>{weather["wx_desc"]}</p>
                <p>Temperature: {weather["temp_f"]}</p>
                <p>Feels Like: {weather["feelslike_f"]}</p>
            </div>
        )
    }
}
