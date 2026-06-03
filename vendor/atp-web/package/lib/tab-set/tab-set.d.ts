import { LitElement } from 'lit';
import { SegmentColor, SegmentSize } from '../shared/enums';
import { MenuListItem } from '../shared/interfaces';
import { IconConfig } from '../icon/icon';
export interface TabConfig {
    name: string;
    badge?: string;
    disabled?: boolean;
    id: string;
    ariaControls?: string;
    menuItemsList?: MenuListItem[];
    iconConfig?: IconConfig;
}
export declare enum TabAppearance {
    DEFAULT = "default",
    SEGMENTED = "segmented"
}
/**
 * Tab Set combines a tab bar with a set of matching tab panels,
 * so that clicking on a tab will show the corresponding
 * tab panel. The tabs and tab panels are zero-indexed.
 */
export declare class TabSet extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * set tab items
     */
    tabs: TabConfig[];
    /**
     * set if tab set should take up all available width: default = true
     */
    isFullWidth: boolean;
    /**
     * set tab active index
     */
    activeIndex: number;
    /**
     * sets the value for the aria-label prop on the tablist
     * overriding native prop so that we can pass the value along to the tablist
     */
    ariaLabel: any;
    /**
     * set appearance 'default' | 'segmented'
     */
    appearance: TabAppearance;
    /**
     * set segmented size 'large' | 'medium' | 'small'
     * note: size 'small' does not support badges or dropdown menus
     */
    segmentSize: SegmentSize;
    /**
     * set segmented color 'default' | 'utility-blue' | 'slate'
     */
    segmentColor: SegmentColor;
    _lastKeyPressed: string;
    _activeDropdown: string;
    _tabBarRef: HTMLElement;
    render(): import('lit-html').TemplateResult<1>;
    _getTabSetClasses(): string;
    _getTabClasses(item: TabConfig, index: number): string;
    _showSegmentIcon(item: TabConfig): boolean;
    _getTabContent(tab: TabConfig): import('lit-html').TemplateResult<1>;
    _getTabPanelClasses(index: number): string;
    _getTabMenuButtonClasses(index: number): string;
    _onKeyDown(e: KeyboardEvent): Promise<void>;
    connectedCallback(): Promise<void>;
    disconnectedCallback(): void;
    _tabHandler: () => void;
    _clickHandler(i: number): void;
    _toggleDropdown(id: string, isActive: boolean): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-tab-set': TabSet;
    }
}
