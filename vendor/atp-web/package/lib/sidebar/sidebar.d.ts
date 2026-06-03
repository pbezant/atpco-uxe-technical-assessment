import { LitElement } from 'lit';
import { IconConfig } from '../icon/icon';
export interface SidebarItem {
    name: string;
    id: string;
    children?: SidebarItem[];
    icon?: IconConfig;
    route?: string;
}
export interface SidebarColorConfig {
    hover: string;
    active: string;
    selected: string;
    selectedSection: string;
}
/**
 * Sidebar provides the standard sidebar on ATPCO apps running Lift.
 */
export declare class Sidebar extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sidebar items
     */
    items: SidebarItem[];
    /**
     * active item id
     */
    activeId: string;
    /**
     * list of child item ids that should display their children
     */
    openIds: string[];
    /**
     * secondary sidebar items
     */
    secondaryItems: SidebarItem[];
    /**
     * set if sidebar is open
     */
    sidebarHidden: boolean;
    /**
     * set custom colors
     */
    colorConfig: SidebarColorConfig;
    /**
     * output 'navigationEventOutput' event with selected SidebarItem instead of utilizing href
     * to navigate to SidebarItem's route
     */
    outputNavigationEvents: boolean;
    private _buttonSlot;
    _buttonContent: boolean;
    render(): import('lit-html').TemplateResult<1>;
    _setCustomColors(): string;
    _sidebarOpenIcon: string;
    _onSlotChange(): void;
    _toggleSidebar(status: boolean): void;
    _navigationHandler(e: Event, item: SidebarItem): void;
    _toggleOpenId(id: string): void;
    firstUpdated(): void;
    updated(changedProps: Map<string, unknown>): void;
    _containsActive(item: SidebarItem): boolean;
    _handleKeydown(e: KeyboardEvent): void;
    _getSidebarClass(): string;
    _getToggleClass(): string;
    _getButtonClasses(classes: string[], isActive?: boolean, isOpen?: boolean): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-sidebar': Sidebar;
    }
}
