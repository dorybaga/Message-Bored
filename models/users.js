const sequelize = require("sequelize");
const Topics = require("./topics");
const Messages = require("./messages");


module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    name: { type:
      DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Users.associate = function(models) {
    Users.hasMany(models.Topics, {
      foreignKey: {
        name: "created_by"
      }
    });

    Users.hasMany(models.Messages, {
      foreignKey: {
        name: "author_id"
      }
    });
  };

  return Users;

};
