const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

const { resolve } = require("./webpack.settings");

module.exports = {
	entry: ["./app/src/jsx/Index.jsx"],
	output: {
		path: path.resolve(__dirname, "../", "app", "dist"),
		filename: "js/bundle.js",
	},
	devtool: false,
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
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						// options: { importLoaders: 1 },
						query: {
							modules: true,
							localIdentName: "[path][name]__[local]--[hash:base64:5]",
						},
					},
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
			template: "app/src/html/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	devServer: {
		disableHostCheck: true,
		hot: true,
		host: "localhost",
		historyApiFallback: true,
		open: true,
		contentBase: [path.join(__dirname, "..", "app", "dist")],
		watchContentBase: true,
		publicPath: "http://localhost:8080/",
	},
};