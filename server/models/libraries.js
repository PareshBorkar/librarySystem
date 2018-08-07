/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('libraries', {
		idlibraries: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'libraries',
		timestamps: false
	});
};
