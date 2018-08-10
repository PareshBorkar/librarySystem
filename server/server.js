const express = require('express');
const expressGraphQL = require('express-graphql');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');
// const App = require('../client/components/App');

const app = express();

app.use(express.static("client"));

app.get("*", (req, res) => {
  res.send(`<!DOCTYPE html>
      <head>
        <title>Universal Reacl</title>
        <link rel="stylesheet" href="/css/main.css">
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id="root">${renderToString(<App />)}</div>
      </body>
    </html>`)
});

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;