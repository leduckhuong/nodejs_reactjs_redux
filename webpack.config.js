import TerserPlugin from "terser-webpack-plugin";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
export default {
    mode: "development",
    entry: {
        index: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'index.js'),
        App: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'App.js'),
        // Todos: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'components', 'Todos.js'),
        // todosConstant: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'todos-redux', 'todosConstant.js'),
        // todosReducer: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'todos-redux', 'todosReducer.js'),
        // todosActions: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'todos-redux', 'todosActions.js'),
        // todosStore: path.resolve(__dirname, 'sources', 'nest', 'react-redux', 'todos-redux', 'todosStore.js')
    },
    output: {
        path: path.resolve(__dirname, 'src', 'public', 'dist', 'react-redux'),
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