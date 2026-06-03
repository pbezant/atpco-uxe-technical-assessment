import { LitElement } from 'lit';
/** TODO: these names may change, make it so they reflect Figma */
export declare enum SpinnerColor {
    SLATE = "slate",
    WHITE = "white",
    RED = "red"
}
export declare enum SpinnerSize {
    XXL = "xxl",
    XL = "xl",
    L = "l",
    M = "m",
    S = "s"
}
/**
 * Spinner shows a small, spinning element to indicate that a process
 * is still ongoing and is not yet complete.
 */
export declare class Spinner extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets spinner color
     */
    color: SpinnerColor;
    /**
     * sets spinner size
     */
    size: SpinnerSize;
    /**
     * displays a % in the middle of the spinner; spinner must be size l, xl, xxl to display
     */
    progress: any;
    /**
     * set to true to display spinner's waiting state
     */
    isWaiting: boolean;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-spinner': Spinner;
    }
}
