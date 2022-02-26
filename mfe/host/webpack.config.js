const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;

module.exports = {
    output: {
        publicPath: process.env.VERCEL_ENV
            ? process.env.VERCEL_URL
            : "http://localhost:3000/",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
    },

    devServer: {
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.m?js/,
                type: "javascript/auto",
                resolve: {
                    fullySpecified: false,
                },
            },
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/react",
                            {
                                plugins: [
                                    "@babel/plugin-proposal-class-properties",
                                ],
                            },
                        ],
                    },
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            filename: "remoteEntry.js",
            remotes: {
                "cat-mf": "cat@http://localhost:3001/remoteEntry.js",
                "dog-mf": "dog@http://localhost:3002/remoteEntry.js",
                "squirrel-mf": "squirrel@http://localhost:3003/remoteEntry.js",
            },
            exposes: {},
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
        }),
    ],
};
