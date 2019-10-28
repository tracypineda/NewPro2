'use strict';
module.exports = (sequelize, DataTypes) => {
  var Race = sequelize.define('Race', {
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },

    distance: {
      type:DataTypes.STRING,
      allowNull: false,
    },
  });
  Race.associate = function(models) {
    // associations can be defined here
    Race.hasMany(models.Athlete,{
      foreignKey: 'raceId',
      as: 'Athletes'
    });
  };
  return Race;
};