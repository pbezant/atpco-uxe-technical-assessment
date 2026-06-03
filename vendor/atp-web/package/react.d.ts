type WebComponentProps<T extends HTMLElement> = {
    [K in keyof T as K extends keyof HTMLElement ? never : K]?: T[K];
} & {
    id?: string;
    class?: string;
    style?: string;
    slot?: string;
    part?: string;
    children?: unknown;
};
type AtpTagName = {
    [K in keyof HTMLElementTagNameMap]: K extends `atp-${string}` ? K : never;
}[keyof HTMLElementTagNameMap];
type AtpElements = {
    [K in AtpTagName]: WebComponentProps<HTMLElementTagNameMap[K]>;
};
declare module 'react' {
    namespace JSX {
        interface IntrinsicElements extends AtpElements {
        }
    }
}
declare global {
    namespace JSX {
        interface IntrinsicElements extends AtpElements {
        }
    }
}
export {};
