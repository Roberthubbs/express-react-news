'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    url: DataTypes.STRING,
    urlToImage: DataTypes.STRING,
    content: DataTypes.STRING
  }, {});
  Article.associate = function(models) {
    
  };
  return Article;
};