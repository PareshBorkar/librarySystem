var SequelizeAuto = require('sequelize-auto')
var auto = new SequelizeAuto('sys', 'paresh', '', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
  directory: '../models/',
  additional: {
    timestamps: false
    // ...
  },
  tables: ['users', 'libraries']
  //...
});

auto.run(function (err) {
  if (err) throw err;
  console.log(auto.tables); // table list
  console.log(auto.foreignKeys); // foreign key list
});