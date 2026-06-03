import { LitElement, PropertyValues } from 'lit';
import { IconConfig } from '../icon/icon';
import { TagConfig } from '../tag/tag';
import { Dropdown } from '../dropdown/dropdown';
export declare enum DropdownPosition {
    LEFT = "left",
    RIGHT = "right"
}
export declare enum InputSize {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small"
}
/**
 * InputField creates a text input field for the user to enter text.
 * It supports both single-line entry (via `<input>`) or multi-line (via `<textarea>`).
 */
export declare class InputField extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * indicates if "*" is shown
     */
    required: boolean;
    /**
     * sets left icon
     */
    iconLeft: IconConfig;
    /**
     * sets right icon.
     * For inputs with dropdowns, if these fields are omitted, they will be filled with defaults:
     * {icon: 'chevron-down', height: 16, label: 'Toggle dropdown menu'}.
     */
    iconRight: IconConfig;
    /**
     * sets icon on right to clickableButton
     */
    iconRightClickable: boolean;
    /**
     * sets input to error state
     */
    isError: boolean;
    /**
     * indicates if dropdown should be left or right aligned. If not set dropdown will default to width
     * of input. If left/right is set, dropdown width should be set on dropdown element.
     */
    dropdownPosition: DropdownPosition;
    /**
     * tag list
     */
    tags: TagConfig[];
    /**
     * sets input to disabled
     */
    disabled: boolean;
    /**
     * sets input to readonly
     */
    readonly: boolean;
    /**
     * sets input to support a textarea
     */
    textarea: boolean;
    /**
     * sets input size variant
     */
    size: InputSize;
    _slottedInputElements: (HTMLInputElement | HTMLTextAreaElement)[];
    _slottedLabelElements: HTMLElement[];
    _slottedDropdownElements: Dropdown[];
    inputElementRef: HTMLInputElement | HTMLTextAreaElement;
    dropdownElementRef: Dropdown;
    _dropdownVisible: boolean;
    _isSelect: boolean;
    _isMultiSelect: boolean;
    render(): import('lit-html').TemplateResult;
    firstUpdated(): Promise<void>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    update(changedProperties: PropertyValues): void;
    _clickOutsideHandler: (e: MouseEvent) => void;
    _iconClicked(): void;
    _tagRemoveHandler(label: string, index: number): void;
    _handleClick: (e: MouseEvent) => void;
    _toggleDropdown(status: boolean): void;
    _singleItemSelect: () => void;
    _onInputKeydown: (e: KeyboardEvent) => void;
    get _iconRightWithDefaults(): IconConfig;
    _applyInputSizeStyles(): void;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-input-field': InputField;
    }
}
