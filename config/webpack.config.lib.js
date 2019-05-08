const path = require("path");
const packageConfig = require("./../package.json");
const webpack = require("webpack");

const devMode = process.env.NODE_ENV !== "production";
const { resolve } = require("./webpack.settings");

const fileName = devMode ? `${packageConfig.name}.js` : `${packageConfig.name}.min.js`;
const plugins = devMode ? [new webpack.HotModuleReplacementPlugin()] : [];

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
	devtool: false,
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
	plugins,
};
