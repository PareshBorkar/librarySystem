/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		idusers: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING(45),
			allowNull: true
		},
		type: {
			type: DataTypes.STRING(45),
			allowNull: true
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
