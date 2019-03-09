const path = require("path");
const packageConfig = require("./../package.json");

const fileName =
	process.env.NODE_ENV === "development"
		? `${packageConfig.name}.js`
		: `${packageConfig.name}.min.js`;

const config = {
	entry: ["./src/js/index.js"],
	output: {
		library: "Anim",
		libraryTarget: "umd",
		path: path.resolve(__dirname, "../", "build"),
		filename: fileName,
	},
	module: {
		rules: [
			// {
			// 	test: /\.css$/,
			// 	use: [
			// 		{
			// 			loader: "style-loader",
			// 			options: {
			// 				transform: path.resolve(
			// 					__dirname,
			// 					"../",
			// 					"src",
			// 					"js",
			// 					"transformStyles.js"
			// 				),
			// 			},
			// 		},
			// 		{
			// 			loader: "css-loader",
			// 			options: {},
			// 		},
			// 	],
			// },
			{
				test: /\.js$/,
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
	externals: {
		lodash: {
			commonjs: "lodash",
			commonjs2: "lodash",
			amd: "lodash",
			root: "_",
		},
	},
	resolve: {
		extensions: [".js"],
	},
	devServer: {
		port: 3000,
		contentBase: path.join(__dirname, "..", "demo"),
		watchContentBase: true,
		publicPath: "http://localhost:8080/build/",
	},
};
module.exports = config;
