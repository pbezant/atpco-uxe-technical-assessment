import { LitElement } from 'lit';
import { SegmentColor, SegmentSize } from '../shared/enums';
import { IconConfig } from '../icon/icon';
export interface RadioButtonItem {
    label: string;
    value: string;
    id: string;
    checked?: boolean;
    disabled?: boolean;
    iconConfig?: IconConfig;
}
export declare enum RadioButtonGroupDirection {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
export declare enum RadioButtonGroupAppearance {
    DEFAULT = "default",
    SEGMENTED = "segmented"
}
/**
 * Radio Button Group allows the user to make a single, exclusive choice from
 * a small list of choices. Each choice has a small circle (the "radio button")
 * that becomes filled when it reflects the current choice.
 */
export declare class RadioButtonGroup extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets the name property on the radio buttons
     */
    name: string;
    /**
     * sets whether the radio buttons and labels have a visible border. Default: false
     */
    bordered: boolean;
    /**
     * sets the radio button group to an error/invalid state. Default: false
     */
    isError: boolean;
    /**
     * sets the value for the aria-errormessage on the fieldset
     */
    ariaErrorMessage: any;
    /**
     * sets the required state of the radio button group. Default: false
     */
    required: boolean;
    /**
     * set direction of the group. Default: vertical
     */
    direction: RadioButtonGroupDirection;
    /**
     * Required -- items list in the group, takes array of RadioButtonItem.
     */
    itemsList: RadioButtonItem[];
    /**
     * set appearance 'default' | 'segmented'
     */
    appearance: RadioButtonGroupAppearance;
    /**
     * set segmented size 'large' | 'medium' | 'small'
     */
    segmentSize: SegmentSize;
    /**
     * set segmented color 'default' | 'utility-blue' | 'slate'
     */
    segmentColor: SegmentColor;
    get value(): string;
    private getGroupValue;
    static get formAssociated(): boolean;
    private _internals;
    constructor();
    private fieldsetRef;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
    _showSegmentIcon(item: RadioButtonItem): boolean;
    _getLabelClasses(item: RadioButtonItem): string;
    _getLabelContent(item: RadioButtonItem): string | import('lit-html').TemplateResult<1>;
    private _invalidMessage;
    private setValidity;
    checkValidity(): boolean;
    reportValidity(): void;
    get validity(): ValidityState;
    get validationMessage(): string;
    updated(changedProps: Map<string, unknown>): void;
    connectedCallback(): void;
    private _onChange;
    private _onClick;
    private _onFocus;
    private _onBlur;
}
