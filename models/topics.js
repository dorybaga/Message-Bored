const sequelize = require("sequelize");
const Messages = require('./messages');
const Users = require('./users');

module.exports = function(sequelize, DataTypes) {
  var Topics = sequelize.define("Topics", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  });

  Topics.associate = function(models) {
    Topics.belongsTo(models.Users, {
      foreignKey: {
        name: "created_by"
        // allowNull: false
      }
    });
    Topics.hasMany(models.Messages, {
      foreignKey: {
        name: "topic_id"
      }
    });
  };

  return Topics;

};