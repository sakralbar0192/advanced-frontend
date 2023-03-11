import path from "path";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {mode, paths} = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: 'bundle.js',
            path: paths.build,
            clean: true
        },
        module: {
            rules: buildLoaders(options)
        },
        resolve: buildResolvers(options),
        plugins: buildPlugins(options),
        devtool: options.isDev ? 'inline-source-map' : undefined,
        devServer: options.isDev ? buildDevServer(options) : undefined
    }

}