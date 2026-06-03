import { LitElement } from 'lit';
import { Dropdown } from '../dropdown/dropdown';
import { BadgeConfig } from '../icon/icon';
export declare enum HeaderLogoType {
    ATPCO = "atpco",
    THREE_VICTORS = "three_victors"
}
export interface HeaderActionConfig {
    id: string;
    icon: string;
    size: number;
    label: string;
    badge: BadgeConfig;
    rightAligned?: boolean;
}
export interface HeaderNavItem {
    name: 'string';
    id: 'string';
    href?: string;
}
/**
 * Header creates the standard page header on ATPCO apps.
 */
export declare class Header extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * sets sets title on header
     */
    label: string;
    /**
     * sets current org shown in header
     */
    org: string;
    /**
     * sets whether user can change organizations
     */
    isSwitchable: boolean;
    /**
     * sets whether search is shown
     */
    hasSearch: boolean;
    /**
     * sets icons on the right of the sidebar
     */
    iconActions: HeaderActionConfig[];
    /**
     * set href for home button, if none is provided header will emit
     * homeEventOutput when atpco logo is clicked
     */
    homeHref: string;
    /**
     * navigation links to display in the header, if no 'route' property is given a
     * navigationEventOutput event with the link item's id will be fired on click
     */
    navItems: HeaderNavItem[];
    /**
     * id of active navItem, if one exists
     */
    activeNavItem: string;
    /**
     * set logo header displays
     * default: atpco
     */
    logoType: HeaderLogoType;
    _slottedOrgElements: Dropdown[];
    _slottedDropdownElements: Dropdown[];
    render(): import('lit-html').TemplateResult<1>;
    _searchOpen: boolean;
    _menuMap: {};
    _activeIconId: string;
    firstUpdated(): Promise<void>;
    _getNavClasses(item: HeaderNavItem): string;
    _setUpSlotMap(): Promise<void>;
    _navigationHandler(e: Event, item: HeaderNavItem): void;
    disconnectedCallback(): void;
    _toggleAllWrapper(): void;
    /** TODO: eventually remove hasDropdown arguement as all these toggles should have dropdown */
    _toggleMenu(id: string, status: boolean, hasDropdown?: boolean): void;
    _getSearchClasses(): string;
    _goHome(e: Event): void;
    _searchHandler(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-header': Header;
    }
}
