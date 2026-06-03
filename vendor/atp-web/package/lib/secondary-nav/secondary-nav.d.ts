import { LitElement } from 'lit';
import { MenuListItem } from '../shared/interfaces';
export interface SecondaryNavItem {
    name: string;
    id: string;
    route?: string;
    badge?: string;
    menuItems?: MenuListItem[];
    openDropdownId?: string;
    isDivider?: boolean;
}
type DropdownWithKeyScrolling = HTMLElement & {
    startKeyScrolling: () => void;
    disableKeyScrolling: () => void;
};
/**
 * Secondary Nav contains navigation that's more specific than the header or sidebar navigation.
 * Optionally, each entry can include a number badge, and/or a button that launches a menu Dropdown
 * that can use all the Dropdown features. Entries can also have dividers between them.
 */
export declare class SecondaryNav extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * secondary nav items
     */
    itemsList: SecondaryNavItem[];
    /**
     * active item id
     */
    activeId: string;
    /**
     * sets the value for the aria-label on the navigation tag.
     * Required. Should differentiate this from any other <nav> tag on the page.
     */
    ariaLabel: string;
    /**
     * whether to output a 'navigationEventOutput' event instead of using href to navigate to an item's route
     */
    outputNavigationEvents: boolean;
    /**
     * id of the item in a dropdown menu that's currently open
     */
    openDropdownId: string | null;
    render(): import('lit-html').TemplateResult<1>;
    _navigationHandler(e: Event, item: SecondaryNavItem): void;
    _dropdownHandler(e: CustomEvent<string[]>, item: SecondaryNavItem): void;
    _toggleDropdown(itemId: string): void;
    _closeDropdown(itemId: string): void;
    _getDropdownElement(itemId: string): DropdownWithKeyScrolling | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-secondary-nav': SecondaryNav;
    }
}
export {};
