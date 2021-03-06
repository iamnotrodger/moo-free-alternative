const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'style.css',
			chunkFilename: '[name].css',
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new CleanWebpackPlugin(),
	],
	entry: './src/script/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env'],
						},
					},
				],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
		],
	},
	devtool: 'source-map',
	devServer: {
		open: true,
	},
};
