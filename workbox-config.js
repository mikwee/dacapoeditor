module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,css,js,ico,png,icns}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};