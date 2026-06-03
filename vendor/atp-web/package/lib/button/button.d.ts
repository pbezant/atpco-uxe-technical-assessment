import { LitElement } from 'lit';
import { IconConfig } from '../icon/icon';
import { VisualSize } from '../shared/enums';
import { SpinnerColor } from '../spinner/spinner';
export interface ButtonConfig {
    id?: string;
    label?: string;
    appearance?: ButtonAppearance;
    size?: VisualSize;
    isDestructive?: boolean;
    disabled?: boolean;
    hasTextBlockPadding?: boolean;
    iconPosition?: IconPosition;
    iconAriaLabel: '';
    tabNumber?: number;
    isLoading: boolean;
    iconConfig: IconConfig;
}
export declare enum ButtonAppearance {
    FILL = "fill",
    OUTLINE = "outline",
    TEXT = "text"
}
export declare enum IconPosition {
    LEFT = "left",
    RIGHT = "right"
}
export declare enum ButtonSize {
    LARGE = "large",
    MEDIUM = "medium",
    SMALL = "small"
}
export type ButtonType = 'button' | 'submit' | 'reset';
/**
 * Button is an interactive element that performs an action when activated.
 */
export declare class Button extends LitElement {
    static styles: import('lit').CSSResult[];
    static get formAssociated(): boolean;
    private _internals;
    constructor();
    /**
     * sets the button's submit behavior: 'button' (default, no implicit action),
     * 'submit' (submits the associated form), or 'reset' (resets the associated form)
     */
    type: ButtonType;
    /**
     * sets the name submitted with the form when type='submit'
     */
    name: string;
    /**
     * sets the value submitted with the form when type='submit'
     */
    value: string;
    /**
     * sets string label shown on button
     */
    label: string;
    /**
     * set appearance 'fill' | 'outline' | 'text'
     */
    appearance: ButtonAppearance;
    /**
     * set size 'large' | 'medium' | 'small'
     */
    size: ButtonSize;
    /**
     * set if action is destructive
     */
    isDestructive: boolean;
    /**
     * set to true to set button as disabled. Default: false
     */
    disabled: boolean;
    /**
     * IconPosition enum with values: 'LEFT' or 'RIGHT' to set the position of the icon in relation to the label. Default: LEFT
     */
    iconPosition: IconPosition;
    /**
     * icon config for icon in button
     */
    iconConfig: IconConfig;
    /**
     * icon config for secondary icon in button which sits on the opposite side of the primary icon
     */
    secondaryIconConfig: IconConfig;
    /**
     * set tab index property of button, default = 0
     */
    tabNumber: number;
    /**
     * set true to display a loading spinner. not supported for xs buttons.
     */
    isLoading: boolean;
    /**
     * set true to invert the focus color, so that it can be seen on dark backgrounds
     */
    focusInverse: boolean;
    /**
     * sets the value of the data-tracking-id attribute on the button element
     */
    dataTrackingId: any;
    /**
     * sets icon clickable button to be white, use for when it is placed on dark backgrounds
     */
    iconClickableLight: boolean;
    /**
     * whether the button is full-width
     */
    fullWidth: boolean;
    /**
     * whether text buttons keep the block padding and block size from their size
     */
    hasTextBlockPadding: boolean;
    _buttonElement: HTMLButtonElement;
    render(): import('lit-html').TemplateResult<1>;
    _onClick(): void;
    /**
     * the form this button is associated with, or null if not in a form
     */
    get form(): HTMLFormElement | null;
    formDisabledCallback(disabled: boolean): void;
    _onFocus(): void;
    _onBlur(): void;
    focusButton(): void;
    blurButton(): void;
    _getSpinnerColor(): SpinnerColor;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-button': Button;
    }
}
