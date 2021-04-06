'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Ship.hasMany(models.Pirate)
    }
  };
  Ship.init({
    name: {
      type: DataTypes.STRING,
      validate: {
      notEmpty: true
      }
    },
    type: {
      type: DataTypes.STRING,
      validate: {
      notEmpty: true
      }
    },
    power: {
      type: DataTypes.INTEGER,
      validate: {
      notEmpty: true
      }
    }
  }, {
    sequelize,
    modelName: 'Ship',
  });
  return Ship;
};