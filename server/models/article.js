const https = require('https');

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    author: DataTypes.STRING,
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    urlToImage: DataTypes.TEXT,
    content: DataTypes.TEXT
  }, {});
  Article.associate = function({Comment, Like}) {
    Article.hasMany(Comment)
    Article.hasMany(Like)
  };
  Article.findRecent = async function(){
    let returnArr = []
    let apiRes = async () => https.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=5d8f7e7fb04d49f8b5afc10db6e05367", (res) => {
      let data = '';
      let newObj = {};
      let article;
      res.on('data', (chunk) => {
        data += chunk


      })

      res.on('end', async () => {
        JSON.parse(data).articles.forEach((datum) => {
          newObj = datum;
          article = Article.create(newObj).then((article) => {
            returnArr.push(article)
          });

        })

      });
      
    }).on("error", (err) => {
      console.log(err.message)
    })

    let result = await apiRes()

    setTimeout(() => null, 1000)
    await Article.findAll()
    let returnVal = returnArr;


    return returnVal;
  }
  Article.sendConservative = async(arr) => {
    arr.forEach((art) => {
      val.push(Article.create(art))
    }).then((res) => {
      return res
    })
    
  }
 
  return Article;
};