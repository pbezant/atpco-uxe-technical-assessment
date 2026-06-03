import { LitElement } from 'lit';
export interface BadgeConfig {
    label: string;
    color: string;
    backgroundColor: string;
}
export interface IconConfig {
    height?: number;
    color?: string;
    hoverColor?: string;
    pressedColor?: string;
    icon: string;
    badge?: BadgeConfig;
    label?: string;
}
/**
 * Icon provides a glyph meant to convey meaning.
 */
export declare class Icon extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * Required -- icon may be a full svg tag or the id value of a specific icon in the icon sprite.
     * WARNING: "icon" input will be injected into DOM as HTML, potentially offering an attack vector
     * for malicious code. Be careful with authorization for setting "icon" input
     */
    icon: string;
    /**
     * set the height of the icon in pixels
     */
    height: number;
    /**
     * set the fill color of the icon (hex #, rgba, etc.)
     */
    color: string;
    /**
     * optional, set hover/focus-visible color, defaults to color if not specified
     */
    hoverColor: string;
    /**
     * optional, set pressed color, defaults to color if not specified
     */
    pressedColor: string;
    /**
     * set optional badge, this is intended for a 16 x 16 icon
     */
    badge: BadgeConfig;
    render(): import('lit-html').TemplateResult<1>;
    constructor();
    _heightString: string;
    _widthString: string;
    _getSvgStringRef(): string;
    _getSvgString(iconSrc: string): string;
    _setStyles(): void;
    _getHtml(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-icon': Icon;
    }
}
