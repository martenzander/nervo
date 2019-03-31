const path = require("path");
const packageConfig = require("./../package.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const { resolve } = require("./webpack.settings");

const fileName = process.env.NODE_ENV === "development" ? `${packageConfig.name}.js` : `${packageConfig.name}.min.js`;

module.exports = {
	entry: ["./src/js/index.js"],
	output: {
		library: packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1),
		libraryTarget: "umd",
		path: path.resolve(__dirname, "../", "build"),
		filename: fileName,
	},
	externals: {
		lodash: {
			commonjs: "lodash",
			commonjs2: "lodash",
			amd: "lodash",
			root: "_",
		},
	},
	resolve,
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				enforce: "pre",
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "eslint-loader",
			},
		],
	},
	devServer: {
		disableHostCheck: true,
		port: 3000,
		contentBase: [path.join(__dirname, "..", "build"), path.join(__dirname, "..", "nervo-js.org", "dist")],
		watchContentBase: true,
		publicPath: "http://localhost:8080/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "nervo-js.org/src/html/development.html",
			// favicon: "nervo-js.org/favicon.ico",
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
};
