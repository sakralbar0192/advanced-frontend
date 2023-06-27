import type webpack from 'webpack'
import { buildStyleLoader } from './build/buildStyleLoader'
import { buildSvgLoader } from './build/buildSvgLoader'
import { type BuildOptions } from './types/config'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }
    const svgLoader = buildSvgLoader()

    const babelLoader = {
        test: /\.(js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: [
                    [
                        'i18next-extract',
                        {
                            locales: ['ru', 'en'],
                            keyAsDefaultValue: true
                        }
                    ]
                ]
            }
        }
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const styleLoader = buildStyleLoader(isDev)

    return [
        babelLoader,
        typescriptLoader,
        styleLoader,
        svgLoader,
        fileLoader
    ]
}
