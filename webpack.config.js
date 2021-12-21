const HtmlWebPackPlugin = require('html-webpack-plugin');

const development = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const htmlPlugin = new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html'
});
module.exports = {
    mode: development ? 'development' : 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [htmlPlugin]
};