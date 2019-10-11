import React from 'react'
import Article from './article_item';
import WeatherCurrent from '../widgets/weather_current';
import Stocks from '../widgets/stocks'
class Articles extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            articles: []
        };
    }

    async componentDidMount(){
       let articles = [[{

            author: "Jamey Eisenberg",
            content: "Editor's Note: What do you do with Mike Evans, Odell Beckham, Deandre Hopkins, Juju Smith-Schuster, and more? That's been the burning question this week. The early wide receivers were supposed to be the safest picks in the draft, but so far 2019 has been a ro… [+298 chars]",
            createdAt: "2019-10-09T22:50:00.335Z",
            description: "Some of the biggest names at wide receiver have struggled mightily of late. Is it time to consider benching them? Jamey Eisenberg gives his start and sit calls for WR in Week 6.",
            id: 1,
            title: "Fantasy Football Week 6 Start 'Em & Sit 'Em: Wide Receivers - CBSSports.com",
            updatedAt: "2019-10-09T22:50:00.335Z",
            url: "https://www.cbssports.com/fantasy/football/news/fantasy-football-week-6-start-em-sit-em-wide-receivers-2019/",
            urlToImage: "https://sportshub.cbsistatic.com/i/r/2019/10/09/97f701e2-6e36-4c07-b68c-9ad74e665eee/thumbnail/1200x675/f61d53afb3925458f5dbd4e705330518/mclaurin.jpg",
        }, 
        {

            author: "Doha Madani",
            content: "A tire shop tasked with performing an inspection on a limousine that crashed and killed 20 people in upstate New York last year allegedly falsified maintenance records for the vehicle, according to the district attorney. A former employee for a Mavis Discoun…[+2020 chars]",
            createdAt: "2019-10-09T22:50:00.336Z",
            description: "A tire shop allegedly falsified maintenance records on a limo that crashed and killed 20 people in upstate New York last year.",
            title: "Tire shop falsified brake records for limo that crashed and killed 20, DA says - NBC News",
            updatedAt: "2019-10-09T22:50:00.336Z",
            url: "https://www.nbcnews.com/news/us-news/tire-shop-falsified-brake-records-limo-crashed-killed-20-da-n1064396",
            urlToImage: "https://media3.s-nbcnews.com/j/newscms/2019_41/2598396/181009-limo-accident-mourner-ac-458p_f4990b790d6f0c5ba6309ba5f5abf900.nbcnews-fp-1200-630.jpg",

        }]
        ]
        
        // await this.props.receiveAllArticles()
        // if (this.props.articles){
        //     // debugger;
        //     // console.log([this.props.articles])
        //     this.setState({articles: this.props.articles, isLoaded: true})
        // }
        if (this.props.articles){
            // debugger;
            // console.log([this.props.articles])
            this.setState({articles: articles, isLoaded: true})
        }
    }
    render() {
        let { error, isLoaded, articles } = this.state;
        console.log("articles", articles)
         if (!isLoaded){
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <WeatherCurrent />
                    <div className="article-index">
                        {articles[0].map(item => (
                            
                            <Article key={item.title}
                                // urlToImage={item.urlToImage}
                                // link={item.url}
                                // title={item.title}
                                // author={item.author ? item.author : "No Known Author"}
                                // description={item.description}
                                // content={item.content}
                                article={item}
                            />
                        ))}
                    <Stocks />
                    </div>
                </div>
            )
        }
    }
}

export default Articles
