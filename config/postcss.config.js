module.exports = ctx => ({
	parser: "postcss-scss",
	plugins: {
		"postcss-import": {},
		"postcss-at-rules-variables": {},
		"postcss-nested-ancestors": {},
		"postcss-selector-not": {},
		"postcss-for": {},
		"postcss-each": {},
		"postcss-conditionals": {},
		"postcss-advanced-variables": {},
		"postcss-pxtorem": {
			rootValue: 16,
			selectorBlackList: ["body"],
		},
		"postcss-will-change": {},
		"postcss-nested": {},
		"postcss-calc": {
			warnWhenCannotResolve: false,
			mediaQueries: true,
		},
		"postcss-mesh": {},
	},
});
