'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mainten extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  mainten.init({
    idUser: DataTypes.INTEGER,
    alkes: DataTypes.INTEGER,
    visualCheck: DataTypes.STRING,
    testing: DataTypes.STRING,
    kesimpulan: DataTypes.STRING,
    keterangan: DataTypes.STRING,
    approval: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mainten',
  });
  return mainten;
};