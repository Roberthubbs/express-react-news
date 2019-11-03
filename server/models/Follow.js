'use strict';
const { Comment } = require('./Comment');
const { User } = require('./User');
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    follower_id: DataTypes.INTEGER,
    following_id: DataTypes.INTEGER
  }, {});
  Follow.associate = function({User}) {
    Follow.belongsTo(User);
  };
  Follow.attachComments = async function(following){
    // let authorId = following.following_id;
    // debugger;
    // following.comments = await sequelize.models.Comment.findAll({ where: { author_id: following.following_id } });
    let chunk = await sequelize.query(`SELECT "Users".username, "Users".id, "Comments".content, "Comments".post_id, "Articles".title FROM "Users" JOIN "Comments"  ON "Comments".author_id = "Users".id JOIN "Articles" ON "Articles".id = "Comments".post_id WHERE "Users".id = ${following.following_id}`)
    
    return following.comments = chunk[0]
  }
  return Follow;
};