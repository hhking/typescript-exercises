// This enabled module augmentation mode.
import 'date-wizard';

declare module 'date-wizard' {
    // Add your module extensions here.
    export interface DateDetails {
        year: number;
        month: number;
        date: number;
        hours: number;
        minutes: number;
    }
    export const pad: (s: number) => string;
}
