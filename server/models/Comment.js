'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    author_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function({ User, Article}) {
    // associations can be defined here
    Comment.belongsTo(User)
    Comment.belongsTo(Article)
  };
  return Comment;
};