'use strict';

module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    follower_id: DataTypes.INTEGER,
    following_id: DataTypes.INTEGER
  }, {});
  Follow.associate = function({User}) {
    Follow.belongsTo(User);
  };
  Follow.attachComments = async function(following){
   
    let chunk = await sequelize.query(`SELECT "Users".username, "Users".id, "Comments".content, "Comments".post_id, "Articles".title FROM "Users" JOIN "Comments"  ON "Comments".author_id = "Users".id JOIN "Articles" ON "Articles".id = "Comments".post_id WHERE "Users".id = ${following.following_id}`)
    
    return following.comments = chunk[0]
  }
  return Follow;
};