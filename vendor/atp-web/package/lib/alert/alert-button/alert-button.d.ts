import { LitElement } from 'lit';
import { IconConfig } from '../../icon/icon';
import { ButtonAppearance, ButtonSize, IconPosition } from '../../button/button';
export declare enum AlertButtonAppearance {
    FILL = "fill",
    TEXT = "text"
}
export declare enum TextButtonColor {
    LIGHT = "light",
    DARK = "dark",
    DANGER = "danger"
}
/**
 * Alert Button is an internal button component for Alert.
 */
export declare class AlertButton extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets string label shown on button
     */
    label: string;
    /**
     * set appearance 'fill' | 'text'
     */
    appearance: ButtonAppearance;
    /**
     * set size 'large' | 'medium' | 'small'
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
     * set true to display a loading spinner. not supported for xs buttons.
     */
    isLoading: boolean;
    /**
     * set loader color
     */
    lightLoader: boolean;
    /**
     * sets text button color
     */
    textButtonColor: TextButtonColor;
    /**
     * set true to invert the focus color, so that it can be seen on dark backgrounds
     */
    focusInverse: boolean;
    render(): import('lit-html').TemplateResult<1>;
    private _onClick;
    private _getClasses;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-alert-button': AlertButton;
    }
}
