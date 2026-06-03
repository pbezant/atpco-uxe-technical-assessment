import { LitElement } from 'lit';
/**
 * Anchor Bar contains a list of anchor links to sections of the page, with a "scrollspy"
 * that will adjust the active link based on user scrolling.
 */
export declare class AnchorBar extends LitElement {
    static styles: import('lit').CSSResult[];
    /** Required: Id of the scrollable viewport (must be an ancestor).  */
    scrollableViewportId: string;
    /** Required: Id of parent bar, if not defaults to this element  */
    parentBarId: string;
    /** Total top offset (header + any bar height) where the section should align. */
    scrollOffsetTop: number;
    _anchorBarLinks: NodeListOf<HTMLAnchorElement> | null;
    _activeIndex: number;
    _sectionIds: string[];
    _intersectionObserver: IntersectionObserver | null;
    _observedEls: Element[];
    private _io?;
    private _rootEl?;
    private _sentinel?;
    /** _lockedIndex is set to tempoarily force an active index, this is to prevent flashing between
     * different tabs if a user makes a selection that causes a lot of scroll e.g. index 0 -> 5
     */
    _lockedIndex: number | null;
    _isProgrammaticScroll: boolean;
    _scrollIdleTimer: number | null;
    readonly _lockEpsilonPx = 12;
    readonly _idleMs = 150;
    readonly _overshootPx = 1;
    _getContainer(): HTMLElement;
    /** Gets top activation boundry, it use this to compare to section positions to determine which is active  */
    _getActivationLineTop(): number;
    _scrollTo(top: number): void;
    /** Compute target scrollTop for a given section, for either window or element root. */
    _computeTargetScrollTop(section: HTMLElement): number;
    _onScroll: () => void;
    _attachScrollListener(): void;
    _detachScrollListener(): void;
    _onHostClick: (e: Event) => void;
    /** set active link */
    _selectLinkByIndex(index: number): void;
    /** Logic for setting the active section  */
    _updateActiveSectionFromPositions(): void;
    _setupObserverAndSections: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    _handleIntersection: (_entries: IntersectionObserverEntry[]) => void;
    render(): import('lit-html').TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-anchor-bar': AnchorBar;
    }
}
