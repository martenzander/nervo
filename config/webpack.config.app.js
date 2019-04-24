const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const packageConfig = require("./../package.json");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

const { resolve } = require("./webpack.settings");

module.exports = {
	entry: ["./app/src/jsx/Index.jsx"],
	output: {
		path: path.resolve(__dirname, "../", "app", "dist"),
		filename: "js/[name].bundle.js",
	},
	devtool: devMode ? "inline-source-map" : false,
	resolve,
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(css|scss|pcss)$/,
				exclude: /(node_modules|scss)/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
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
			{
				test: /\.(css|scss|pcss)$/,
				include: /scss/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
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
			{
				test: /\.(css|scss|pcss)$/,
				exclude: /src/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
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
			title: `${packageConfig.name.charAt(0).toUpperCase() +
				packageConfig.name.slice(1)} – JavaScript Animation Framework`,
			keys: packageConfig.keywords,
			description: packageConfig.description,
			template: "app/src/html/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
			chunkFilename: "css/[id].css",
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
