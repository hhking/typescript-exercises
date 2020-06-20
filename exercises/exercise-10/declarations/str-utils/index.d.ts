declare module 'str-utils' {
    // export const ...
    // export function ...
    type StrFunc = (value: string) => string;
    export const strReverse: StrFunc;
    export const strToLower: StrFunc;
    export const strToUpper: StrFunc;
    export const strRandomize: StrFunc;
    export const strInvertCase: StrFunc;
}
