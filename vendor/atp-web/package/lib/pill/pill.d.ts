import { LitElement } from 'lit';
import { IconConfig } from '../icon/icon';
export declare enum PillColor {
    BLUE = "blue",
    GREEN = "green",
    PINK = "pink",
    PURPLE = "purple",
    ORANGE = "orange",
    DARK_BLUE = "dark-blue",
    LIGHT_SLATE = "light-slate",
    DARK_SLATE = "dark-slate",
    RED = "red"
}
export declare enum PillAppearance {
    FILL = "fill",
    OUTLINE = "outline"
}
/**
 * Pill creates a non-interactive element that displays a small piece of information.
 */
export declare class Pill extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets string label shown on tag
     */
    label: string;
    /**
     * sets icon on the left
     */
    iconLeft: IconConfig;
    /**
     * sets icon on the right
     */
    iconRight: IconConfig;
    /**
     * set appearance, options: fill | outline
     */
    appearance: PillAppearance;
    /**
     * set color of pill
     */
    color: PillColor;
    /**
     * set if pill is actionable
     */
    isAction: boolean;
    /**
     * set if pill is disabled
     */
    disabled: boolean;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
    _handleClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-pill': Pill;
    }
}
