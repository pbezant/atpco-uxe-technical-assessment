import { LitElement } from 'lit';
export declare enum DividerOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}
/**
 * Divider creates a dividing line to visually separate sections of content.
 */
export declare class Divider extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * set orientation 'horizontal' | 'vertical'
     */
    orientation: DividerOrientation;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-divider': Divider;
    }
}
