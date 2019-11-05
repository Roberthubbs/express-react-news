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
  Comment.attachUserName = async function(comment) {
    let authorId = comment.author_id;
    let user = await sequelize.models.User.findOne({where: {id: authorId}});
    comment.politics = user.politicalAffiliation
    comment.username = user.username;
    comment.userId = user.id;
    return comment;
  }
  return Comment;
};