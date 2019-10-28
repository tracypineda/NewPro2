'use strict';
module.exports = (sequelize, DataTypes) => {
  var Athlete = sequelize.define('Athlete', {
    first: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    last: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Athlete.associate = function(models) {
    // associations can be defined here
    Athlete.belongsTo(models.Race,{
      foreignKey: 'raceId',
      onDelete: 'CASCADE'
    });
  };
  return Athlete;
};