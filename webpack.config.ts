import * as webpack from "webpack";
import * as path from "path";
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config: webpack.Configuration = {
    mode: "development",
    entry: [
        "./src/index.tsx",
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
    },

    devtool: "source-map",

    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "React and TypeScript"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                options: {
                    transpileOnly: true
                }
            },
            
            {
                enforce: "pre",
                test: /\.js?$/,
                loader: "source-map-loader"
            },
        ]
    },

    devServer: {
        hot: true,
        historyApiFallback: true
    }

};

export default config;