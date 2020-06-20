declare module 'stats' {
    type ComparatorFunc<T> = (firstEl: T, secondEl: T) => number;
    type IndexFunc = <T>(input: T[], comparator: ComparatorFunc<T>) => number;
    type EleFunc = <T>(input: T[], comparator: ComparatorFunc<T>) => T;
    type GetValueFunc = <T, K>(input: T[], getValue: (item: T) => K) => K;

    export const getMaxIndex: IndexFunc;
    export const getMinIndex: IndexFunc;
    export const getMedianIndex: IndexFunc;
    export const getMaxElement: EleFunc;
    export const getMinElement: EleFunc;
    export const getMedianElement: EleFunc;
    export const getAverageValue: GetValueFunc;
}
