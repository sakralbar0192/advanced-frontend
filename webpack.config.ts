import path from 'path'
import { BuildModes, type BuildEnv, type BuildPaths } from './config/types/config'
import { buildWebpackConfig } from './config/buildWebpackConfig'
import { type Configuration } from 'mini-css-extract-plugin'

export default (env: BuildEnv): Configuration => {
    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        source: path.resolve(__dirname, 'src')
    }

    const mode = (env.mode.length > 0)
        ? env.mode
        : BuildModes.DEV
    const PORT = (!Number.isNaN(env.port))
        ? env.port
        : 3000

    const isDev = mode === BuildModes.DEV

    const config = buildWebpackConfig({
        mode,
        paths: buildPaths,
        isDev,
        port: PORT
    })

    return config
}
