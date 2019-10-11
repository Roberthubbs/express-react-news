import React, { Component } from 'react'

export default class Stocks extends Component {
    constructor(props){
        super(props)
        this.state = {
            stocks: [],
            isLoaded: false,
            error: null
        }
    }

    componentDidMount(){
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=MSFT&apikey=PORN7B18F0F53ICV`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    this.setState({
                        isLoaded: true,
                        stock: JSON.stringify(result["Time Series (Daily)"]["2019-10-11"])
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

    render() {
        if (!this.state.isLoaded){
            return( "Loading")
        } else if (this.state.error){
            return( "error" )
        } else {
        }
        const stock = this.state.stock;
        let splitOne = stock.split(',');
        let splitTwo = splitOne.map((val) => {
            // console.log(val.toString().split(":"))
           return val.toString().split(":")
        });
        console.log(splitTwo[0][1])
      
        let open = splitTwo[0][1];
        let high = splitTwo[1][1];
        let low = splitTwo[2][1];
        let close = splitTwo[3][1];
        
        console.log(open)
       
        return (
            <div className="stock-widget">
                <p className="stocks-info">Open: {open.slice(1,open.length-1)}</p>
                <p className="stocks-info">Close: {high.slice(1, high.length-1)}</p>
                <p className="stocks-info">Low: {low.slice(1, low.length-1)}</p>
                <p className="stocks-info">Close: {close.slice(1, close.length-1)}</p>
            </div>
        )
    }
}
