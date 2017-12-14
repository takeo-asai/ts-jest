import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    devtool: "inline-source-map",
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader",
            },
            {
                enforce: "pre",
                exclude: /node_modules/,
                loader: "tslint-loader",
                test: /\.tsx?$/,
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
};

export default config;
