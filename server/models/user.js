
const bcrypt = require('bcrypt');
'use strict';
module.exports = (sequelize, DataTypes) => {
  
  const User = sequelize.define('User', {
    
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    politicalAffiliation: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {});
  User.associate = function ({ AuthToken, Comment, Like, Follow }) {
    User.hasMany(AuthToken);
    User.hasMany(Comment);
    User.hasMany(Like);
    User.hasMany(Follow);
  };

  User.authenticate = async function(name, password) {
    
   let user = await User.findOne({where: {username: name}})
    
   if (bcrypt.compareSync(password, user.password)){
      return user.authorize();
    };
    throw new Error(['invalid password or username']);
    
    
  }

  User.prototype.authorize = async function () {
    const { AuthToken } = sequelize.models;
    const user = this;
    const authToken = await AuthToken.generate(this.id);
    const id = this.id
    await user.addAuthToken(authToken);
    return { user, authToken };
  }

  User.prototype.logout = async function (token) {
    sequelize.models.AuthToken.destroy({ where: { token } });
  };
  
  return User;
};