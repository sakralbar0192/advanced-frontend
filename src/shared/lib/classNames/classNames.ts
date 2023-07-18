type Mods = Record<string, boolean | string | undefined>

function ClassNames(cls: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([cls]) => [cls])
    ].join(' ')
}

export { ClassNames }
