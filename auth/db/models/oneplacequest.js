'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OnePlaceQuest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  OnePlaceQuest.init({
    questionId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OnePlaceQuest',
  });
  return OnePlaceQuest;
};