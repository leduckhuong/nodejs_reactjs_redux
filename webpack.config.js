import TerserPlugin from "terser-webpack-plugin";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
    mode: "development",
    entry: {
        App: path.resolve(__dirname, 'sources', 'nest', 'react', 'App.js'),
        index: path.resolve(__dirname, 'sources', 'nest', 'react', 'index.js'),
        'emifukada.video': path.resolve(__dirname, 'sources', 'nest', 'react', 'emifukada.video.js'),
        // actions: path.resolve(__dirname, 'sources', 'nest', 'react', 'store', 'actions.js'),
        // hooks: path.resolve(__dirname, 'sources', 'nest', 'react', 'store', 'hooks.js'),
        // Provider: path.resolve(__dirname, 'sources', 'nest', 'react', 'store', 'Provider.js'),
        // Context: path.resolve(__dirname, 'sources', 'nest', 'react', 'store', 'Context.js'),
        // reducer: path.resolve(__dirname, 'sources', 'nest', 'react', 'store', 'reducer.js'),
        // index: path.resolve(__dirname, 'sources', 'nest', 'react', 'store', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'src', 'public', 'dist', 'react'),
        filename: '[name].bundle.js'
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