'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {});
  Like.associate = function({User, Article}) {
    // associations can be defined here
    Like.belongsTo(User)
    Like.belongsTo(Article)
  };
  return Like;
};