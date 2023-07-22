import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            options.paths.source,
            'node_modules'
        ],
        mainFiles: ['index'],
        alias: {}
    }
}
