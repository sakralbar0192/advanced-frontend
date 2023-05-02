declare module '*.module.scss' {
    const classes: Record<string, string>
    export default classes
}

declare module '*.svg' {
    import type React from 'react'
    const SVG: React.FC<React.SVGProps<SVGSVGElement>>
    export default SVG
}

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
