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
                },
            },
        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            filename: "remoteEntry.js",
            remotes: {
                "cat-mf": process.env.CAT_REMOTE_URL
                    ? `cat@${process.env.CAT_REMOTE_URL}/remoteEntry.js`
                    : "cat@http://localhost:3001/remoteEntry.js",
                "dog-mf": process.env.DOG_REMOTE_URL
                    ? `dog@${process.env.DOG_REMOTE_URL}/remoteEntry.js`
                    : "dog@http://localhost:3002/remoteEntry.js",
                "squirrel-mf": process.env.SQUIRREL_REMOTE_URL
                    ? `squirrel@${process.env.SQUIRREL_REMOTE_URL}/remoteEntry.js`
                    : "squirrel@http://localhost:3003/remoteEntry.js",
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
