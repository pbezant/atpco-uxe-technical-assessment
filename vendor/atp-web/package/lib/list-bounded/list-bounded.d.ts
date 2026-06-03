import { LitElement } from 'lit';
/**
 * ListBounded groups a collection of items, providing a common visual style with bounding lines.
 */
export declare class ListBounded extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * whether the list is ordered (<ol>) instead of unordered (<ul>). Default false (<ul>)
     */
    ordered: boolean;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-list-bounded': ListBounded;
    }
}
/**
 * List Item subcomponent
 */
export declare class ListBoundedItem extends LitElement {
    static styles: import('lit').CSSResult[];
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-list-bounded-item': ListBoundedItem;
    }
}
