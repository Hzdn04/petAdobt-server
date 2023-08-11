'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alkes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  alkes.init({
    name: DataTypes.STRING,
    merk: DataTypes.STRING,
    type: DataTypes.STRING,
    seri: DataTypes.INTEGER,
    room: DataTypes.STRING,
    function: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'alkes',
  });
  return alkes;
};