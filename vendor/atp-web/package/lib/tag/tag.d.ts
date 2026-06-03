import { LitElement } from 'lit';
import { IconConfig } from '../icon/icon';
export interface TagConfig {
    label: string;
    icon: IconConfig;
    isAction: boolean;
    disabled: boolean;
    color?: TagColor;
    appearance?: TagAppearance;
}
export declare enum TagAppearance {
    FILL = "fill",
    FILL_DARK = "fill-dark",
    OUTLINE = "outline"
}
export declare enum TagColor {
    BLUE = "blue",
    PURPLE = "purple",
    GREEN = "green",
    PINK = "pink",
    ORANGE = "orange",
    UTILITY_BLUE = "utility-blue",
    DARK_SLATE = "dark-slate",
    LIGHT_SLATE = "light-slate"
}
/**
 * Tag creates a small, interactive element providing some current information
 * (e.g. a user selection).
 */
export declare class Tag extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets string label shown on tag
     */
    label: string;
    /**
     * option to add icon to the right of the label
     */
    icon: IconConfig;
    /**
     * indicates if tag is clickable or not
     */
    isAction: boolean;
    /**
     * indicates if actionable tag is disabled or not, isAction must be true
     */
    disabled: boolean;
    /**
     * set tag color
     */
    color: TagColor;
    /**
     * set tag appearance
     */
    appearance: TagAppearance;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
    _handleClick(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-tag': Tag;
    }
}
