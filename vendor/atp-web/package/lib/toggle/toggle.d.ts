import { LitElement } from 'lit';
export declare enum LabelPosition {
    INLINE_START = "inline-start",
    INLINE_END = "inline-end",
    LEFT = "left",// DEPRECATED
    RIGHT = "right"
}
/**
 * Toggle creates an interactive element that switches between an
 * on and an off state.
 */
export declare class Toggle extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets the text for the toggle's label
     */
    label: any;
    /**
     * sets the position for the toggle's label
     */
    labelPosition: LabelPosition;
    /**
     * sets the text for the toggle's description
     */
    description: any;
    /**
     * sets the name for the toggle, which is submitted with the form
     */
    name: any;
    /**
     * sets the value for the toggle, which is submitted with the form
     */
    value: any;
    /**
     * sets the value for the aria-label on the input
     * overriding native prop so that we can pass the value along to the toggle
     */
    ariaLabel: any;
    /**
     * sets the value for the aria-errormessage on the input
     */
    ariaErrorMessage: any;
    /**
     * sets the checked state of the toggle. Default: false
     */
    checked: boolean;
    /**
     * sets the disabled state of the toggle. Default: false
     */
    disabled: boolean;
    /**
     * sets the toggle to an error/invalid state. Default: false
     */
    isError: boolean;
    /**
     * sets the required state of the toggle. Default: false
     */
    required: boolean;
    /**
     * sets whether the toggle and label have a visible border. Default: false
     */
    bordered: boolean;
    /**
     * set tab index property of button, default = 0
     */
    tabindex: number;
    private _inputId;
    private inputRef;
    static get formAssociated(): boolean;
    private _internals;
    constructor();
    render(): import('lit-html').TemplateResult<1>;
    private _invalidMessage;
    private setValidity;
    checkValidity(): boolean;
    reportValidity(): void;
    get validity(): ValidityState;
    get validationMessage(): string;
    updated(changedProps: Map<string, unknown>): void;
    private _onKeyDown;
    private _onChange;
    private _onClick;
    private _onFocus;
    private _onBlur;
    private _getContainerStyleClasses;
    connectedCallback(): void;
    formDisabledCallback(disabled: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-toggle': Toggle;
    }
}
