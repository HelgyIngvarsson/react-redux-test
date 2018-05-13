var express = require("express");

var app = express();

var db = require('./server/db');

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

global.__root   = __dirname + '/'; 

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.post('/api', function (req, res) {
    res.status(200).send('API works.');
  });

var AuthController = require(__root+'server/auth/AuthController');
app.use('/api/auth', AuthController);

var ProductController = require(__root+'server/product/ProductController')
app.use('/api', ProductController);

// app.use(express.static(__dirname + "/public"));

app.get("*",(req,res)=>{
  res.sendfile(__dirname +"/index.html");
})
module.exports =app;