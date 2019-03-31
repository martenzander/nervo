const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { resolve } = require("./webpack.settings");

module.exports = {
	entry: ["./nervo-js.org/src/jsx/Index.jsx"],
	output: {
		path: path.resolve(__dirname, "../", "nervo-js.org", "dist"),
		filename: "js/bundle.js",
	},
	resolve,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					{ loader: "css-loader", options: { importLoaders: 1 } },
					{
						loader: "postcss-loader",
						options: {
							// exec: true,
							config: {
								path: path.resolve(__dirname),
							},
						},
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "nervo-js.org/src/html/index.html",
			// favicon: "nervo-js.org/favicon.ico",
		}),
	],
	devServer: {
		disableHostCheck: true,
		hot: true,
		host: "localhost",
		historyApiFallback: true,
		open: true,
		contentBase: [path.join(__dirname, "..", "nervo-js.org", "dist")],
		watchContentBase: true,
		publicPath: "http://localhost:8080/",
	},
};
