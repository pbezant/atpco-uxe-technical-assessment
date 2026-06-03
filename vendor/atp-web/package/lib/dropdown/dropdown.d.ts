import { LitElement } from 'lit';
import { MenuListItem } from '../shared/interfaces';
import { VisualPosition } from '../shared/enums';
export declare enum DropdownFilterMatching {
    STARTS_WITH = "starts_with",
    INCLUDES = "includes"
}
export declare enum DropdownFilterPriority {
    BOTH = "both",
    NAME = "name",
    DESCRIPTION = "description"
}
export declare enum DropdownSelectionMode {
    SINGLE = "single",
    MULTIPLE = "multiple"
}
/**
 * Dropdown creates a menu of user choices that "drops down" from its
 * triggering element. It supports both single and multi-select
 * functionality.
 *
 * It can be used with Button to create a component similar to an
 * HTML <code>&lt;select&gt;</code> element, or used with Input to create
 * a combobox component.
 */
export declare class Dropdown extends LitElement {
    static styles: import('lit').CSSResult[];
    /**
     * Required -- items list in the menu, takes array of MenuListItems.
     */
    itemsList: MenuListItem[];
    /**
     * Required -- indicates if menu is visible or not.
     */
    isMenuVisible: boolean;
    /**
     * set to true to show search input. Default: false
     */
    isSearchVisible: boolean;
    /**
     * use to preset a search value string. Default: ''
     */
    searchValue: string;
    /**
     * set the activeIndex in the list. Default: null
     */
    activeIds: string[];
    /**
     * use to preset search placeholder text. Default: Search
     */
    placeholder: string;
    /**
     * List opens at selected index (if one has been selected)
     */
    openAtActiveIndex: boolean;
    /**
     * set css value for max height of the dropdown, default: '300px'
     */
    maxHeight: string;
    /**
     * set to true to show checkmarks
     */
    showCheckmarks: boolean;
    /**
     * set menu item description position
     */
    visualPosition: VisualPosition;
    /**
     * set how the search feature matches content
     */
    filterMatching: DropdownFilterMatching;
    /**
     * set how the search feature prioritizes results
     */
    filterPriority: DropdownFilterPriority;
    /**
     * set whether the dropdown allows one selected item or multiple selected items, for single
     * select behavior selected items cannot be unselected by clicking them
     */
    selectionMode: DropdownSelectionMode;
    render(): import('lit-html').TemplateResult<1>;
    _childDropdown: Dropdown;
    _hasClickedOnce: boolean;
    _focusIndex: number;
    _titleList: any[];
    _activeItem: {
        position: number;
        id: string;
        children: any[];
        index: number;
    };
    _isKeyboard: boolean;
    constructor();
    get filteredItemList(): MenuListItem[];
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProps: Map<string, unknown>): Promise<void>;
    _handleChildClick({ detail }: {
        detail: any;
    }): void;
    startKeyScrolling(): void;
    disableKeyScrolling(): void;
    _closeDropdown({ keyboard }?: {
        keyboard?: boolean;
    }): void;
    _clickOutsideHandler: (e: MouseEvent) => void;
    _onClick(item: MenuListItem, e?: MouseEvent): void;
    _matchesSearchValue(value: string): boolean;
    _filterMenuItem(item: MenuListItem): boolean;
    _focusHandler(item: MenuListItem, index: number): void;
    _selectAll(i: number, isDeselectAll: boolean): void;
    _setTitleButtons(): void;
    _handleChildKeydown(e: KeyboardEvent): void;
    _onItemKeydown(e: KeyboardEvent, index: number, isParent?: boolean): void;
    _focusItem(index: number, isHover: boolean, direction?: number, isReturn?: boolean): void;
    _handleOpenAtActive(): Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'atp-dropdown': Dropdown;
    }
}
