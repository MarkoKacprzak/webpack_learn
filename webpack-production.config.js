//var webPackStrip = require('strip-loader');

var devConfig = require('./webpack.config.js');

var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
	//loader: webPackStrip.loader('console.log')
    loader: "strip-loader?strip[]=debug,strip[]=console.log"
}
devConfig.module.loaders.push(stripLoader);
devConfig.watch=false;

module.exports = devConfig;