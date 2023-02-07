import path from 'path';
import { BuildEnv, BuildPaths } from 'config/types/config';
import { buildWebpackConfig } from './config/buildWebpackConfig';



export default (env: BuildEnv) => {
    const buildPaths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html')
    }

    const mode = env.mode || 'development';
    const PORT = env.port || 3000;

    const isDev = mode === 'development';

    const config = buildWebpackConfig({
        mode,
        paths: buildPaths,
        isDev,
        port: PORT
    })

    return config
}