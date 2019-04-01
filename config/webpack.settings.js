const packageConfig = require("./../package.json");
module.exports = {
	resolve: {
		extensions: ["*", ".js", ".jsx"],
	},
	plugins: {
		htmlWebpackPlugin: {
			title: `${packageConfig.name.charAt(0).toUpperCase() + packageConfig.name.slice(1)} – JavaScript Animation Framework`,
			keys: packageConfig.keywords,
			description: packageConfig.description,
			template: "app/src/html/index.html",
		}
	}
};
