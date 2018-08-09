'use strict';

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');

// local variables
var db = { models: [] };

const sequelize = new Sequelize('sys', 'paresh', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


// load entity files from model folder & map with database tables
var models = path.join(process.cwd(), '/server/models/');

fs
    .readdirSync(models)
    .filter(function (file) {
        return (file.indexOf('.') !== 0) && (file !== "index.js") && (file.slice(-3) === '.js')
    })
    .forEach(function (file) {
        var model = sequelize.import(path.join(models, file));
        db[model.name] = model;
        db.models.push(model.name);
    });

Object
    .keys(db)
    .forEach(function (model) {
        if ('associate' in db[model]) {
            db[model].associate(db);
        }
    });

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.libraries = require('./libraries')(sequelize, Sequelize);
db.users = require('./users')(sequelize, Sequelize);

db.users.findOne().then(user => {
    console.log(user.get('idusers'));
});

module.exports = db;