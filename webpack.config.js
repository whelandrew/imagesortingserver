const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: 'bundle.js',
		sourceMapFilename: "[name].js.map"
    },
	devtool: "source-map ./src",
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
			{
				test: /\,(png|svg|jpg|jpeg|gif|ico)$/,
				exclude: /node_modules/,
				use: ['file-loader?name=[name].[ext]'] //preserves original file name 
			}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
			template: "./public/index.html",
            filename: "./index.html"
        }),
		new HtmlWebpackPlugin({
			favicon: "./public/favicon.ico"
		})
    ]
}
