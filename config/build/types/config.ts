export enum BuildModes {
    DEV = 'development',
    PROD = 'production'
}

export interface BuildPaths {
    entry: string
    build: string
    html: string
    source: string
}

export interface BuildOptions {
    mode: BuildModes
    paths: BuildPaths
    isDev: boolean
    port: number
}

export interface BuildEnv {
    mode: BuildModes
    port: number
}
