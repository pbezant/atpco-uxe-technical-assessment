import { LitElement } from 'lit';
import { ButtonSize, ButtonAppearance, IconPosition } from '../button/button';
import { IconConfig } from '../icon/icon';
/**
 * ButtonSplit is an interactive element with two actions.
 * The lefthand action is a button or checkbox; the righthand action is used to launch a related dropdown menu.
 */
export declare class ButtonSplit extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets the string label shown on the lefthand action. For a favorite, this sets a visually-hidden label, required for a11y
     */
    label: string;
    /**
     * sets the visually-hidden label on the righthand dropdown menu action. Required, for a11y
     */
    menuLabel: string;
    /**
     * set to true to set both parts of the split button to disabled. Default: false
     */
    disabled: boolean;
    /**
     * set appearance 'fill' | 'outline' | 'text'
     */
    appearance: ButtonAppearance;
    /**
     * set size 'large' | 'medium' | 'small'. Default: medium
     */
    size: ButtonSize;
    /**
     * IconPosition enum with values: 'LEFT' or 'RIGHT' to set the position of the icon in relation to the label. Default: LEFT
     */
    iconPosition: IconPosition;
    /**
     * icon config for icon in button
     */
    iconConfig: IconConfig;
    /**
     * whether the primary (left) action is a favorite checkbox. Default: false
     */
    favorite: boolean;
    /**
     * if a favorite, whether it is checked. Default: false
     */
    checked: boolean;
    /**
     * sets the value of the data-tracking-id attribute on the button element
     */
    dataTrackingId: any;
    _buttonElement: HTMLButtonElement;
    render(): import('lit-html').TemplateResult<1>;
    _onButtonClick(): void;
    _onButtonFocus(): void;
    _onButtonBlur(): void;
    _onButtonChange(e: Event): void;
    _onMenuClick(): void;
    _onMenuFocus(): void;
    _onMenuBlur(): void;
    focusButton(): void;
    blurButton(): void;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-button-split': ButtonSplit;
    }
}
