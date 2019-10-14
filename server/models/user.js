
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
    }
  }, {});
  User.associate = function ({ AuthToken, Comments }) {
    User.hasMany(AuthToken);
    User.hasMany(Comments)
  };

  User.authenticate = async function(name, password) {
    // console.log("all Users", await db.sequelize.query('SELECT * FROM "Users"'), { type: sequelize.QueryTypes.SELECT });
    // console.log("username from here", name)
   User.findOne({where: {username: name}}).then((user) => {
      
      if (bcrypt.compareSync(password, user.password)){
        // console.log(password)
        return user.authorize();
      };
      throw new Error('invalid password or username');
    })
    
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