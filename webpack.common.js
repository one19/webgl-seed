const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'src'),
	entry: {
		app: './main.ts'
	},
	plugins: [ new CleanWebpackPlugin() ],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: [ '.ts', '.tsx' ]
	},
	module: {
		rules: [
			{
				test: /\.ts/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
					compilerOptions: {
						isolatedModules: true
					}
				}
			}
		]
	}
};