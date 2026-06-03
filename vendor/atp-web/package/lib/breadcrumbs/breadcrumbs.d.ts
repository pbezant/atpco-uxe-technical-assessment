import { LitElement } from 'lit';
export interface BreadcrumbItem {
    name: string;
    href?: string;
    emitEvent?: boolean;
    id?: string;
}
export declare enum BreadcrumbsSize {
    LARGE = "large",
    SMALL = "small"
}
/**
 * Breadcrumbs are list of links to the ancestor pages of the current page,
 * in hierarchical order. They help the user find their place within the
 * application flow.
 */
export declare class Breadcrumbs extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * Required -- items list in the menu, takes array of BreadcrumbItems.
     */
    itemsList: BreadcrumbItem[];
    /**
     * set size 'large' | 'small'
     */
    size: BreadcrumbsSize;
    private _onClick;
    render(): import('lit-html').TemplateResult<1>;
    _getClasses(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-breadcrumbs': Breadcrumbs;
    }
}
