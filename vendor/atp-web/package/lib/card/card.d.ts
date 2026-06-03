import { LitElement } from 'lit';
export declare enum CardColor {
    DEFAULT = "default",
    RED = "red",
    ORANGE = "orange",
    GREEN = "green",
    BLUE = "blue",
    PURPLE = "purple"
}
export declare enum CardHeaderFill {
    DEFAULT = "default",
    RED = "red",
    ORANGE = "orange",
    GREEN = "green",
    BLUE = "blue",
    PURPLE = "purple",
    LIGHT_SLATE = "light-slate"
}
export declare enum CardDensity {
    DEFAULT = "default",
    COMPACT = "compact",
    WIDE = "wide"
}
export declare enum CardBorderDecoration {
    DEFAULT = "default",
    START = "start"
}
export declare enum CardDivider {
    DEFAULT = "default",
    HEADER = "header",
    FOOTER = "footer",
    BOTH = "both"
}
/**
 * Card is a container that visually groups some related information about a single subject.
 */
export declare class Card extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * card color scheme
     */
    color: CardColor;
    /**
     * visual density of the card
     */
    density: CardDensity;
    /**
     * border decoration style
     */
    borderDecoration: CardBorderDecoration;
    /**
     * whether to show dividers between header/content/footer
     */
    divider: CardDivider;
    /**
     * is the card collapsible, where clicking on the header expands/collapses the content
     */
    collapsible: boolean;
    /**
     * if the card is collapsible, whether it is open by default
     */
    open: boolean;
    /**
     * the fill (background) color for the header
     */
    headerFill: CardHeaderFill;
    /**
     * whether the card content is full-bleed, with no inline padding
     */
    fullBleed: boolean;
    private isAnimating;
    render(): import('lit-html').TemplateResult<1>;
    private _getStyleClasses;
    private _onDetailsToggle;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-card': Card;
    }
}
/**
 * Card Header subcomponent
 */
export declare class CardHeader extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * visual density of the card
     */
    density: CardDensity;
    render(): import('lit-html').TemplateResult<1>;
    private _getStyleClasses;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-card-header': CardHeader;
    }
}
/**
 * Card Footer subcomponent
 */
export declare class CardFooter extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * visual density of the card
     */
    density: CardDensity;
    render(): import('lit-html').TemplateResult<1>;
    private _getStyleClasses;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-card-footer': CardFooter;
    }
}
