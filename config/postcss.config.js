const browsers = [
	"Explorer >= 9",
	"Edge >= 13",
	"Firefox ESR",
	"safari >= 10",
	"Chrome >= 55",
	"ChromeAndroid >= 47",
	"last 2 iOS versions",
];

module.exports = ctx => ({
	parser: "postcss-scss",
	map: ctx.options.map,
	plugins: {
		stylelint: {
			configFile: ".stylelintrc",
			files: "app/src/**/*.(css|scss|pcss)",
			syntax: "scss",
		},
		"postcss-import": { plugins: [require("stylelint")()] },
		"postcss-at-rules-variables": {},
		"postcss-nested-ancestors": {},
		// "postcss-custom-properties": {},
		// "postcss-custom-selectors": {},
		"postcss-selector-not": {},
		"postcss-for": {},
		"postcss-each": {},
		"postcss-sassy-mixins": {},
		"postcss-conditionals": {},
		"postcss-modules-values": {},
		"postcss-advanced-variables": {
			variables: {
				"breakpoint-sm": "576px",
				"breakpoint-md": "768px",
				"breakpoint-lg": "992px",
				"breakpoint-xl": "1200px",
				"accent-color": "#F55380",
				"corporate-color-1": "#FBFBFA",
				"corporate-color-2": "#EBE32A",
				"corporate-color-3": "#202449",
			},
		},
		// "postcss-quantity-queries": {},
		"postcss-hexrgba": {},
		// "postcss-object-fit-images": {},
		"postcss-pxtorem": {
			rootValue: 16,
			selectorBlackList: ["body"],
		},
		// "postcss-assets": {
		// 	loadPaths: ["assets/img/"]
		// },
		"postcss-flexbugs-fixes": {},
		"postcss-size": {},
		"postcss-inline-svg": {
			path: "app/src/svg",
		},
		"postcss-will-change": {},
		"postcss-nested": {},
		// "postcss-random": {},
		"postcss-calc": {
			precision: 10,
			warnWhenCannotResolve: false,
			mediaQueries: true,
		},
		"postcss-initial": {},
		// "postcss-input-style": {},
		"postcss-easings": {},
		"postcss-mesh": {},
		autoprefixer: {
			browsers,
		},
		// "postcss-svgo": svgoSettings,
		cssnano:
			ctx.env === "production"
				? {
						filterPlugins: false,
						safe: true,
						mergeRules: false,
						browsers,
						svgo: false,
						discardComments: {
							removeAll: true,
						},
				  }
				: false,
	},
});
