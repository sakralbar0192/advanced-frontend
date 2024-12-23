import { BuildPaths } from "../build/types/config"
import { Configuration, DefinePlugin, type RuleSetRule } from "webpack"
import path from "path"
import { buildStyleLoader } from "../build/buildStyleLoader"
import { buildSvgLoader } from "../build/buildSvgLoader"

export default ({ config }: { config: Configuration}) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        source: path.resolve(__dirname, '..', '..', 'src')
    }

    config.resolve?.modules?.push(paths.source, 'node_modules')
    config.resolve?.extensions?.push('.ts', '.tsx')
    if (config.resolve) {
        config.resolve.preferAbsolute = true;

        if (config.resolve.alias) {
            config.resolve.alias = {
                ...config.resolve.alias,
                entities: path.resolve(__dirname, '..', '..', 'src', 'entities')
            }
        }
    }   

    if (config.module?.rules) {
        config.module.rules = config.module?.rules
            ? config.module.rules.map((rule: RuleSetRule) => {
                if(/svg/.test(rule.test as string)) {
                    return { ...rule, exclude: /\.svg$/i} 
                }
                return rule
            })
            : config.module?.rules

        config.module?.rules?.push(buildStyleLoader(true))
        config.module?.rules?.push(buildSvgLoader())
    }

    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
        })
    )

    return config
}