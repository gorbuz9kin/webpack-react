const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outputPath = path.resolve(__dirname, './dist')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const webpackConfig = {
	entry: {
		app: [
			path.resolve(__dirname, './src/js/index.js')
		]
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js'
	},
	devtool: 'cheap-eval-source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				enforce: 'pre',
				use: 'eslint-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							// options: {
							// 	sourceMap: true
							// }
						},
						{
							loader: 'sass-loader',
							// options: {
							// 	sourceMap: true
							// }
						},
						{
							loader: 'postcss-loader',
						},
					]
				})
			},
			{
				test: /\.(gif|png|jpg|jpeg|svg|ico)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, './src/images/'),
				use: 'file-loader?name=images/[name].[ext]'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, './src/index.html'),
			filename: 'index.html',
			favicon: './src/images/favicon.ico',
			path: outputPath
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('./css/main.css'),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			options: {
				postcss: [autoprefixer]
			}
		})
	],
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		port: 8080,
		historyApiFallback: true,
		inline: true,
		hot: true,
		host: '0.0.0.0'
	}
}

module.exports = webpackConfig