const path = require("path");
const pathResolve = (pathname) => path.resolve(__dirname, pathname);
const CracoLessPlugin = require("craco-less");
module.exports = {
	//less
	plugins: [
		{
			plugin: CracoLessPlugin,
			options: {
				lessLoaderOptions: {
					lessOptions: {
						modifyVars: {},
						javascriptEnabled: true,
					},
				},
			},
		},
	],
	//webpack
	webpack: {
		alias: {
			"@": pathResolve("src"),
			components: pathResolve("src/components"),
			utils: pathResolve("src/utils"),
		},
	},
};
