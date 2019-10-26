
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
  User.associate = function ({ AuthToken, Comment, Like }) {
    User.hasMany(AuthToken);
    User.hasMany(Comment);
    User.hasMany(Like)
  };

  User.authenticate = async function(name, password) {
    
   let user = await User.findOne({where: {username: name}})
    
   if (bcrypt.compareSync(password, user.password)){
      // console.log(password)
      return user.authorize();
    };
    throw new Error(['invalid password or username']);
    
    
  }

  User.prototype.authorize = async function () {
    const { AuthToken } = sequelize.models;
    const user = this;
    // console.log("userIsThis", user)
    const authToken = await AuthToken.generate(this.id);
    // console.log("authToken is This", authToken)
    const id = this.id
    await user.addAuthToken(authToken);
    // console.log("with auth token", user
    // console.log("from authorize", user, authToken, id)
    return { user, authToken };
  }

  User.prototype.logout = async function (token) {
    sequelize.models.AuthToken.destroy({ where: { token } });
  };
  
  return User;
};