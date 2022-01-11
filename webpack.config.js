import TerserPlugin from "terser-webpack-plugin";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, 'sources', 'nest', 'redux', 'index.js'),
        constants: path.resolve(__dirname, 'sources', 'nest', 'redux', 'constants.js'),
        actions: path.resolve(__dirname, 'sources', 'nest', 'redux', 'actions.js'),
        store: path.resolve(__dirname, 'sources', 'nest', 'redux', 'store.js'),
        reducer: path.resolve(__dirname, 'sources', 'nest', 'redux', 'reducer.js'),
        middleware: path.resolve(__dirname, 'sources', 'nest', 'redux', 'middleware.js')
    },
    output: {
        path: path.resolve(__dirname, 'src', 'public', 'dist', 'redux'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ['babel-loader']
            },
            {
              test: /\.css$/,
              exclude: /node_modules/,
              use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: true
            })
        ]
    }
}