import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExactPlugin from 'mini-css-extract-plugin';
import path from "path";
import webpack from 'webpack';
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExactPlugin( {
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        })
    ]
}