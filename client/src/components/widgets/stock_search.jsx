import React, { Component } from 'react'

export default class StockSearch extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            results: [],
            error: null,
            isLoaded: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }
    
    componentWillUpdate(){
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.query}&apikey=PORN7B18F0F53ICV`)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${this.state.query}&apikey=PORN7B18F0F53ICV`)
                    // debugger;
                    this.setState({
                        isLoaded: true,
                        results: result.bestMatches
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
    handleSubmit(e){
        e.preventDefault();

    }
    render() {
        // {console.log(this.state.results)}
        let object = this.state.results
        console.log(object)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                    placeholder="Search Stocks By Symbol" 
                    value={this.state.query}
                    onChange={this.update("query")}
                    className="stock-query"/>
                </form>
                {this.state.isLoaded && this.state.results ? <div>
                    {this.state.results.map((name) => (
                        <p>{name}</p>
                    ))}

                </div> : null}
            </div>
        )
    }
}
