// const express = require('express');
// const expressGraphQL = require('express-graphql');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const schema = require('./schema/schema');

// const app = express();

// // Replace with your mongoLab URI
// const MONGO_URI = 'mongodb://irfan:irfan123@ds235181.mlab.com:35181/lyricaldb';
// if (!MONGO_URI) {
//   throw new Error('You must provide a MongoLab URI');
// }

// mongoose.Promise = global.Promise;
// mongoose.connect(MONGO_URI);
// mongoose.connection
//     .once('open', () => console.log('Connected to MongoLab instance.'))
//     .on('error', error => console.log('Error connecting to MongoLab:', error));

// app.use(bodyParser.json());
// app.use('/graphql', expressGraphQL({
//   schema,
//   graphiql: true
// }));

// const webpackMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('../webpack.config.js');
// app.use(webpackMiddleware(webpack(webpackConfig)));

// module.exports = app;


var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('sys', 'paresh', ''{
    host: 'localhost',
    dialect: 'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    directory: false, // prevents the program from writing to disk
    port: '3306',
    additional: {
        timestamps: false
        //...
    },
    tables: ['table1', 'table2', 'table3']
    //...
});

auto.run(function (err) {
  if (err) throw err;

  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});