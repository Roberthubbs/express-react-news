const https = require('https');

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    urlToImage: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Article.associate = function(models) {
    
  };
  Article.findRecent = async function(){
    let returnArr = []
    let apiRes = async () => https.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=5d8f7e7fb04d49f8b5afc10db6e05367", (res) => {
      let data = '';
      let newObj = {};
      let article;
      // let returnArr = [];
      res.on('data', (chunk) => {
        data += chunk


      })

      res.on('end', async () => {
        // console.log(JSON.parse(data))
        JSON.parse(data).articles.forEach((datum) => {
          newObj = datum;
          article = Article.create(newObj).then((article) => {
            // console.log(article)
            returnArr.push(article)
            // console.log(returnArr)
          });

          // console.log(items)
        })

      });
      
    }).on("error", (err) => {
      console.log(err.message)
    })

    let result = await apiRes()

    setTimeout(() => null, 1000)
    await Article.findAll()
    let returnVal = returnArr;
    console.log(returnVal)


    return returnVal;
  }
 
  return Article;
};