import { LitElement, PropertyValues } from 'lit';
/**
 * Checkbox is an interactive element with a single value of either
 * checked or unchecked, indicating checked status with a checkmark.
 */
export declare class Checkbox extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets the text for the checkbox's label
     */
    label: any;
    /**
     * sets the name for the checkbox, which is submitted with the form
     */
    name: any;
    /**
     * sets the value for the checkbox, which is submitted with the form
     */
    value: any;
    /**
     * sets the value for the aria-label on the input
     * overriding native prop so that we can pass the value along to the checkbox
     */
    ariaLabel: any;
    /**
     * sets the value for the aria-errormessage on the input
     */
    ariaErrorMessage: any;
    /**
     * sets the checked state of the checkbox. Default: false
     */
    checked: boolean;
    /**
     * sets the disabled state of the checkbox. Default: false
     */
    disabled: boolean;
    /**
     * sets the checkbox to an indeterminate state. Default: false
     */
    indeterminate: boolean;
    /**
     * sets the checkbox to an error/invalid state. Default: false
     */
    isError: boolean;
    /**
     * sets the required state of the checkbox. Default: false
     */
    required: boolean;
    /**
     * sets whether the checkbox and label have a visible border. Default: false
     */
    bordered: boolean;
    /**
     * set tab index property of button, default = 0
     */
    tabindex: number;
    checkIconTemplate(): import('lit-html').TemplateResult<1>;
    indeterminateIconTemplate(): import('lit-html').TemplateResult<1>;
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
    update(changedProperties: PropertyValues): void;
    private _onChange;
    private _onClick;
    private _onFocus;
    private _onBlur;
    private _getContainerStyleClasses;
    private _getInputStyleClasses;
    connectedCallback(): void;
    formDisabledCallback(disabled: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-checkbox': Checkbox;
    }
}
