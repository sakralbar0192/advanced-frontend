export type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T

declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false
    }
}
